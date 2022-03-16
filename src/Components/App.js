import React from "react";
import SearchBar from "./SearchBar"
import VideoList from './VideoList'
import VideoDetail from "./VideoDetail"
import youtube from "../api/youtube"

import '../css/App.css'
    
class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchResults: []
        }
    }

    youtubeSearch = async (searchTerm) => {
        console.log("YT SEARCH TERM: ", searchTerm)
        let searchResults = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        })

        if (searchResults.status === 200) {
            searchResults = searchResults.data.items            
        } else {
            searchResults = 'Error searching YT'
        }
        this.setState({
            searchResults
        })
        
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar
                    callback={this.youtubeSearch}
                ></SearchBar>
                <div className="main-content">
                    <VideoDetail></VideoDetail>
                    <VideoList
                        videoList={this.state.searchResults}
                    ></VideoList>
                </div>
            </div>
        );
    }
}

export default App