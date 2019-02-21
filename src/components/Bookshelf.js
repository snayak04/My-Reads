import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {

    render(props) {
//        {title, author, url} = props
    const books = this.props.books.map((book)=>{
        return <Book  isUpdated={this.props.isUpdated} changeShelf={this.props.changeShelf} book={book} key={book.id}/>
    });
   return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books}
                </ol>
            </div>
        </div>
    );
    }
}

export default Bookshelf;