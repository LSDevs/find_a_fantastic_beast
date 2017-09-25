import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class YelpCall extends Component {
  render() {
    return (
      <div id='search-form-container'>
         <button><Link to='/addAnimal'>Add a new animal</Link></button>
        <form
          className='search-form'
          onSubmit={this.props.handleSearchSubmit}
        >
          <div className='chooseBorough'> Choose your borough </div>
            <select name='borough' type='text' onChange={this.props.handleBoroughSearch}>
              <option value='null'>Select</option>
              <option value='Bronx'>Bronx</option>
              <option value='Brooklyn'>Brooklyn</option>
              <option value='Manhattan'>Manhattan</option>
              <option value='Queens'>Queens</option>
              <option value='Staten Island'>Staten Island</option>
            </select>
          <button name="send" type="submit" className="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default YelpCall;
