import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
    
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
                <div className="column">
                    <p>Main Content</p>
                </div>
                <div className="column">
                    <p>Video List</p>
                </div>
            </div>
        );
    }
}

export default App