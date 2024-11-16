import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Single = () => {
    const { id } = useParams();
    const navi = useNavigate()

    // State to hold user data
    const [user, setUsers] = useState(null);

    // Fetch data from API when component mounts
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8000/users/${id}`)
                .then((response) => {
                    console.log(response.data); // Check the response in the console
                    setUsers(response.data); // Set the single user data from the response
                })
                .catch((error) => {
                    console.error('Error fetching the user:', error);
                });
        }
    }, [id]);
    
    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>

            <center style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }} >
                <h2 className='mt-4'>User Single Data</h2>
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
                            <tr >
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.num}</td>
                                <td>{user.class || user.clas || user.child || 'N/A'}</td>
                                <td>
                                    <a className='btn btn-primary' href="/">Home</a>
                                </td>
                            </tr>
                    </tbody>
                </table>
            </center>
            <div className='mb-4'>

            </div>
            
        </>
    );
}

export default Single;
