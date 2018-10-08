import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/search'
import MainPage from './components/MainPage'
import {BrowserRouter,Route,Switch}from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
    showSearchPage:false,
    bookResults:[],
    addbook:[],
    query:'',
  };
  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books:books})
      console.log(books);
    })
  }
    handlemove=(book,shelf)=>{
      BooksAPI.update(book,shelf);
      BooksAPI.getAll().then((books)=>{this.setState({books})});
   };
    handleSearch=(event)=>{
      //const query=this.setState({query:event.target.value});
      console.log(event);
      BooksAPI.search(event).then(data=>{this.setState({bookResults:data})});
      console.log(this.state.bookResults);
    };
    showSearchPage=()=>{
      this.setState({ showSearchPage:!(this.state.showSearchPage)});
    };
    
  render() {
    console.log(!(this.state.showSearchPage));
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search handlemove={this.handlemove} 
                  query={this.state.query}
                  handleSearch={this.handleSearch}
                  bookResults={this.state.bookResults}
                  showSearchPage={this.showSearchPage}
                  showSearch={this.state.showSearchPage}/>
                  
        ) : (
          <div>
            <MainPage 
                  showSearchPage={this.showSearchPage}
                  showSearch={this.state.showSearchPage}
                  handlemove={this.handlemove}
                  books={this.state.books}
                  Read={this.state.Read}
                  currentshelf1="currentlyReading"
                  currentshelf2="wantToRead"
                  currentshelf3="read"
                  />
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
