import './TaskButon.css';

const TaskButon = (props) => {
    return (
        <button class={`task__btn ${props.btnClassName}`}>
            {props.icon}
        </button>
    );
}

export default TaskButon;