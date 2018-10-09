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
  fetchAll=()=>{
    BooksAPI.getAll().then((books)=>{this.setState({books})});
  }
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
      return (
        <BrowserRouter>
        <Switch>
            <Route path="/search" render={()=>
            <Search handlemove={this.handlemove} 
            query={this.state.query}
            handleSearch={this.handleSearch}
            bookResults={this.state.bookResults}
            showSearchPage={this.showSearchPage}
            showSearch={this.state.showSearchPage}
            />}/>
            <Route exact path="/" render={()=>
             <MainPage 
              showSearchPage={this.showSearchPage}
              showSearch={this.state.showSearchPage}
              handlemove={this.handlemove}
              books={this.state.books}
              Read={this.state.Read}
              currentshelf1="currentlyReading"
              currentshelf2="wantToRead"
              currentshelf3="read"
              />} />
        </Switch>
        </BrowserRouter> 
      );
    }
}

export default BooksApp
