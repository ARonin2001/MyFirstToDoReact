import { useEffect, useState } from 'react';
import './InputField.css';

const InputField = ({fieldText, type, value, setValue, ...props}) => {
    // const [value, setValue] = useState("");

    return (
        <div className="field">
            <label className="label" htmlFor={fieldText}>{fieldText}</label>
            <div className="control">
                <input className="input addTask__input" id={fieldText} type={type} placeholder={fieldText} 
                onChange={(e) => setValue(e.target.value)} value={value} {...props} />
            </div>
        </div>
    );
}

export default InputField;