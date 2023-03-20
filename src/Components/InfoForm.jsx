import React, { useState } from 'react';
import {useLocation, useNavigate} from "react-router-dom";

function InfoForm(){
    const location = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

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
                setErrorMessage("Please fill Santa's list");
                return;
            }
        }

        fetch('http://localhost:3001/api/extract', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({formData})
        })
            .then(res => res.json())
            .then(()=>navigate('/thanks'));
    };

    const createForms = () => {
        return [...Array(parseInt(location.state.formsNumber))].map((_, index) => (
            <form key={index} onSubmit={(event) => handleSubmit(event, index)}>

                <div className="flex items-center bg-inputBarColor rounded-3xl m-auto opacity-80 mt-1/10 mb-1/10 shadow-topbarShadow">
                    <input className="flex-1 border-0 outline-0 text-sm p-20px bg-inputBarColor rounded-3xl"
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={(event) => handleChange(event, index)}
                    />
                    <input className="flex-1 border-0 outline-0 text-sm p-20px bg-inputBarColor rounded-3xl"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(event) => handleChange(event, index)}
                    />
                </div>
            </form>
        ));
    };
    return (
        <div>
            <p className="text-black text-3xl text-center font-serif font-bold">
                Santa's list
            </p>
            {errorMessage && <p className="text-white text-center">{errorMessage}</p>}
            {createForms()}
            <button className="bg-topBarColor cursor-pointer text-white text-3xl w-full border-0 p-20px rounded-3xl mb-1/5"
                    onClick={handleSubmit}>
                Extract
            </button>
        </div>
    );
}

export default InfoForm;
