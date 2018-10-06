import React from 'react'
import {Link} from 'react-router-dom'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'

class MainPage extends React.Component{

     
     render(){
         return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
               <CurrentlyReading handlemove={this.props.handlemove} value={this.props.option}/>
               <WantToRead handlemove={this.props.handlemove} value={this.props.option}/>
               <Read handlemove={this.props.handlemove} value={this.props.option}/>
              </div>
            </div>
            <div className="open-search">
              <Link  onClick={this.props.showSearch} to="/search">Add a book</Link>
            </div>
            </div>
         );
     }
}


export default MainPage;