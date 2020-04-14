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
      // handelAddMovie = e => {
      //   e.preventDefault();
    
      //   if (Object.values(this.state.newMovie).indexOf("") === -1) {
      //     this.props.addMovie(this.state.newMovie);
      //     this.setState({
      //       modalIsOpen: false,
      //       newMovie: {
      //         title: "",
      //         year: "",
      //         image: "",
      //         rate: ""
      //       }
      //     });
      //   } else alert("Enter a valid info");
      // };
      handelAddMovie = e => {
      e.preventDefault();
      this.props.cardInfo 
      ?
      this.props.editMovie({
      newMovie:this.state.newMovie,
      id:this.props.cardInfo.id
    },
    this.setState({
      modalIsOpen: false,
    })
    )
      :
      this.props.addMovie({newMovie:this.state.newMovie},
      this.setState({
        modalIsOpen: false,
      })
      )
      // alert("Enter a valid info");
    };
  
    render() {
 
  
      return (
        <div>
          <FontAwesomeIcon className="Add-btn" icon="edit"  onClick={this.openModal}/>
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



