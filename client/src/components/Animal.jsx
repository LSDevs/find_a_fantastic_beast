import React, { Component } from 'react';

class Animal extends Component {
    render() {
        return (
            <div className='Animal'>
                <h3>{this.props.animal.name}</h3>
                <div className='animalName'>{this.props.animal.name}</div>
                <div className='animalSpecies'>{this.props.animal.species}</div>
                <embed className='animalImage' src="{this.props.animal.image_link}">
                <Link to={`/api/animals/${this.props.animal.id}`}>Read more</Link>
            </div>
        );
    };
}
export default Animal;