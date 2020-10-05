import React, {Component} from 'react';
import SearchBar from './search-bar/search-bar'
import ImageList from './images/image-list'
import axios from 'axios'
import './app.css'

class App extends Component{

    state = {
        images : []
    }

    onSearchImages = async (search) =>{
        console.log('App: ' + search)
        const result = await axios.get('https://api.unsplash.com/search/photos', {
            params:{
                query: search
            },
            headers:{
                Authorization: 'Client-ID qp3-DMmEGTP6t9w08KwclFXEwiDLcyQ1TQNojOBYUqg'
            }
        })
        console.log(result)
        this.setState({
            images: result.data.results
        })
    }


    render(){
        return(
            <div className="app-container">
                <SearchBar onSearchImages={this.onSearchImages}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;