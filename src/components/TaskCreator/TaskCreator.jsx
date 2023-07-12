import './TaskCreator.css';
import TaskCreatorForm from './TaskCreatorForm/TaskCreatorForm';

const TaskCreator = (props) => {
    return (
        <div className="addTask">
            <div className="addTask__container">
                <div className="addTask__title title">Add a new task</div>
                <TaskCreatorForm />
            </div>
        </div>
    );
}

export default TaskCreator;