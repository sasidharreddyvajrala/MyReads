import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/search'
import MainPage from './components/MainPage'

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
    value:'',
    addbook:[]
  };
    getBooks=()=>{
     const shelfbooks=BooksAPI.getAll(); 
     shelfbooks.then(data=>{this.setState({books:data})});
    };
    handleMove=(event)=>{
      const value=event.target.value;
      this.setState({value});
      //this.setState({addBook});
    };

    handleSearch=(query)=>{
        const searchbooks=BooksAPI.search(query);
        searchbooks.then(data=>this.setState({bookResults:data}));
    };
    showSearchPage=()=>{
      this.setState({ showSearchPage: true});
    };

  render() {
    console.log(this.state.bookResults);
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search handleMove={this.handleMove} 
                  handleSearch={this.handleSearch}
                  bookResults={this.state.bookResults}
                  value={this.state.value}
                  showSearchPage={!(this.showSearchPage)}/>
        ) : (
          <div>
            <MainPage 
                  showSearchPage={this.showSearchPage}/>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
