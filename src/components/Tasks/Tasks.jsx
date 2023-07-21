import Pagination from '../Pagination/Pagination';
import Task from './Task/Task';
import './Tasks.css';
import {connect} from 'react-redux';
import { addTask } from './../../redux/taskReducer';

const Tasks = (props) => {
    return (
        <div className='tasks'>
            <div className='tasks__container'>
                {props.tasks.map((task) => {
                    return <Task 
                        key={task.id} 
                        title={task.title} 
                        description={task.description} 
                        creationDate={task.creationDate.date} creationTime={task.creationDate.time}
                        deadLineDate={task.deadLine.date} deadLineTime={task.deadLine.time} />
                })}

                <Pagination />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        tasks: state.taskPage.tasks
    }
};

export default connect(mapStateToProps, null)(Tasks);