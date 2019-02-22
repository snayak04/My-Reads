import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';


 class AddBook extends Component {
    handleOnClick = () => {
        this.setState({redirect: true});
    }
    state={
       redirect:false
    }

     render(){
        if(this.state.redirect)
            return <Redirect from="/" to="/search"/>
        
        return (<div className="open-search">
            <button onClick={this.handleOnClick}>Add a book</button>
        </div>);
     }
}
export default AddBook;