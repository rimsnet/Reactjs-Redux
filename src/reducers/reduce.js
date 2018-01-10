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


/*
  using the funciton userReducerFunction
  it's manage if else..... finally return state
*/
const userReducerFunction = function(state={}, action){

  if(action.type == INC){
    state = {...state, name:action.playload, firstname:action.firstname, lastname:action.lastname};
    return state;
  }else if (action.type == DES) {
    state = action.playload;
    return state;
  }else {
    return  new Error("THis's new Error! "); /* throw the error */
  }

 return state;

};

const appCal = combineReducers({
  user : userReducer,
  userFuc : userReducerFunction
});

export default appCal
