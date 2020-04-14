import React from "react";
import MovieCard from "./movieCard";
import AddModal from "./modal";



const MovieList = ({moviesData}) => {
  return (
    <div className="movie-list-container">
      {moviesData.map((el, i) => (
        <MovieCard key={i} movie={el} />
      ))}
     
      <AddModal />
     
    </div>
  );
}

export default MovieList;