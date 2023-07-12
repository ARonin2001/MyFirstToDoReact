import Pagination from '../Pagination/Pagination';
import Task from './Task/Task';
import './Tasks.css';

const Tasks = (props) => {
    return (
        <div className='tasks'>
            <div className='tasks__container'>
                <Task />
                <Task />
                <Task />

                <Pagination />
            </div>
        </div>
    );
}

export default Tasks;