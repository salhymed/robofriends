import {CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";


const initialStateSearch = {
  searchField: '',
}
const initialStateRobots = {
  error: 'no',
  robots: [],
  isPending: false
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
      //return { ...state, searchField: action.payload} 
    default:
      return state;
  }
}
export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_SUCCESS:
      return {...state, robots: action.payload, isPending:false}
    case REQUEST_ROBOTS_FAILED:
      return {...state, error: action.payload, isPending:false}
    case REQUEST_ROBOTS_PENDING:
        return {...state, isPending: true}
    default:
    return state  
  }
}


