import React from 'react'

class Read extends React.Component{
   
    render(){
        return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {this.props.Read.map((book)=>
            <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.url})` }}></div>
                <div className="book-shelf-changer">
                  <select value={this.props.optionRead} onChange={this.props.handleRead} >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.bookTitle}</div>
              <div className="book-authors">{book.bookAuthors}</div>
            </div>
          </li>
          )}
            
          </ol>
        </div>
        </div>
        );
    }
}

export default Read;

