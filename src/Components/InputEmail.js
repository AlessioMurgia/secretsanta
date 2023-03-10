import React, { useState } from 'react';

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