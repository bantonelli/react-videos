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
            searchResults: '',
            currentVideo: null
        }
    }

    componentDidMount() {
        this.youtubeSearch("buildings");
    }

    youtubeSearch = async (searchTerm) => {
        console.log("YT SEARCH TERM: ", searchTerm)
        let searchResults = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        })

        let currentVideo = null

        if (searchResults.status === 200) {
            searchResults = searchResults.data.items
            currentVideo = searchResults[0]
        } else {
            searchResults = 'Error searching YT'
        }
        this.setState({
            searchResults,
            currentVideo
        })
        
    }

    setCurrentVideo = (video) => {
        // console.log("CURRENT VIDEO: ", video)
        this.setState({currentVideo: video})
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar
                    callback={this.youtubeSearch}
                ></SearchBar>
                <div className="main-content">
                    <VideoDetail
                        video={this.state.currentVideo}
                    ></VideoDetail>
                    <VideoList
                        videoList={this.state.searchResults}
                        callback={this.setCurrentVideo}
                    ></VideoList>
                </div>
            </div>
        );
    }
}

export default App