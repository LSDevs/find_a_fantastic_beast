import React, { Component } from 'react';

class Animal extends Component {
    render() {
        return (
            <div className='Animal'>
                <div id='animalCard'>
                    {/* {this.props.animal.name} */}
                </div>
                <form id={this.props.id}
                className='singleAnimalPreview'
                {/* onSubmit={this.props.} */}
                >
                <button className='readMoreBtn'>Read more</button>
                </form>
            </div>
        )
    }
}
export default Animal;