import React, { Component } from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class MainPage extends Component {
    static propTypes = {
        bookShelves: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired,
    }
  /***********************     render     ******************************************************** 
   *        EMG - The main page is rendered here. Apart from the title and a link to the  
   *        SearchPage, the three BookShelfs (components) are also rendered.
   ***********************************************************************************************/  
  render() {

    const { bookShelves, onUpdateShelf } = this.props

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    < BookShelf 
                        bookShelf={bookShelves[0]}
                        onUpdateShelf={onUpdateShelf}
                    />
                    < BookShelf 
                        bookShelf={bookShelves[1]}
                        onUpdateShelf={onUpdateShelf}
                    />
                    < BookShelf 
                        bookShelf={bookShelves[2]}
                        onUpdateShelf={onUpdateShelf}
                    />
                </div>+
            </div>
            <Link
                to='/search'
                className='open-search'
            >Add a book</Link>
        </div>
    )
  }
}

export default MainPage
