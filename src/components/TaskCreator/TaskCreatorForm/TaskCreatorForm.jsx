import { useState } from 'react';
import './TaskCreatorForm.css';
import InputField from '../../Fields/InputField/InputField';
import TextAreaField from './../../Fields/TextAreaField/TextAreaField';
import BtnSuccess from '../../Buttons/BtnSuccess/BtnSuccess';
import { dateComparison } from '../../../validation/validation';
import { useEffect } from 'react';

const TaskCreatorForm = (props) => {
    useEffect(() => {
        if(props.isEdit) {
            setValuesForm();
        } else {
            clearForm();
        }
    }, [props.isEdit]);

    const [valueTitle, setValueTitle] = useState("");
    const [valueDescription, setValueDescription] = useState("");
    const [valueDate, setValueDate] = useState("");
    const [valueTime, setValueTime] = useState("");

    const clearForm = () => {
        setValueTitle("");
        setValueDescription("");
        setValueDate("");
        setValueTime("");
    }

    const createNewTask = () => {
        return {
            title: valueTitle,
            description: valueDescription,
            deadLine: {
                date: valueDate,
                time: valueTime
            }
        }
    }

    const addNewTask = (event) => {
        event.preventDefault();

        const newTask = createNewTask();

        props.addTask(newTask);
        clearForm();
    }

    const editTask = (event) => {
        event.preventDefault();

        const newTask = createNewTask();

        props.editTask(props.task.id, newTask);
        props.toggleEddit();
        clearForm();
    }

    // Set values to the form from the task want to edit
    function setValuesForm() {
        const {task} = props;

        setValueTitle(task.title);
        setValueDescription(task.description);
        setValueDate(task.deadLine.date);
        setValueTime(task.deadLine.time);
    }

    const handleOnSubmit = (event) => {
        if(props.isEdit)
            editTask(event);
        else
            addNewTask(event);
    }

    return (
        <form className="addTask__form form form-addTask" action="#" method="post" onSubmit={handleOnSubmit}>
            <InputField fieldText={"Title"} type={"text"} value={valueTitle} setValue={setValueTitle} 
                required={true} />
            <TextAreaField fieldText={"Title"} value={valueDescription} 
                setValue={setValueDescription} />
            <InputField fieldText={"Date"} type={"date"} 
                value={valueDate} setValue={setValueDate} />
            <InputField fieldText={"Time"} type={"time"} 
                value={valueTime} setValue={setValueTime} />

            {
                props.isEdit 
                ? <BtnSuccess value={"Edit task"} />
                : <BtnSuccess value={"Submit a new task"} /> 
            }
        </form>
    );
}

export default TaskCreatorForm;