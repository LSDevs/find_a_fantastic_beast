import react, { Component } from 'react';

class SearchForm extends Component {
    render() {
        return (
            <div id='search-form-container'>
            <form
                classname='search-form'
                method='GET'
                action='/api/animals' 
            >
            <label for='borough'> Choose your borough
            <select name='borough' type='text'>
              <option value='Bronx'>Bronx</option>
              <option value='Brooklyn'>Brooklyn</option>
              <option value='Manhattan'>Manhattan</option>
              <option value='Queens'>Queens</option>
              <option value='Staten Island'>Staten Island</option>
            </select>
            </label>
                <button name="send" type="submit" class="submit">SEARCH</button>
            </form>
        </div>
        )
    }
}

export default SearchForm;