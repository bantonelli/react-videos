import React from 'react'
import '../css/VideoDetail.css'

const VideoDetail = ({ video }) => {
    if (video) {
        return (
            <div className="video-detail">
                <div className="ui embed">
                    <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
                </div>
                <div className="ui segment">
                    <h4>{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );        
    }
    return (
        <div className="video-detail">
            <p>Loading...</p>
        </div>
    );
}


export default VideoDetail