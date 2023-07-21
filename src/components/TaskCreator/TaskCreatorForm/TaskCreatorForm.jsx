import { useState } from 'react';
import './TaskCreatorForm.css';
import InputField from '../../Fields/InputField/InputField';
import TextAreaField from './../../Fields/TextAreaField/TextAreaField';

const TaskCreatorForm = (props) => {
    const [valueTitle, setValueTitle] = useState("");
    const [valueDescription, setValueDescription] = useState("");
    const [valueDate, setValueDate] = useState("");
    const [valueTime, setValueTime] = useState("");

    const addNewTask = (event) => {
        event.preventDefault();
        let newTask = {
            title: valueTitle,
            description: valueDescription,
            deadLine: {
                date: new Date(valueDate).toLocaleDateString(),
                time: valueTime
            }
        };
        props.addTask(newTask);
    }

    return (
        <form className="addTask__form form form-addTask" action="#" method="post" onSubmit={addNewTask}>
            <InputField fieldText={"Title"} type={"text"} value={valueTitle} setValue={setValueTitle} 
                required={true} />
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