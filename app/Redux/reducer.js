import { combineReducers } from 'redux';

const initialState = {
  task: [], // Use the property name "task" here
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        task: [...state.task, action.payload], // Use "task" here
      };
    case 'EDIT_TASK':
      return {
        ...state,
        task: state.task.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        task: state.task.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
