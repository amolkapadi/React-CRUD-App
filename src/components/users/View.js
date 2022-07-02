import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="button-85 " to="/">
        back to Home
      </Link>
    
      <hr />
      <ul className="list-group w-50 mx-auto">
        <li className="list-group-item"><span className="fw-bold">Name: </span>{user.name}</li>
        <li className="list-group-item"><span className="fw-bold">User name:</span> {user.username}</li>
        <li className="list-group-item"><span className="fw-bold">Email:</span> {user.email}</li>
        <li className="list-group-item"><span className="fw-bold">Phone: </span>{user.phone}</li>
       
      </ul>
    </div>
  );
};

export default View;
