import { useState } from 'react';
import './TaskCreatorForm.css';
import InputField from '../../Fields/InputField/InputField';
import TextAreaField from './../../Fields/TextAreaField/TextAreaField';

const TaskCreatorForm = (props) => {
    const [valueTitle, setValueTitle] = useState("");
    const [valueDate, setValueDate] = useState("");
    const [valueTime, setValueTime] = useState("");
    const [valueDescription, setValueDescription] = useState("");

    return (
        <form className="addTask__form form form-addTask" action="#" method="post">
            <InputField fieldText={"Title"} type={"text"} value={valueTitle} setValue={setValueTitle} />
            <TextAreaField fieldText={"Title"} value={valueDescription} 
                setValue={setValueDescription} />
            <InputField fieldText={"Date"} type={"date"} 
                value={valueDate} setValue={setValueDate} />
            <InputField fieldText={"Time"} type={"time"} 
                value={valueTime} setValue={setValueTime} />

            <input className="button is-success is-outlined" type="submit" value="Submit a new task" />
        </form>
    );
}

export default TaskCreatorForm;