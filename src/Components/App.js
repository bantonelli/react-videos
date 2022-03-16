import React from "react";
import SearchBar from "./SearchBar"
import VideoList from './VideoList'
import VideoDetail from "./VideoDetail"
import youtube from "../api/youtube"

import '../css/App.css'
    
class App extends React.Component {

    youtubeSearch = (searchTerm) => {
        console.log("YT SEARCH TERM: ", searchTerm)
        youtube.get('/search', {
            params: {
                q: searchTerm
            }
        }).then((result) => {
            console.log("YT API: ", result)
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
                    <VideoList></VideoList>
                </div>
            </div>
        );
    }
}

export default App