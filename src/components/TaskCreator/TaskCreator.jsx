import './TaskCreator.css';
import TaskCreatorForm from './TaskCreatorForm/TaskCreatorForm';

const TaskCreator = (props) => {
    return (
        <div class="addTask">
            <div class="addTask__container">
                <div class="addTask__title title">Add a new task</div>
                <TaskCreatorForm />
            </div>
        </div>
    );
}

export default TaskCreator;