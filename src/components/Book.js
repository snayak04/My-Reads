import React, {Component} from 'react';
import ShelfChanger from './ShelfChanger';

class Book extends Component {
    render() {
    let image = ((this.props.book.imageLinks)?(this.props.book.imageLinks.thumbnail):(''));
    const style = { 
        width: 128, 
        height: 193, 
        backgroundImage: "url('" +image+ "')"
    }
    return (
        <li id={this.props.book.id}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={style}></div>
                    <ShelfChanger book={this.props.book} changeShelf={this.props.changeShelf}/>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        </li>);
    }
}

export default Book;