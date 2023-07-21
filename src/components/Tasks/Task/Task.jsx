import './Task.css';
import TaskButon from './TaskButon/TaskButon';
import TaskDateTime from './TaskDateTime/TaskDateTime';

const Task = (props) => {
    return (
        <div className="task">
            <div className="task__container">
                <div className="task__information">
                    <h3 className="task__title">{props.title}</h3>
                    <div className="task__description">{props.description}</div>
                    {/* Date and Time: Creation Task And Deadline Task */}
                    <div className="task__dateTime-cotainer">
                        <TaskDateTime title={"Creation date:"} 
                            taskDate={props.creationDate} 
                            taskTime={props.creationTime} />
                        {props.deadLineDate && 
                            <TaskDateTime title={"Deadline:"} 
                                taskDate={props.deadLineDate} 
                                taskTime={props.deadLineTime} />
                        }
                        
                    </div>
                </div>
                {/* buttons: delete and edit task */}
                <div className="task__buttons">
                    <TaskButon btnClassName={"task__btn_delete"} 
                        icon={<i className="bi bi-x-square-fill"></i>} />
                    <TaskButon btnClassName={"task__btn_edit"} 
                        icon={<i className="bi bi-pencil-square"></i>} />
                </div>
            </div>
        </div>
    );
}

export default Task;