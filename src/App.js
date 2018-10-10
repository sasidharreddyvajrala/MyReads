import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/search'
import {BrowserRouter,Route,Switch,Link}from 'react-router-dom'
import Bookshelf from './components/bookshelf'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:{
    currentlyReading:[],
    wantToRead:[],
    read:[]
    },
    bookResults:[],
    query:'',
  };

  flattenBooks=()=>[...this.books.currentlyReading,...this.books.wantToRead,...this.books.read];

  fetchAll=()=>{
    BooksAPI.getAll().then((books)=>{this.sortBooks(books)});
  };
  componentDidMount(){
    this.fetchAll();
    console.log(this.state.books);
   };
  sortBooks=(books)=>{
   let books_sort={};
   books_sort['currentlyReading']=books.filter(book=>book.shelf==="currentlyReading");
   books_sort['wantToRead']=books.filter(book=>book.shelf==="wantToRead");
   books_sort['read']=books.filter(book=>book.shelf==="read");
   this.setState({books:books_sort});
  };

 

    handlemove=(book,shelf)=>{
      BooksAPI.update(book,shelf)
      .then(resp => this.fetchAll());
   };
    handleSearch=(event)=>{
      BooksAPI.search(event).then(data=>{this.setState({bookResults:data})});
      console.log(this.state.bookResults);
    };
    showSearchPage=()=>{
      this.setState({ showSearchPage:!(this.state.showSearchPage)});
    };
    

    render() {
      console.log(this.state.books);
      return (
        <div className="app">
        <BrowserRouter>
        <Switch>
            <Route path="/search" render={()=>
            <Search handlemove={this.handlemove} 
            query={this.state.query}
            handleSearch={this.handleSearch}
            bookResults={this.state.bookResults}
            />}/>
            <Route exact path="/" render={()=>
                <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                  <Bookshelf handlemove={this.handlemove} books={this.state.books.currentlyReading} bookshelf_title="CurrentlyReading"/>
                  <Bookshelf handlemove={this.handlemove} books={this.state.books.wantToRead} bookshelf_title="wantToRead"/>
                  <Bookshelf handlemove={this.handlemove} books={this.state.books.read} bookshelf_title="Read"/>
                  </div>
                </div>
                <div className="open-search">
                  <Link  onClick={this.showSearchPage} to="/search">Add a book</Link>
                </div>
                </div>
              } />
         </Switch>
        </BrowserRouter> 
        </div>
      );
    }
}

export default BooksApp
