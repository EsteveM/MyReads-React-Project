import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends Component {
    static propTypes = {
        bookShelf: PropTypes.object.isRequired,
        onUpdateShelf: PropTypes.func.isRequired,
    }
  /***********************     render     ******************************************************** 
   *        EMG - A given BookShelf is rendered here and made up of a list of Books (components)
   ***********************************************************************************************/
    
  render() {

    const { bookShelf, onUpdateShelf } = this.props

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookShelf.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookShelf.books.map((book) => (
                        <li key={book.id} className='book-list-item'>
                            < Book 
                                book={book}
                                onUpdateShelf={onUpdateShelf}
                                query=''
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>        
    )}
}

export default BookShelf
