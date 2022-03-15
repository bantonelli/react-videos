import React from "react";

class SearchBar extends React.Component {
    state = { searchTerm: "" };

    handleInput = (event) => {
        // console.log("Value: ", event.target.value)
        this.setState({ searchTerm: event.target.value})
    };

    search = (event) => {
        event.preventDefault();
        // console.log("Search event handler", event);
        this.props.callback(this.state.searchTerm)
    };

    render() {
        return (
            <div className="ui segment" style={{ margin: "10px 0px" }}>
                <form action="" className="ui form" onSubmit={this.search}>
                    <div className="field">
                        <label htmlFor="searchbar">Video Search</label>
                        <input
                            type="text"
                            name="searchbar"
                            placeholder="Enter search term"
                            value={this.state.searchTerm}
                            onInput={this.handleInput}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
