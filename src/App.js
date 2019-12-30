import React, { Component } from 'react'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

class BooksApp extends Component {
  /***********************     state     ********************************************************* 
  /**        EMG - The state is made up of:
   *               books: the books that make up the user's library at any given time
   *               searchedBooks: the books that make up the current user's search
   *               bookShelves: the three shelves with their corresponding books at any given time 
   ***********************************************************************************************/
  state = {
    books: [],
    searchedBooks: [],
    bookShelves: [{title: 'Currently Reading', books: []},
                  {title: 'Want to Read', books: []},
                  {title: 'Read', books: []}]
  }
  /***********************     componentDidMount     ********************************************* 
   *        EMG - componentDidMount is run immediately after the component is added to the DOM. We
   *        obtain the books to be shown in the main page, and distribute them amongst the 
   *        corresponding shelves 
   ***********************************************************************************************/
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {

        const bookShelves = this.state.bookShelves
        bookShelves[0].books = books.filter(book => { return book.shelf === 'currentlyReading' })
        bookShelves[1].books = books.filter(book => { return book.shelf === 'wantToRead' })
        bookShelves[2].books = books.filter(book => { return book.shelf === 'read' })

        this.setState(() => ({
          books: books,
          bookShelves: bookShelves
        }))
      })
      .catch((error) => {
        console.log('App.js - componentDidMount - Rejection due to this reason: ('+error+').');
      })
  }
  /***********************     UpdateShelf      ************************************************** 
   *        EMG - UpdateShelf calls the BooksAPI update function to update the shelf property of
   *        a given book. After that, books, bookShelves books, and searchedBooks are updated 
   *        correspondingly 
   ***********************************************************************************************/
  UpdateShelf = (book, shelf, query) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        BooksAPI.getAll()
          .then((books) => {
            const bookShelves = this.state.bookShelves
            bookShelves[0].books = books.filter(book => { return book.shelf === 'currentlyReading' })
            bookShelves[1].books = books.filter(book => { return book.shelf === 'wantToRead' })
            bookShelves[2].books = books.filter(book => { return book.shelf === 'read' })
            this.setState(() => ({
              books: books,
              bookShelves: bookShelves
            }))
            if (query !== '') {
              this.SearchBooks(query)
            }
          }) 
      })
  }

  /***********************     SearchBooks     *************************************************** 
   *        EMG - SearchBooks calls the BooksAPI search function to retrieve the searchedBooks of
   *        a given query. Exceptions are handled and it is ensured that books in the search page
   *        have the correct shelf 
   ***********************************************************************************************/
  SearchBooks = (query) => {
      // EMG - The search API call returns an HTTP error code (403) when called with an empty string
      //       For this reason, such a call is avoided.
      if (query === '') {query = ' '}
      BooksAPI.search(query)
        .then((searchedBooks) => {
          /** EMG - The call does not return an array when the search result is empty. 
           *  This must be checked. **/
          if (Array.isArray(searchedBooks)) {
            console.log('App.js - searchedBooks', searchedBooks)
            /** EMG - We must ensure that books in the search page have the correct shelf */
            searchedBooks.map(searchedBook => {
              if (this.state.books.find(book => {return book.id === searchedBook.id})) {
                searchedBook.shelf = this.state.books.find(book => {return book.id === searchedBook.id}).shelf
              } else {
                searchedBook.shelf = 'none'
              }
              return searchedBook
            })
            this.setState(() => ({
              searchedBooks
            }))
          } else {
            console.log('App - searchedBooks', [])
            this.setState(() => ({
              searchedBooks: []
            }))
          }
        })
        .catch((error) => {
          console.log('App.js - SearchBooks - Rejection due to this reason: ('+error+').')
          console.log('App.js - searchedBooks', [])
          this.setState(() => ({
            searchedBooks: []
          }))
        })
  }
  /***********************     render     ******************************************************** 
   *        EMG - Two components are rendered. The first one is MainPage, and the second one is
   *        SearchPage. Routes are also specified.
   ***********************************************************************************************/
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          < MainPage 
            bookShelves={this.state.bookShelves}
            onUpdateShelf={this.UpdateShelf}
          />
        )} />
        <Route path='/search' render={() => (
          < SearchPage 
            searchedBooks={this.state.searchedBooks}
            onUpdateShelf={this.UpdateShelf}
            onSearchBooks={this.SearchBooks}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
