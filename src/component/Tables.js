import React, { useState, useEffect } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Tables = (props) => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const editdata = async (id) => {
    navigate(`/edit/${id}`);

    const res = await axios.get(`http://localhost:8000/employees/${id}`);
    console.log(res.data, "edittttttttt");
    // setEdit(res.data);
  };

  return (
    <div>
      <h1>User Table</h1>
      <Link to="/add">
        <Button variant="primary">Add User</Button>{" "}
      </Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.get.map((data, i) => {
            return (
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
                <td>
                  <Button onClick={() => editdata(data.id)}>Edit</Button>
                </td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Tables;
