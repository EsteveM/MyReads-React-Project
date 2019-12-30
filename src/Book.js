import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateShelf: PropTypes.func.isRequired,
        query: PropTypes.string.isRequired
    }
  /***********************     render     ******************************************************** 
   *        EMG - A given Book is rendered here. All of thumbnail, title and authors are included.
   *        Exceptions such as undefined properties are appropriately handled. 
   ***********************************************************************************************/
    render () {
        const { book, onUpdateShelf, query } = this.props

        return (
            <div className='book'>
                <div className='book-top'>
                    {/** EMG - It must be checked that the property of the book is defined */}
                    {((typeof book.imageLinks !== "undefined") && 
                      (typeof book.imageLinks.thumbnail !== "undefined")) &&
                    (
                    <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    )}
                    <div className='book-shelf-changer'>
                        <select value={book.shelf} onChange={(event) => onUpdateShelf(book, event.target.value, query)} >
                            <option value='move' disabled>Move to...</option>
                            <option value='currentlyReading'>Currently Reading</option>
                            <option value='wantToRead'>Want to Read</option>
                            <option value='read'>Read</option>
                            <option value='none'>None</option>
                        </select>
                    </div>                                       
                </div>
                {/** EMG - It must be checked that the title property of the book is defined */}
                {typeof book.title !== "undefined" && 
                (
                <div className='book-title'>{book.title}</div>
                )}
                {/** EMG - It must be checked that the authors property of the book is defined */}
                {typeof book.title !== "undefined" && 
                (
                <div className='book-authors'>{book.authors}</div>
                )}
            </div>
        )
    }
}

export default Book