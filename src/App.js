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
    optionCurrentlyReading:'currentlyReading',
    optionRead:'read',
    optionWantToRead:'wantToRead',
    addbook:[],
    shelfbooks:[],
    query:'',
    currentlyReading:[
      {
       id:1,
       url:"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
       bookTitle:'To Kill a Mockingbird',
       bookAuthors:'Harper Lee'
      },
      {
      id:2,
      url:"http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
      bookTitle:"Ender's Game",
      bookAuthors:'Orson Scott Card'
      }
    ],
    WantToRead:[
      {
       id:3,
       url:"http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
       bookTitle:'1776',
       bookAuthors:'David McCullough'
      },
      {
      id:4,
      url:"http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
      bookTitle:"Harry Potter and the Sorcerer's Stone",
      bookAuthors:'J.K. Rowling'
      }
    ],
     Read:[
      {
       id:5,
       url:"http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
       bookTitle:'The Hobbit',
       bookAuthors:"JK-Rollwing"
      },
      {
      id:6,
      url:"http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
      bookTitle:"Harry Potter and the Sorcerer's Stone",
      bookAuthors:'Seuss'
      },
      {
          id:7,
          url:"http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api",
          bookTitle:"The Adventures of Tom Sawyer",
          bookAuthors:'Mark Twain'
          }
    ]
  };
    getBooks=()=>{
    
    };
    // handlemove=(event)=>{
    //   const option=event.target.value;
    //   console.log(optionCurrentlyReading);
    //   this.setState({optionCurrentlyReading});
    //   console.log(optionCurrentlyReading);
    //   //this.setState({addBook});
    // };
    handleCurrentlyReading=(event)=>{
      const optionCurrentlyReading=event.target.value;
      console.log(optionCurrentlyReading);
      this.setState({optionCurrentlyReading});
      console.log(optionCurrentlyReading);
      //this.setState({addBook});
    };
    handleWantToRead=(event)=>{
      const optionWantToRead=event.target.value;
      console.log(optionWantToRead);
      this.setState({optionWantToRead});
      console.log(optionWantToRead);
      //this.setState({addBook});
    };
    handleRead=(event)=>{
      const optionRead=event.target.value;
      console.log(optionRead);
      this.setState({optionRead});
      console.log(optionRead);
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
    // handleCurrentlyReading=()=>{
    //    if(this.state.option==='currentlyReading'){
    //      this.setState([
    //        ...this.state.currentlyReading,
    //        this.state.WantToRead,
    //        this.state.Read
    //      ]);
    //    }
    // };
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
                  currentlyReading={this.state.currentlyReading}
                  WantToRead={this.state.WantToRead}
                  Read={this.state.Read}
                  handleCurrentlyReading={this.handleCurrentlyReading}
                  handleWantToRead={this.handleWantToRead}
                  handleRead={this.handleRead}
                  optionCurrentlyReading={this.state.optionCurrentlyReading}
                  optionWantToRead={this.state.optionWantToRead}
                  optionRead={this.state.optionRead}
                  />
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
