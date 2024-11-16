import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
    // State to hold user data
    const [users, setUsers] = useState([]);

    // Fetch data from API when component mounts
    useEffect(() => {
        axios.get('http://localhost:8000/users')
            .then((response) => {
                setUsers(response.data.reverse()); // Set the user data from the response
            })
            .catch((error) => {
                console.error('Error fetching the users:', error);
            });
    }, []);

    const userDelete = (id) => {
        axios.delete(`http://localhost:8000/users/${id}`)
          .then(response => {
            console.log(response.data);
            // Update state to remove deleted item from the list
            setUsers(users.filter(user => user._id !== id));
          })
          .catch(error => {
            console.log("Error deleting item:", error);
          });
      };

    return (
        <>
            <center style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }} >
                <h2 className='mt-4'>User Data Table</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Num</th>
                            <th>Class/Child</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.num}</td>
                                <td>{user.class || user.clas || user.child || 'N/A'}</td>
                                <td>
                                    <Link className='btn btn-info m-2' to={`/single/${user._id}`} >View </Link>
                                    <Link className='btn btn-danger m-2' onClick={() => userDelete(user._id)} >Delete</Link>
                                    <Link className='btn btn-warning m-2' to={`/change/${user._id}`} >Change</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
            <div className='mb-4'>

            </div>
        </>
    );
}

export default Home;
