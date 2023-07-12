import './TaskCreatorForm.css';
import TaskCreatorFormField from './TaskCreatorFormField/TaskCreatorFormField';

const TaskCreatorForm = (props) => {
    return (
        <form class="addTask__form form form-addTask" action="#" method="post">
            <TaskCreatorFormField fieldText={"Title"} type={"text"} />
            <div class="field">
                <label class="label" for="description">Description</label>
                <div class="control">
                    <textarea class="textarea is-hovered addTask__input" id="description" placeholder="Hovered textarea"></textarea>
                </div>
            </div>
            <TaskCreatorFormField fieldText={"Date"} type={"date"} />
            <TaskCreatorFormField fieldText={"Time"} type={"time"} />
            <input class="button is-success is-outlined" type="submit" value="Submit a new task" />
        </form>
    );
}

export default TaskCreatorForm;