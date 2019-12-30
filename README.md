# MyReads Project

This application implements a bookshelf that makes it possible for the user to classify books into three different shelves: currently reading, want to read, and read. It has been built using React, and makes use of an already existing API server and client library. 

## Table of Contents

* [Description of the Project](#description-of-the-project)
* [Getting Started](#getting-started)
* [Contributing](#contributing)
* [Acknowledgment](#acknowledgment)

## Description of the Project

As has already been mentioned, this project implements a bookshelf. The resulting app is made up of two pages, a main page and a search page. The user's library is shown in the main page, and displays three shelves: currently reading, want to read, and read. Each shelf contains a number of books, and each book has a control which makes it possible to change its current shelf. 

The search page has a search bar which allows the user to find books, and they can also add those books to their library. The work that has been done is best described by explaining its main components:

* *App.js*: when the component is added to the DOM, functions in this file obtain the user's books, and distribute them amongst the shelves. They also run shelf updates, and book searches. In addition, they render the main page and search page components. Finally, in this file the following state is mantained:
   * books: the books that make up the user's library at any given time
   * searchedBooks: the books that make up the current user's search
   * bookShelves: the three shelves with their corresponding books at any given time 
* *MainPage.js*: the main page is rendered here. Apart from the title and a link to the  
search page, the three bookshelves (components) are also rendered.
* *BookShelf.js*: a given BookShelf is rendered here and made up of a list of Books (components).
* *SearchPage.js*: the search page is rendered here. Apart from the search bar, which also includes a link to the main page, a list of the resulting searched books (components) is also rendered. The state in this component is made up of the query string that the user enters and can be found in the search bar at any given time. Calls to search queries are run here.
* *Book.js*: a given book is rendered here. All of thumbnail, title and authors are included. Exceptions such as undefined properties are appropriately handled. 

This is the React component hierarchy that has been chosen:
```bash
App.js
├── MainPage.js
│   └── BookShelf.js
│       └── Book.js
└── SearchPage.js
    └── Book.js
```
## Getting Started

These are the steps to be followed to further develop and/or test this project:

* Firstly, you have to download/clone the project files from this repository onto your local machine. Then, cd into the root folder where the project files are located.
* Secondly, you have to run `npm install` and `npm start` to install all project dependencies, and start the development server, respectively. You should be able to view your app in the browser at *http://localhost:3000/*.
* Thirdly, the application can be manually tested:
    * The user is initially shown the main page, where three shelves are shown. Each book is shown on the correct shelf, along with its title and all of its authors. A control exists that allows users to move books between shelves.
    ![MainPage1](/ScreenShots/MainPage1.png)
    * The functionality of moving a book to a different shelf works correctly. We can see how the book "Learning Web Development with React and Bootstrap" has been moved from the "Currently Reading" shelf to the "Read" shelf. After a page refresh, the same information can be seen on the page. Furthermore, the main page contains a link to the search page. 
    ![MainPage2](/ScreenShots/MainPage2.png)
    * When the aforementioned link is clicked, the search page is displayed and the URL in the browser’s address bar is */search*. In addition, the search page has a search input field:
    ![SearchPage1](/ScreenShots/SearchPage1.png)
    * Once in the search page, as the user types into the search field, books that match the query are displayed on the page, along with their titles and authors. It can also be observed below that the search works correctly when a book does not have a thumbnail:
    ![SearchPage2](/ScreenShots/SearchPage2.png)
    * Search results are not shown when all of the text is deleted out of the search input box:
    ![SearchPage3](/ScreenShots/SearchPage3.png)
    * The user is able to search for multiple words, as can be seen below with “artificial intelligence”:
    ![SearchPage4](/ScreenShots/SearchPage4.png)
    * Search results allow a user to categorize a book as “currently reading”, “want to read”, or “read”. In this example, the book "Advanced Artificial Intelligence" is categorized as "want to read". The change is reflected on the main page as well. In other words, when an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.
    ![SearchPage5](/ScreenShots/SearchPage5.png)  
    ![MainPage3](/ScreenShots/MainPage3.png)  
    * It can also be seen that the aforementioned book has the correct shelf selected on the search page if we go back to it: 
    ![SearchPage6](/ScreenShots/SearchPage6.png)
    * Furthermore, the option "None" is selected if a book has not been assigned to a shelf:
    ![SearchPage7](/ScreenShots/SearchPage7.png)
    * Finally, we observe that the search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /:
    ![MainPage4](/ScreenShots/MainPage4.png)

## Contributing

This repository contains all the work that makes up the project. Individuals and I myself are encouraged to further improve this project. As a result, I will be more than happy to consider any pull requests.

## Acknowledgment

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md).
