import React, { useState, useEffect } from "react";
import UserForm from "./Form";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [get, setGet] = useState("");
  const { id } = useParams();
  console.log(id, "ididid");
  const nevigate = useNavigate();

  useEffect(async () => {
    // getData();
    const res = await axios.get(`http://localhost:8000/employees/${id}`);
    console.log(res.data, "dataaaaa");
    setGet(res.data);
  }, []);

  const editdata = async (data) => {
    const res = await axios.put(
      `http://localhost:8000/employees/${get.id}`,
      data
    );
    console.log(res.data, "@@@@@@");
    setGet(res.data);
    nevigate("/user");
  };

  return (
    <div>
      <h1>Edit</h1>
      <UserForm onSubmit={editdata} initialValues={get} />
    </div>
  );
};

export default Edit;
