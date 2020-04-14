import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "./actionType.js"

    // export const inputSearch = valueInput => {
    //     return {
    //         type: SEARCH_INPUT,
    //         valueInput
    //     };
    // };

    //     export const starSearch = clickStar => {
    //         return {
    //             type: SEARCH_STAR,
    //             clickStar
    //         };
    //     };

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