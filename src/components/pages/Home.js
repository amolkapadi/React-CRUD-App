import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {

    const [user, setUser] = useState([]);


    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
 
        setUser(result.data);
    }
    //delete
    const deleteUser = async(id)=>{
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }

    return (
        <div className='container mt-5'>
            <h1 className='text-center'>All User</h1>
            <table className="table table-success table-striped border shadow mt-5">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope='col'>Contact</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((result)=>(
                              <tr key={result.id}>
                                 <th scope='row'>{result.id}</th>
                                 <td>{result.name}</td>
                                 <td>{result.username}</td>
                                 <td>{result.email}</td>
                                 <td>{result.phone}</td>
                                <td>
                                    <Link  className='button-85  btn-primary mr-2' to={`/users/${result.id}`}>View</Link >
                                    <Link  className='button-85  btn-primary mr-2' to={`/users/edit/${result.id}`}>Edit</Link >   
                                    <Link  className='button-85  btn-primary' onClick={ ()=>deleteUser(result.id)} to="">Delete</Link >
                                </td>
                              </tr>
                               
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Home;