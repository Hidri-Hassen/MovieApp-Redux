import {
    ADD_MOVIE,
    DELETE_MOVIE,
    EDIT_MOVIE
  } from "./actionType.js";
  import {moviesData} from "../components/data.js"
  
  const initialState = {moviesData};
  
  const reducer = (state = initialState,{type, payload}) => {
    switch (type) {
      case ADD_MOVIE:
        return{
        ...state,
         moviesData: [...state.moviesData, payload]
        }
      case DELETE_MOVIE:
        return {
            ...state,
             moviesData:state.moviesData.filter(el => el.id !== payload)
        }
        
      case EDIT_MOVIE:
        return{
            ...state,
             moviesData:state.moviesData.map(el =>el.id === payload.id ? payload : el)
            }
      default:
        return state;
    }
  };
  export default reducer;