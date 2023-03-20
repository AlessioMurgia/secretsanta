import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InputBar() {

    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

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

    const handleSubmit = (event) => {
        event.preventDefault();

        //MAKE IT NICER
        if(inputValue<=20 && inputValue>=3){
            navigate('/extraction',{state:{formsNumber:inputValue}});
        }
        else if (!inputValue) {
            setErrorMessage('Please write the number of participants');
        }
        else if(inputValue>20){
            setErrorMessage("Number too high");
        }
        else{
            setErrorMessage("Number too low")
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center bg-inputBarColor rounded-3xl w-500px h-60px m-auto opacity-80 mt-1/10 mb-1/10 shadow-topbarShadow">
                <input className="flex-1 border-0 outline-0 text-sm p-20px bg-inputBarColor rounded-l-3xl"
                    type="text"
                    placeholder="Number of participants"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    maxLength={2}
                />
                <button className="bg-topBarColor rounded-r-3xl h-full cursor-pointer ml-0 text-white text-3xl border-0"
                    type="submit">
                    START
                </button>
            </div>
            {errorMessage && <p className="text-white text-center"> {errorMessage}</p>}
        </form>
    );
}

export default InputBar;