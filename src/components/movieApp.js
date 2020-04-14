import React, { Component } from 'react'
import { connect } from "react-redux";
import Search from "./search";
import MovieList from "./movieList";


import 'bootstrap/dist/css/bootstrap.min.css';


class MovieApp extends Component {
  state = {
    search: "",
    minRating: 0,
   
    
  };



  //Handle Search Value
  handleSearch = valeur => this.setState({ search: valeur });

  //Handle minRating Value
  handleRating = rate => this.setState({ minRating: rate });

    render() {
      const  movieList = this.props.moviesData.filter(
        el =>
        el.title
            .toLowerCase()
            .includes(this.state.search.toLowerCase().trim()) &&
            el.rate >= this.state.minRating
      );

        return (
            <div>


<Search
          handleSearch={this.handleSearch}
          minRating={this.state.minRating}
          handleRating={this.handleRating}
        />

        <MovieList moviesData={movieList} />

            </div>
        )
    }
}

const mapStateToProps = state =>{
  return{
    moviesData: state.moviesData
  }
} 

export default  connect (mapStateToProps)(MovieApp);