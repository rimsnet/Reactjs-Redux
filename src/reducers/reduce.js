import { combineReducers } from 'redux' /* calling from library */
import {INC,DES,incInc,desDes} from '../actions/action'; /* calling from existing action folder action.js */

/*
  REDUCER
  function = userReducer
  appCal = final out put.. example - {user : 10}
*/
const userReducer = (state={}, action)=>{
  switch (action.type) {
    case INC:{
      state = {...state,name:action.playload, firstname:action.firstname, lastname:action.lastname}
      break;
    }
    case DES : {
      state = action.playload;
      break;
    }
  }
  return state;
};

const appCal = combineReducers({
  user : userReducer
});

export default appCal
