import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import {update, getAll} from'../BooksAPI';
import {  Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }
  
  constructor(props){
        super(props);
        this.state={
            books:[],
        }
    }
    componentDidMount() {
      const promise = getAll();
      promise.then((data)=>{
          this.setState({books:data});
      }).catch((error)=>{
          console.log("Error Occured!");
      })
  };

    changeShelf=(book, shelf)=>{
      console.log("Clicked: " + shelf);
      update(book, shelf);
      const promise = getAll();
      promise.then((data)=>{
        this.setState({books:data});
      }).catch((error)=>{
          console.log("Error Occured!");
      })
    }

  render() {
    return (
      <div className="app">
      <Route exact path="/" render={()=> (<ListBooks  state={this.state} books={this.state.books} changeShelf={this.changeShelf}/>)}/>
      <Route exact path="/search" render={()=>(<SearchBooks changeShelf={this.changeShelf}/>)} />

      {/* {<Switch>
        <Route exact path="/" component={ListBooks} />
        <Route path="/search/" component={SearchBooks} />
      </Switch>} */}
      </div>
    )
  }
}

export default BooksApp
