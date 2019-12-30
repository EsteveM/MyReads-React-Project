import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class SearchPage extends Component {

    static propTypes = {
        searchedBooks: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired,
        onSearchBooks: PropTypes.func.isRequired,
    }
  /***********************     state     ********************************************************* 
   *        EMG - The state in this component is made up of the query string that the user enters
   *        and can be found in the search bar at any given time.
   ***********************************************************************************************/
    state = {
        query: ''
    }
  /***********************     componentDidMount    ********************************************** 
   *        EMG - componentDidMount is run immediately after the component is added to the DOM. We
   *        clear the query at this time. 
   ***********************************************************************************************/
    componentDidMount() {
        this.clearQuery()
    }
  /***********************     updateQuery    **************************************************** 
   *        EMG - updateQuery is run to call a new book search using the function received from
   *        the parent component. 
   ***********************************************************************************************/
    updateQuery = (query) => {
        this.props.onSearchBooks(query)
        this.setState(() => ({
            query
        }))
    } 
  /***********************     clearQuery    ***************************************************** 
   *        EMG - clearQuery is run to perform an updateQuery where the query string is empty.
   ***********************************************************************************************/
    clearQuery = () => {
        this.updateQuery('')
    } 
  /***********************     render     ******************************************************** 
   *        EMG - The SearchPage is rendered here. Apart from the search bar, which also includes a
   *        link to the MainPage, a list of the resulting searched Books (components) is also 
   *        rendered.
   ***********************************************************************************************/ 
    render () {
        const { query } = this.state
        const { searchedBooks, onUpdateShelf } = this.props
        console.log('SearchBooks - searchedBooks', searchedBooks)

        return (
            <div className='search-books'>
                <div className='search-books-bar'>
                    <Link 
                        className='close-search'
                        to='/'>
                        Close
                    </Link>
                    <div className='search-books-input-wrapper'>
                        <input
                            className='search-books-input'
                            type='text'
                            placeholder='Search by title or author'
                            value={query}
                            onChange={ (event) => { if (event.target.value === '') {
                                                        this.clearQuery()
                                                    } else {
                                                        this.updateQuery(event.target.value)
                                                    }
                                                }
                                    }
                        />
                    </div>
                </div>
            
                <div className='search-books-results'>
                    <div className='showing-books'> 
                        <span> Now showing {searchedBooks.length} books </span>
                        <button onClick={this.clearQuery}>Clear query</button>
                    </div>
                    <ol className='books-grid'> 
                        {searchedBooks.map((book) => (
                            <li key={book.id} className='book-list-item'>
                                < Book 
                                    book={book}
                                    onUpdateShelf={onUpdateShelf}
                                    query={query}
                                />
                            </li>
                        ))}
                    </ol>
                </div>    
            </div>
        )
    }
}

export default SearchPage