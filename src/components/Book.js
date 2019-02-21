import React, {Component} from 'react';
import ShelfChanger from '../modules/ShelfChanger';

class Book extends Component {

    render() {
    const style = {
        width: 128, 
        height: 193, 
        backgroundImage: "url('"+this.props.book.imageLinks.thumbnail+"')"
    }
    return (
        <li id={this.props.book.id}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={style}></div>
                    <ShelfChanger  isUpdated={this.props.isUpdated}  book={this.props.book} changeShelf={this.props.changeShelf}/>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        </li>);
    }
}

export default Book;