import React from 'react'
import {Link} from 'react-router-dom'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'

class MainPage extends React.Component{

     
     render(){
      //  console.log(this.props.showSearch);
         return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
               <CurrentlyReading 
                handlemove={this.props.handlemove} 
                currentshelf={this.props.currentshelf1}
                books={this.props.books}
                />
               <WantToRead 
               handlemove={this.props.handlemove} 
               currentshelf={this.props.currentshelf2}
               books={this.props.books}
               />
               <Read 
               handlemove={this.props.handlemove}
               currentshelf={this.props.currentshelf3}
               books={this.props.books} 
               />
              </div>
            </div>
            <div className="open-search">
              <Link  onClick={this.props.showSearchPage} to="/search">Add a book</Link>
            </div>
            </div>
         );
     }
}


export default MainPage;