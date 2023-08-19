import Sort from "../Sort/Sort";
import TaskCreator from "../TaskCreator/TaskCreator";
import Tasks from "../Tasks/Tasks";
import { useState } from 'react';
import { connect } from 'react-redux';


const Main = (props) => {
    const [isEdit, setEdit] = useState(false);
    const [task, setTask] = useState(null);

    const toggleEddit = ()=> setEdit(!isEdit);
    const getTask = (id) => {
        const taskById = props.tasks.find((el) => el.id === id );
        setTask(taskById);
    }
    
    return (
        <>
            <Sort/>
            <TaskCreator isEdit={isEdit} task={task} toggleEddit={toggleEddit} />
            <Tasks toggleEddit={toggleEddit} getTask={getTask} />
        </>
        
    );
}

const mapStateToProps = (state) => {
    return {
        tasks: state.taskPage.tasks
    } 
}

export default connect(mapStateToProps, null)(Main);