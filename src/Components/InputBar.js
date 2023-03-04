import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function InputBar(props) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        const regex = /^[0-9\b]+$/; // only allow numbers and backspace
        if (!regex.test(keyValue)) {
            event.preventDefault();
        }
    }

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        //event.preventDefault();
        //props.onSubmit(inputValue);
        //setInputValue('');

        event.preventDefault();
        console.log('Input value:', inputValue);
        navigate('/mail');

    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#BEFFFF",
                borderRadius: "20px 20px 20px 20px",
                width: "500px",
                height: "60px",
                margin:"auto",
                opacity:"0.8",
                marginTop:"10%",
                marginBottom:"10%"
            }}>
                <input
                    type="text"
                    placeholder="Number of participants"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    maxLength={2}
                    style={{
                        flex: "1",
                        border: "none",
                        outline: "none",
                        fontSize: "15px",
                        padding: "20px",
                        backgroundColor: "#BEFFFF",
                        borderRadius: "20px 0px 0px 20px",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        backgroundColor: "#3897B5",
                        borderRadius: "0px 20px 20px 0px",
                        height: "100%",
                        cursor: "pointer",
                        marginLeft: "0px",
                        color: "white",
                        fontSize: "30px",
                        border:"none",
                    }}>
                    START
                </button>
            </div>
        </form>
    );
}

export default InputBar;