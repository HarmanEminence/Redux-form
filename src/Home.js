import React from "react";
import Form from "./Form";
import axios from "axios";
import { SubmissionError } from "redux-form";

const Home = () => {
  const handleSubmit = async (data) => {
    if (data && data.firstName) {
      const res = await axios.post("http://localhost:8000/employees", data);
      console.log(res.data, "dataaaaaaa");
    } else {
      throw new SubmissionError({ _error: "invalid data" });
    }
  };

  return (
    <div>
      {/* <h1>Home</h1> */}
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
