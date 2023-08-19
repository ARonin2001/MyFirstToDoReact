import './InputField.css';

const InputField = ({fieldText, type, value, setValue, ...props}) => {
    return (
        <div className="field">
            <label className="label" htmlFor={fieldText}>{fieldText}</label>
            <div className="control">
                <input className="input addTask__input" id={fieldText} type={type} placeholder={fieldText} 
                onChange={(e) => setValue(e.target.value)} value={value} {...props} />
            </div>
            {
                props.error && <p className="help is-danger"></p>
            }
            
        </div>
    );
}

export default InputField;