import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Change = () => {
    const { id } = useParams();
    const navi = useNavigate()

    const [msg, setmsg] = useState();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        num: '',
        clas: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Fetch data from API when component mounts
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8000/users/${id}`)
                .then((response) => {
                    // console.log(response.data); // Check the response in the console
                    // setUsers(response.data); // Set the single user data from the response
                    setFormData({
                        name: response.data.name,
                        age: response.data.age,
                        num: response.data.num,
                        clas: response.data.clas
                      });
                })
                .catch((error) => {
                    console.error('Error fetching the user:', error);
                });
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        axios.put(`http://localhost:8000/users/${id}`, formData)
        .then(response => {
            console.log('Data updated successfully:', response.data);
            // Optional: Handle UI update after success
            setmsg('Updated');
            setTimeout(()=>{
                setmsg('');
            }, 2000);
        })
        .catch(error => {
            console.log('Error updating data:', error);
        });
       
    };

    return (
        <>

                <div className="container-add-from">
                    <div className="login-form">
                        <div className="login-form-fields">
                        <div className="login-input-group">
                            <div className="name-password-login-button">
                            <div className="user-icon">
                                <i className="fa-solid fa-user" />
                            </div>
                            {msg && <div>{msg}</div>}

                            <form onSubmit={handleSubmit} >
                                <div className="name">
                                <i className="fa-solid fa-user" />
                                <input type="text" name="name" id="user-name" placeholder="Name" value={formData.name}
                        onChange={handleChange} />
                                </div>
                                <div className="password">
                                <i className="fa-solid fa-lock" />
                                <input type="text" name="age" id="user-password" placeholder="Age" value={formData.age}
                        onChange={handleChange} />
                                </div>
                                <div className="name">
                                <i className="fa-solid fa-user" />
                                <input type="text" name="num" id="user-name" placeholder="Number" value={formData.num}
                        onChange={handleChange} />
                                </div>
                                <div className="name">
                                <i className="fa-solid fa-user" />
                                <input type="text" name="clas" id="user-name" placeholder="Bio" value={formData.clas}
                        onChange={handleChange} />
                                </div>
                                <div className="login-btn">
                                <button type="submit">Update User</button>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
            
        </>
    );
}

export default Change;
