const ADD_TASK = 'ADD-TASK';
const DELETE_TASK = 'DELETE-TASK';
const EDIT_TASK = 'EDIT-TASK';

let initialState = {
    tasks: [{
        id: 1,
        title: 'Bla bla bla',
        description: 'yyeeeeeeeeeee',
        creationDate: {
            date: '2023.07.17',
            time: '10:44'
        },
        deadLine: {
            date: '2023-07-22',
            time: '11:57'
        }
    }],
}

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK: {
            let id = state.tasks.length ? state.tasks[state.tasks.length-1].id + 1 : 1;

            const date = new Date();
            const currentDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
            const currentTime = `${date.getHours()}:${date.getMinutes()}`;

            let newTask = {
                id,
                title: action.taskData.title,
                description: action.taskData.description,
                creationDate: {
                    date: currentDate,
                    time: currentTime
                },
                deadLine: {
                    date: action.taskData.deadLine.date,
                    time: action.taskData.deadLine.time
                }
            };

            return {...state, tasks: [...state.tasks, newTask]};
        }
        case DELETE_TASK:
            let filterTasks = state.tasks.filter(el => el.id !== action.id);
            return {...state, tasks: filterTasks};
        case EDIT_TASK:
            const newTasks = state.tasks.map(el => {
                if(el.id === action.id) {
                    return {
                        id: el.id,
                        title: action.taskData.title,
                        description: action.taskData.description,
                        creationDate: {
                            date: el.creationDate.date,
                            time: el.creationDate.time
                        },
                        deadLine: {
                            date: action.taskData.deadLine.date,
                            time: action.taskData.deadLine.time
                        }
                    };
                }
                return el;
            });

            return {...state, tasks: newTasks};
        default:
            return state;
    }
};   

// Action creators
export const addTask = taskData => ({type: ADD_TASK, taskData});
export const deleteTask = id => ({type: DELETE_TASK, id});
export const editTask = (id, taskData) => ({type: EDIT_TASK, id, taskData});

export default taskReducer;