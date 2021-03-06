import React from 'react';

function Book ({book,handleMove}){
    console.log(book);
    const {shelf,title,authors}=book;
    console.log(shelf);
return(
    <div className="book">
    <div className="book-top">
    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage:`url(${book.imageLinks ? book.imageLinks.thumbnail :''})`}}></div>
    <div className="book-shelf-changer">
    <select defaultValue={shelf} onChange={(e)=>handleMove(book,e.target.value)}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
    </select>
    </div>
    </div>
    <div className="book-title">{title ? title :''}</div>
    <div className="book-authors">{authors ? authors :''}</div>
</div>
);  
}

export default Book;