import React, {Component} from 'react';
import SearchBar from './search-bar/search-bar'
import './app.css'

class App extends Component{

    state = {
        images : []
    }

    onSearchImages(){

    }


    render(){
        return(
            <div className="app-container">
                <SearchBar onSearchImages={this.onSearchImages}/>
            </div>
        )
    }
}

export default App;