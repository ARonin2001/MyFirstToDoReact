import './TaskCreator.css';
import TaskCreatorForm from './TaskCreatorForm/TaskCreatorForm';
import { connect } from 'react-redux';
import { addTask, editTask } from './../../redux/taskReducer';

const TaskCreator = (props) => {
    return (
        <div className="addTask">
            <div className="addTask__container">
                <div className="addTask__title title">Add a new task</div>
                <TaskCreatorForm addTask={props.addTask} isEdit={props.isEdit}
                    task={props.task}
                    editTask={props.editTask}
                    toggleEddit={props.toggleEddit} />
            </div>
        </div>
    );
}

export default connect(null, {addTask, editTask})(TaskCreator);