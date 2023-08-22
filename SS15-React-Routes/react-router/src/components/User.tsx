import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import NavbarComponent from "../layouts/Nav";
import axios from "axios";

function User() {
  // async function postJSON(data: any) {
  //   try {
  //     const response = await fetch("http://localhost:5000/users", {
  //       method: "POST", // or 'PUT'
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     const result = await response.json();
  //     console.log("Success:", result);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }

  // postJSON(data);
  const data = {
    id: Math.floor(Math.random() * 100),
    name: "CaoTV",
    age: 18,
  };
  const dataUser = axios.get("http://localhost:5000/users").then((response) => {
    console.log(response.data);
  });

  const handleCreateUser = () => {
    axios.post("http://localhost:5000/users", data).then((response) => {
      console.log(response.data);
    });
  };

  // const createUser = axios
  //   .delete("http://localhost:5000/users/16")
  //   .then((response) => {
  //     console.log(response.data);
  //   });

  return (
    <div>
      {" "}
      <NavbarComponent />
      <button onClick={handleCreateUser}>Create User</button>
      <h1>User Manager</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default User;
