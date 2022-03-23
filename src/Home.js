import React from "react";
import UserForm from "./Form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { SubmissionError } from "redux-form";

const Home = () => {
  let navigate = useNavigate();
  const handleSubmit = async (data) => {
    if (data && data.firstName) {
      const res = await axios.post("http://localhost:8000/employees", data);
      // console.log(res.data, "dataaaaaaa");
      navigate("/user");
    } else {
      throw new SubmissionError({ _error: "invalid data" });
    }
  };
  return (
    <div>
      <h1>Add</h1>
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
