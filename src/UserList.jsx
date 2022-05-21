import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import img from "./contactimg.png";

//Create a project using create-react-app.
// Create UserList.js file in src folder
// Install axios.
// You gone to use jsonplaceholder API to get list of user
// Use axios to Get data from Link inside useEffect hooks
// Use UseState hooks to save data into listOfUSer state
// Map listOfUser to display list of user into screen
// Style your App as you wish

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((err) => setError(err));
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }}>
        {users.map((user) => (
          <div key={user.id}>
            <li style={{ listStyleType: "none" }}>
              <img
                src={img}
                alt="contact-img"
                style={{ borderRadius: "50%", height: "40px" }}
              />
              <h5>Username: {user.username}</h5>
              <h6>Email: {user.email}</h6>
            </li>
            {error && <div>Error!something went wrong</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
