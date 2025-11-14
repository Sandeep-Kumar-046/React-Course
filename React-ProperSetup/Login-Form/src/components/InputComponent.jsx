import { useState } from "react";
import './InputComponent.css';
function InputComponent()
{
    const [showPassword,setShowPassword]=useState(false);
    function ChangeInputOption()
    {
        if(showPassword === false)
        {
            setShowPassword(true);
        }
        else{
            setShowPassword(false);
        }
    }
    return(
        <div className="input-container">
            <input type="email" placeholder="Email"/> <br/>
            <input type={showPassword === false ? "password" : "text"} placeholder="Password"/>
            <button 
                className="password-option-button" 
                onClick={ChangeInputOption}
            >{showPassword === false ? 'Show' : 'Hide'}</button>
        </div>
    );
}

export default InputComponent