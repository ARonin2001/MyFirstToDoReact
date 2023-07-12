import './TaskDateTime.css';

const TaskDateTime = ({title, taskDate, taskTime}) => {
    return (
        <div className="task__dateTime">
            <div className="task__dateTime-title">{title}</div>
            <span className="task__date">{taskDate}</span>
            <span className="task__time">{taskTime} </span>
        </div>
    );
}

export default TaskDateTime;