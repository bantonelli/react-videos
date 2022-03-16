import React from 'react'
import '../css/VideoList.css'

class VideoList extends React.Component {

    makeVideoItem = (video) => {
        const { id, snippet } = video 
        const { title, description, thumbnails, channelTitle} = snippet
        return (
            <div className="item" key={id.videoId}>
                <img
                    className="ui image"
                    src={thumbnails.medium.url}
                    alt={title}
                />
                <div className="content">
                    <p className="header">{ title }</p>
                    <p className="meta">{ channelTitle }</p>
                    <div className="description">
                        { description }
                    </div>
                </div>
            </div>
        );
    }

    render() {
        // console.log("VIDEO LIST: ", this.props.videoList)
        const listItems = this.props.videoList.map((video) => {
            console.log("MAKE VIDEO ITEM: ", this.makeVideoItem);
            return this.makeVideoItem(video);
        })

        return (
            <div className="ui list video-list">
                {listItems}
            </div>
        )
    }

}

export default VideoList