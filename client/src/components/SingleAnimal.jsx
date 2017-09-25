import React, {Component} from 'react';
import axios from 'axios';
import EditAnimalForm from './EditAnimalForm';

class SingleAnimal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBeingEdited: false,
      animal: {},
      animalDataReceived: false,
      id: this.props.match.params.id,
    }
  }
  componentDidMount() {
    axios(`http://localhost:3001/api/animals/:borough/${this.state.id}`)
      .then(res => {
        this.setState(prevState => {
          console.log(res.data)
          return {
            animal: res.data.data.animal,
            animalDataReceived: true,
          }
      })
    })
  }

   handleDeleteAnimal(animalId) {
    fetch(`http://localhost:3001/api/animals/:borough/${this.state.id}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (response.status === 200) {
        alert(`You have adopted ${this.state.animal.name}!`)
      }
    })
  }

  renderAnimal() {
    if (this.state.animalDataReceived) {
      return (
        <div>
        <img id="singleAnimalPic" src={this.state.animal.image_link} alt='animal' />
        <div className="single-animal-render">
        <span className="name"><div className="info">Name: </div>{this.state.animal.name}</span>
         <span className="name"><div className="info">Species:  </div>{this.state.animal.species}</span>
          <span className="name"><div className="info">Age: </div>{this.state.animal.age}</span>
           <span className="name"><div className="info">Breed or Origin: </div>{this.state.animal.breed_origin}</span>
            <span className="name"><div className="info">Personality: </div>{this.state.animal.personality}</span>
             <span className="name"><div className="info">Abilitites: </div>{this.state.animal.abilities}</span>
              <span className="name"><div className="info">Favorite Foods: </div>{this.state.animal.favorite_foods}</span>
               <span className="name"><div className="info">Gender: </div>{this.state.animal.gender}</span>
                <span className="name"><div className="info">Location: </div>{this.state.animal.borough}</span>
        </div>
        </div>
        )
    } else return 'Loading...';
  }

renderEditForm() {
  if (this.state.isBeingEdited) {
    return (
      <EditAnimalForm
      animal={this.state.animal} />

      )
  }
}


  render() {
    return (
      <div className="single-animal">
        {this.renderAnimal()}
        <button className="editButton" onClick={() => {
          this.setState({isBeingEdited: true})
        }}>Edit Animal</button>
        {this.renderEditForm()}
        <button className="deleteButton" onClick={() => { this.handleDeleteAnimal(this.state.id) }}>
          Adopt me!
        </button>
      </div>
      )
  }
}


export default SingleAnimal;
