/*import React, { useState } from 'react';

function InputEmail() {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
        // You can add your email submission logic here
    };

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <form id="bigForm" onSubmit={handleSubmit}>
            <label style={{color:"white"}}>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={handleInputChange}
                />
            </label>
        </form>
    );
}

export default InputEmail;

 */

import React, { useState } from 'react';
import {useLocation, useNavigate} from "react-router-dom";

function InfoForm(){

    const location = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState([]);

    const handleChange = (event, index) => {
        const { name, value } = event.target;

        // Make a copy of the formData array and update the value at the specified index
        const updatedFormData = [...formData];
        updatedFormData[index] = { ...updatedFormData[index], [name]: value };

        setFormData(updatedFormData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // MAKE NICER
        for(let i=0; i<location.state.formsNumber; i++){
            if (!formData[i].name || !formData[i].email) {
                alert('Please fill out all fields.');
                return;
            }
        }
        console.log(formData);
        navigate('/thanks');

    };

    const createForms = () => {
        return [...Array(parseInt(location.state.formsNumber))].map((_, index) => (
            <form key={index} onSubmit={(event) => handleSubmit(event, index)}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#BEFFFF",
                    borderRadius: "20px 20px 20px 20px",
                    margin:"auto",
                    opacity:"0.8",
                    marginTop:"10%",
                    marginBottom:"10%",
                    boxShadow: "0 5px 5px rgba(0, 0, 0, 0.5)",
                }}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={(event) => handleChange(event, index)}
                        style={{
                            flex: "1",
                            border: "none",
                            outline: "none",
                            fontSize: "15px",
                            padding: "20px",
                            backgroundColor: "#BEFFFF",
                            borderRadius: "20px 20px 20px 20px",
                        }}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(event) => handleChange(event, index)}
                        style={{
                            flex: "1",
                            border: "none",
                            outline: "none",
                            fontSize: "15px",
                            padding: "20px",
                            backgroundColor: "#BEFFFF",
                            borderRadius: "20px 20px 20px 20px",
                        }}
                    />
                </div>
            </form>
        ));
    };
    return (
        <div>
            {createForms()}
            <button  onClick={handleSubmit} style={{
                backgroundColor: "#3897B5",
                cursor: "pointer",
                color: "white",
                fontSize: "30px",
                width:"100%",
                border: "none",
                padding: "20px",
                borderRadius: "20px 20px 20px 20px",
                marginBottom: "20%"
            }}>
                Extract
            </button>
        </div>
    );
}

export default InfoForm;

/*
import React, { useState } from "react";
import {useLocation} from "react-router-dom";

function InputEmail() {
    const [formData, setFormData] = useState([]);
    const location = useLocation();

    const handleInputChange = (event, formIndex) => {
        const { name, value } = event.target;

        // Make a copy of the formData array and update the value at the specified index
        const updatedFormData = [...formData];
        updatedFormData[formIndex] = { ...updatedFormData[formIndex], [name]: value };

        setFormData(updatedFormData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with formData, such as send it to a server
        console.log(formData);
    };

    const forms = [];
    for (let i = 0; i < parseInt(location.state.id); i++) {
        forms.push(
            <form key={i} onSubmit={handleSubmit}>
                <h2>Form {i + 1}</h2>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData[i]?.name || ""}
                        onChange={(event) => handleInputChange(event, i)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData[i]?.email || ""}
                        onChange={(event) => handleInputChange(event, i)}
                    />
                </label>
            </form>
        );
    }

    return (
        <>
            {forms}
            <button onClick={handleSubmit}>Submit All Forms</button>
        </>
    );
}

export default InputEmail;

 */