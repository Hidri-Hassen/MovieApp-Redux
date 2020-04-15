import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "./actionType.js"


export const addMovie = payload => {
  return {
    type: ADD_MOVIE,
    payload:{
        ...payload,
        id:Math.random()
    }
  };
  
};

export const deleteMovie = payload => {
  return {
    type: DELETE_MOVIE,
    payload

  };
  
};

export const editMovie = payload => {
  return {
    type: EDIT_MOVIE,
    payload
  };
  
};