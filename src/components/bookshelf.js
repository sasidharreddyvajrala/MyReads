import React from 'react'
import Book from './book'

function Bookshelf(props){

  
    return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">{props.bookshelf_title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {props.books.map((book)=>
            <li key={book.id}>
            <Book handleMove={props.handlemove}  book={book}/>
            </li>
          )}
            
          </ol>
        </div>
        </div>
        );

} 
export default Bookshelf;