import axios from 'axios';
import React, { useState } from 'react';

const Addnew = () => {
    
    const [msg, setMsg]=useState("");

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        num: '',
        clas: ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const response = await axios.post('http://localhost:8000/add-user', formData);
            console.log('User added:', response.data);

            setMsg('Add Sccuessfully ...'); 
            // Optionally reset the form or show a success message
            setFormData({
                name: '',
                age: '',
                num: '',
                clas: ''
            });

            setTimeout(()=>{
                setMsg('');
            }, 2000);
        } catch (error) {
            console.error('Error adding the user:', error);
        }
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
                            <button type="submit">Add New User</button>
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

export default Addnew;
