import React, { Component} from 'react';
import {search} from '../BooksAPI';
import Book from './Book';
import {Redirect} from 'react-router-dom';
class SearchBooks extends Component{
    searchBook = (e) =>{
        this.setState({query: e.target.value})
        const promises = search(e.target.value);
        promises.then((books)=>{
            console.log(books);
            if(books && !books.error)
            this.setState({books:books});
            else
            this.setState({books:[]});
        }).catch(()=>{
            console.log("ERROR Searching");
        })
    }
    handleOnClick = () => {
        this.setState({redirect: true});
      }
    state={
        query:"",
        books:[],
        redirect:false
    }
    render() {
        
        const books = this.state.books.map((book)=>{
            console.log(book.shelf);
            return <Book  changeShelf={this.props.changeShelf} book={book} key={book.id} />
        });
        if(this.state.redirect)
            return <Redirect push to="/" />
        
            return( 
        <div className="search-books">
            <div className="search-books-bar">
        <button className="close-search" onClick={this.handleOnClick}>Close</button>
                <div className="search-books-input-wrapper">
                    {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.searchBook}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                {books}
                </ol>
            </div>
        </div>  
    );}
}

export default SearchBooks;