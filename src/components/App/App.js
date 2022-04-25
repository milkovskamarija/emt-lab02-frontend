import './App.css';
import React, {Component} from "react";
import Books from '../Books/books';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    render() {
        return (
            <div>
                <Books books={this.state.books}/>
            </div>
        );
    }
}

export default App;
