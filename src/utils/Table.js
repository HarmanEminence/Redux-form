import axios from "axios";
import React, { useState, useEffect } from "react";
import Tables from "../component/Tables";
import { Link, useNavigate } from "react-router-dom";

const Table = () => {
  const nevigate = useNavigate();

  const [get, setGet] = useState([]);
  const [edit, setEdit] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(async () => {
    // getData();
    const res = await axios.get("http://localhost:8000/employees", get);
    console.log(res.data, "dataaaaa");
    setGet(res.data);
  }, []);

  // const onHandleEdit = (id) => {
  //   nevigate(`/edit/${id}`);
  // await axios
  //   .put(`http://localhost:8000/employees/${id}`, edit)
  //   .then((res) => {
  //     console.log(res.data, "onnnnnnn");
  //     setEdit(res.data);
  //   });
  // };

  // const getData = async () => {
  //   const res = await axios.get("http://localhost:8000/employees", get);
  //   console.log(res.data, "dataaaaa");
  //   setGet(res.data);
  // };
  // console.log(get, "222222222222");

  return (
    <div>
      <Tables get={get} />
    </div>
  );
};

export default Table;
