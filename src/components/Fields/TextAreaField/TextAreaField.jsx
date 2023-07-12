import './TextAreaField.css';

const TextAreaField = ({fieldText, value, setValue}) => {

    return (
        <div className="field">
            <label className="label" htmlFor={fieldText}>{fieldText}</label>
            <div className="control">
                <textarea className="textarea is-hovered addTask__input" id={fieldText} placeholder={fieldText} onChange={(e) => setValue(e.target.value)} value={value}></textarea>
            </div>
        </div>
    );
}

export default TextAreaField;