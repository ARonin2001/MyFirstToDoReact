import './TaskCreatorFormField.css';

const TaskCreatorFormField = ({fieldText, type}) => {
    return (
        <div class="field">
            <label class="label" for={fieldText}>{fieldText}</label>
            <div class="control">
                <input class="input addTask__input" id={fieldText} type={type} placeholder={fieldText} />
            </div>
        </div>
    );
}

export default TaskCreatorFormField;