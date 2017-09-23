import React, {Component} from 'react';
import axios from 'axios';

class SingleAnimal extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  renderAnimal() {
    if (this.state.animalDataReceived) {
      return (
        <div className="single-animal-render">
          <img src={this.state.animal.image_link} alt='animal' />
        <span className="name">{this.state.animal.name}</span>
         <span className="name">{this.state.animal.species}</span>
          <span className="name">{this.state.animal.age}</span>
           <span className="name">{this.state.animal.breed_origin}</span>
            <span className="name">{this.state.animal.personality}</span>
             <span className="name">{this.state.animal.abilities}</span>
              <span className="name">{this.state.animal.favorite_foods}</span>
               <span className="name">{this.state.animal.gender}</span>
                <span className="name">{this.state.animal.borough}</span>
        </div>
        )
    } else return 'Loading...';
  }

  render() {
    return (
      <div className="single-animal">
        {this.renderAnimal()}
      </div>
      )
  }
}

export default SingleAnimal;
