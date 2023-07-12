import './TaskDateTime.css';

const TaskDateTime = ({title, taskDate, taskTime}) => {
    return (
        <div class="task__dateTime">
            <div class="task__dateTime-title">{title}</div>
            <span class="task__date">{taskDate}</span>
            <span class="task__time">{taskTime} </span>
        </div>
    );
}

export default TaskDateTime;