
import { combineReducers } from 'redux'


const initialState = {
    task: [],
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
          return {
            ...state,
            tasks: [...state.tasks, action.payload],
          };
          case 'EDIT_TASK':
          return {
            ...state,
            tasks: state.tasks.map((task) => 
            task.id ===action.payload.id ? action.payload : task)
          };
          case 'DELETE_TASK':
          return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== action.payload)
          };
          default:
            return state;
    }
}


const rootReducer = combineReducers({
    tasks: tasksReducer,
  });
  
  export default rootReducer;