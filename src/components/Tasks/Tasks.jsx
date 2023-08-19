import Pagination from '../Pagination/Pagination';
import Task from './Task/Task';
import './Tasks.css';
import {connect} from 'react-redux';
import { deleteTask, editTask } from './../../redux/taskReducer';

const Tasks = (props) => {
    return (
        <div className='tasks'>
            <div className='tasks__container'>
                {props.tasks.map((task) => {
                    return <Task 
                        id={task.id}
                        key={task.id} 
                        title={task.title} 
                        description={task.description} 
                        creationDate={task.creationDate.date} creationTime={task.creationDate.time}
                        deadLineDate={task.deadLine.date} deadLineTime={task.deadLine.time}
                        deleteTask={props.deleteTask}
                        toggleEddit={props.toggleEddit}
                        getTask={props.getTask} />
                })}

                <Pagination />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        tasks: state.taskPage.tasks,
    }
};

export default connect(mapStateToProps, {deleteTask, editTask})(Tasks);