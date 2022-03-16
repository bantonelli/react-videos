import React from 'react'
import '../css/VideoList.css'

class VideoList extends React.Component {

    // Could be a separate VideoItem component 
    makeVideoItem = (video, callback) => {
        const { id, snippet } = video 
        const { title, description, thumbnails, channelTitle} = snippet
        return (
            <div
                className="item"
                key={id.videoId}
                onClick={() => callback(video)}
            >
                <img
                    className="ui image"
                    src={thumbnails.medium.url}
                    alt={title}
                />
                <div className="content">
                    <p className="header">{title}</p>
                    <p className="meta">{channelTitle}</p>
                    <div className="description">{description}</div>
                </div>
            </div>
        );
    }

    render() {
        // console.log("VIDEO LIST: ", this.props.videoList)
        let listItems = []
        if (Array.isArray(this.props.videoList)) {
            listItems = this.props.videoList.map((video) => {
                return this.makeVideoItem(video, this.props.callback);
            })
            return (
                <div className="ui relaxed divided list video-list">
                    {listItems}
                </div>
            )                
        } else {
            return (
                <div className="ui list video-list">
                    {this.props.videoList}
                </div>
            );
        }

    }

}

export default VideoList