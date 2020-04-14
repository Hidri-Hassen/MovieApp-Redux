import React from 'react'
import { connect } from "react-redux"
import {deleteMovie} from "../redux/actions.js"
import Rating from "./rating"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddModal from "./modal";

const MovieCard = ({ movie,deleteMovie }) => {
  const cardStyle = {
    backgroundImage: ` url(${movie.image})  `
  };


  return (

    <article className="card card--1">
      
          <div className="icon">
          <FontAwesomeIcon className="faicons" icon="trash" onClick={()=>{deleteMovie(movie.id)}}/>
          <AddModal cardInfo={movie}/>
  
          </div>
      <div className="card__info-hover">
     
      </div>
      <div className="card__img" style={cardStyle}></div>
      <a href="/" className="card_link">
        <div className="card__img--hover" style={cardStyle}></div>
      </a>
      <div className="card__info">
      
        <span className="card__category"><Rating rate={movie.rate}  />     </span>
        <h3 className="card__title">{movie.title} </h3>
     
        <span className="card__by">
     
          Relase on  
          <a href="/" className="card__author" title="author">
              {movie.year}
          </a>
        </span>
        
      </div>
      
    </article>
 
  );
}



export default connect (null,{deleteMovie})(MovieCard);
