import axios  from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddUser = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
    })
    //objectDesitruction
    const { name, username, email, phone } = user;

    //function
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    //onsubmit functin
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        navigate("/");
    };

    return (
        <div className="container mt-5">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A User</h2>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
            <label  class="form-label">Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
            <label  class="form-label">User Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="username"
                value={username}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
            <label  class="form-label">Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={email}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
            <label  class="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={phone}
                onChange={e => onInputChange(e)}
              />
            </div>
          
            <button className="btn btn-primary btn-block mt-4">Add User</button>
          </form>
        </div>
      </div>
    )
}
export default AddUser;