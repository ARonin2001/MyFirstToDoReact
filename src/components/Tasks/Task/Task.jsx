import './Task.css';
import TaskButon from './TaskButon/TaskButon';
import TaskDateTime from './TaskDateTime/TaskDateTime';

const Task = (props) => {
    return (
        <div className="task">
            <div className="task__container">
                <div className="task__information">
                    <h3 className="task__title">Title</h3>
                    <div className="task__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptate! Corrupti nemo nulla, corporis eaque eveniet qui fugiat suscipit voluptates id illo minus, odio reprehenderit impedit! Quas qui autem voluptate.</div>
                    {/* Date and Time: Creation Task And Deadline Task */}
                    <div className="task__dateTime-cotainer">
                        <TaskDateTime title={"Creation date:"} 
                            taskDate={"05.07.2023"} 
                            taskTime={"15:30"} />
                        <TaskDateTime title={"Deadline:"} 
                            taskDate={"05.07.2023"} 
                            taskTime={"15:30"} />
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