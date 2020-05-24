import React from 'react';
import VideoItem from './VideoItem'

const  VideoList = ({videos, onVideoClicked}) =>{
    
     const videosList = videos.map((video) =>{
       if(!video.id.videoId) {console.log("not found");}
       return <VideoItem video={video} onVideoClicked={onVideoClicked} key={video.id.videoId} />  
     });

    return(
        <div className="ui relaxed divided list">
            {videosList}
        </div>
    );
}

export default VideoList;