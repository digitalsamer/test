import React, { useState } from 'react';
import './contact.css';
import axios from 'axios';

const Contact = () => {

    const [msg, setmsg] = useState();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        msg: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const response = await axios.post('http://localhost:8000/add-contact', formData);
            console.log('User added:', response.data);

            setmsg('Send Sccuessfully ...'); 
            // Optionally reset the form or show a success message
            setFormData({
                name: '',
                email: '',
                contact: '',
                msg: ''
            });

            setTimeout(()=>{
                setmsg('');
            }, 2000);
        } catch (error) {
            console.error('Error adding the user:', error);
        }
    };

    const zeroDone = (e) => {
        // e.preventDefault();
        setFormData({
            name: '',
            email: '',
            contact: '',
            msg: ''
        });

        setmsg('Cancel Sccuessfully ...'); 
        setTimeout(()=>{
            setmsg('');
        }, 2000);
    }

    return (
        <>
            <div className="background">
                <div className="container">
                    <div className="screen">
                    <div className="screen-header">
                        <div className="screen-header-left">
                        <div className="screen-header-button close" />
                        <div className="screen-header-button maximize" />
                        <div className="screen-header-button minimize" />
                        </div>
                        <div className="screen-header-right">
                        <div className="screen-header-ellipsis" />
                        <div className="screen-header-ellipsis" />
                        <div className="screen-header-ellipsis" />
                        </div>
                    </div>
                    <div className="screen-body">
                        <div className="screen-body-item left">
                        <div className="app-title">
                            <span>CONTACT</span>
                            <span>US</span>
                        </div>
                        <div className="app-contact">CONTACT INFO : +91 81 314 000 595</div>
                        </div>
                        <div className="screen-body-item">
                        <div className="app-form">
                        {msg && <div>{msg}</div>}
                            <form onSubmit={handleSubmit} >
                            <div className="app-form-group">
                            <input className="app-form-control" placeholder="NAME" name='name' value={formData.name} onChange={handleChange} />
                            </div>
                            <div className="app-form-group">
                            <input className="app-form-control" placeholder="EMAIL" name='email' value={formData.email} onChange={handleChange}  />
                            </div>
                            <div className="app-form-group">
                            <input className="app-form-control" placeholder="CONTACT NO" name='contact' value={formData.contact} onChange={handleChange}  />
                            </div>
                            <div className="app-form-group message">
                            <input className="app-form-control" placeholder="MESSAGE" name='msg' value={formData.msg} onChange={handleChange} />
                            </div>-
                            <div className="app-form-group buttons">
                            <button className="app-form-button" onClick={() => zeroDone()}>CANCEL</button>
                            <button className="app-form-button" type="submit" >SEND</button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="credits">
                    Copy by Demo
                    <a className="credits-link" href="https://dribbble.com/shots/2666271-Contact" target="_blank">
                        <svg className="dribbble" viewBox="0 0 200 200">
                        <g stroke="#ffffff" fill="none">
                            <circle cx={100} cy={100} r={90} strokeWidth={20} />
                            <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" strokeWidth={20} />
                            <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" strokeWidth={20} />
                            <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" strokeWidth={20} />
                        </g>
                        </svg>
                    </a>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Contact;
