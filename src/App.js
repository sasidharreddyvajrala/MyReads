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
    option:'',
    addbook:[],
    shelfbooks:[],
    query:'',
    currentlyReading:[
      {
       url:"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
       bookTitle:'To Kill a Mockingbird',
       bookAuthors:'Harper Lee'
      },
    
    ]
  };
    getBooks=()=>{
    
    };
    handlemove=(event)=>{
      const option=event.target.value;
      console.log(option);
      this.setState({option});
      //this.setState({addBook});
    };

    handleSearch=(e)=>{
        const query=e.target.value;
        console.log(query);
        const searchbooks=BooksAPI.search(this.setState({query}));
        console.log("search: ", searchbooks)
        searchbooks.then(data=>this.setState({bookResults:data}));
    };
    showSearchPage=()=>{

      this.setState({ showSearchPage:(this.state.showSearchPage) ? false : true});
    };
    handleCurrentlyReading=()=>{

    };
    componentDidMount(){
      const shelfbooks=BooksAPI.getAll(); 
      console.log(shelfbooks);
      shelfbooks.then(data=>{this.setState({books:data})});
    }
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search handlemove={this.handlemove} 
                  handleSearch={this.handleSearch}
                  bookResults={this.state.bookResults}
                  value={this.state.value}
                  showSearchPage={this.showSearchPage}/>
        ) : (
          <div>
            <MainPage 
                  showSearchPage={!this.showSearchPage}
                  handlemove={this.handlemove}
                  value={this.state.option}
                  />
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
