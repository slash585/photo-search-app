import React, {Component} from 'react';
import './search-bar.css'

class SearchBar extends Component{
    constructor(props){
        super(props)

        this.state = {
            search: ""
        }
        this.inputChanged = this.inputChanged.bind(this)
        this.searchImage = this.searchImage.bind(this)
    }

    inputChanged(event){
        this.setState({
            search:event.target.value
        })
    }

    searchImage(){
        this.props.onSearchImages(this.state.search)
    }


    render(){
        return(
          <div className="search-bar-container ui action input">
              <input 
              onChange={this.inputChanged}
              type="text" 
              placeholder="Search..."
              value={this.state.search}
              onKeyPress={(e)=>{
                if (e.key==='Enter') {
                    this.searchImage()
                }
            }}/>
              <button className="ui icon button" onClick={this.searchImage}>
              <i className="search icon"></i>
            </button>
          </div>
        )
    }
}

export default SearchBar


