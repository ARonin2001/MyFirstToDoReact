import './TaskButon.css';

const TaskButon = (props) => {
    return (
        <button className={`task__btn ${props.btnClassName}`} onClick={() =>  props.clickMethod()}>
            {props.icon}
        </button>
    );
}

export default TaskButon;