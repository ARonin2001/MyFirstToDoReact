const ADD_TASK = 'ADD-TASK';

let initialState = {
    tasks: [{
        id: 1,
        title: 'Bla bla bla',
        description: 'yyeeeeeeeeeee',
        creationDate: {
            date: '21.07.2023',
            time: '10:44'
        },
        deadLine: {
            date: '',
            time: ''
        }
    }]
}

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK: {
            let newTask = {
                id: 2,
                title: action.taskData.title,
                description: action.taskData.description,
                creationDate: {
                    date: new Date().toLocaleDateString(),
                    time: new Date().getHours() + ":" + new Date().getMinutes()
                },
                deadLine: {
                    date: action.taskData.deadLine.date,
                    time: action.taskData.deadLine.time
                }
            };

            return {...state, tasks: [...state.tasks, newTask]};
        }
        default:
            return state;
    }
};   

// Action creators
export const addTask = taskData => ({type: ADD_TASK, taskData});

export default taskReducer;