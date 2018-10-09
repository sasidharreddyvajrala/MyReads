import React from 'react'
import {Link} from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input';



    class Search extends React.Component{

        render(){
         return (        
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" onClick={this.props.showSearchPage} to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */
                 }
                <DebounceInput max={2} debounceTimeout={3000} type="text" placeholder="Search by title or author"  onChange={(e)=>this.props.handleSearch(e.target.value)} />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.props.bookResults && this.props.bookResults.map((book)=>
                        <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage:`url(${bookResult.imageLinks ? bookResult.imageLinks.thumbnail :''})`}}></div>
                            <div className="book-shelf-changer">
                            <select value={this.props.value} onChange={this.props.handleMove}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                      </div>
                            <div className="book-title">{book.title ? book.title : ''}</div>
                            <div className="book-authors">{book.authors ? book.authors : ''}</div>
                    </div>
                  </li>)}
              </ol>
            </div>
          </div>
    );
    }
    }
    
export default Search;