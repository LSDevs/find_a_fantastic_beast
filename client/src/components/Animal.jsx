import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Animal extends Component {
    render() {
        return (
            <div className='Animal'>
                <div id='animalCard'>
                    <img src={this.props.animal.image_link} alt='animal' />
                </div>
                <div className="animalName">{this.props.animal.name}</div>
                <div className="animalSpecies">{this.props.animal.species}</div>
                <button className='readMoreBtn'><Link to={`/animals/${this.props.animal.id}`}>Read more</Link></button>
            </div>
        );
    };
}
export default Animal;
