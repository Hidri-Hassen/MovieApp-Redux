import React, { Component } from 'react'
import { connect } from "react-redux"
import {addMovie,editMovie} from "../redux/actions.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from "react-modal";
Modal.setAppElement("#root");


class AddModal extends Component {
    

  

    state = {
      modalIsOpen: false,
      newMovie: {
        title: this.props.cardInfo ? this.props.cardInfo.title : "",
        year: this.props.cardInfo ? this.props.cardInfo.year : "",
        image: this.props.cardInfo ? this.props.cardInfo.image : "",
        rate: this.props.cardInfo ? this.props.cardInfo.rate : ""
      }
    };
  
    openModal = () => this.setState({ modalIsOpen: true });
    closeModal = () => this.setState({ modalIsOpen: false });
  
    handleAdd = e =>
      this.setState({
        newMovie: { ...this.state.newMovie, [e.target.name]: e.target.value }
      });
 
      handelAddMovie = e => {
      e.preventDefault();
      this.props.cardInfo 
      ?
      this.props.editMovie({
      title:this.state.newMovie.title,
      year:this.state.newMovie.year,
      image:this.state.newMovie.image,
      rate:this.state.newMovie.rate,
      id:this.props.cardInfo.id
    },
    this.setState({
      modalIsOpen: false,
    })
    )
      :
      this.props.addMovie({
        title:this.state.newMovie.title,
      year:this.state.newMovie.year,
      image:this.state.newMovie.image,
      rate:this.state.newMovie.rate
      },
      this.setState({
         
          modalIsOpen: false,
          newMovie: {
            title: "",
            year: "",
            image: "",
            rate: ""
          }
        
      })
      )
      
    };
  
    render() {
 
  
      return (
        <div>
          <FontAwesomeIcon className={this.props.cardInfo ? "faedit" : "Add-btn"} icon={this.props.cardInfo ? "edit" : "plus-square"}  onClick={this.openModal}/>
          <Modal
            className="add-modal"
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
          >
            <h2>Add A Movie</h2>
            <form onSubmit={this.handelAddMovie}>
              <label>Movie Name</label>
              <input
               onChange={this.handleAdd} 
               type="text"
                name="title" 
                value={this.state.newMovie.title}
                />
              <label>Movie Rate</label>
              <input
                onChange={this.handleAdd}
                type="number"
                max="5"
                name="rate"
                value={this.state.newMovie.rate}
              />
              <label>Movie Release Year</label>
              <input 
              onChange={this.handleAdd} 
              type="text"
               name="year" 
               value={this.state.newMovie.year}/>
              <label>Movie Image</label>
              <input
               onChange={this.handleAdd}
               type="url"
                name="image" 
                value={this.state.newMovie.image}/>
  
              <div className="form-btn-container">
                <button className="btn btn-modal">Add Movie</button>
                <button className="btn btn-modal" onClick={this.closeModal}>
                  Cancel
                </button>
              </div>
            </form>
          </Modal>
        </div>
      );
    }
  }

 


  export default connect(null, {addMovie,editMovie} )(AddModal);



