import React, { Component } from 'react';

class SearchForm extends Component {
    render() {
        return (
            <div id='search-form-container'>
            <form
                className='search-form'
                onSubmit={this.props.handleSearchSubmit}
            >
            <div className='borough'> Choose your borough</div>
            <select name='borough' type='text' onChange={this.props.handleBoroughSearch}>
              <option value='null'>Select</option>
              <option value='Bronx'>Bronx</option>
              <option value='Brooklyn'>Brooklyn</option>
              <option value='Manhattan'>Manhattan</option>
              <option value='Queens'>Queens</option>
              <option value='Staten Island'>Staten Island</option>


            </select>

                <button name="send" type="submit" className="submit">SEARCH</button>
            </form>
        </div>
        )
    }
}

export default SearchForm;
