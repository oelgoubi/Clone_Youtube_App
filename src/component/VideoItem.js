import React from 'react';
import '../style/VideoItem.css'

const VideoItem = ({video, onVideoClicked}) =>{
    const {snippet} = video;


    return(
      <div className="video-item  item" onClick={()=>onVideoClicked(video)} >
         <img className="ui image" alt ={snippet.description} src={snippet.thumbnails.medium.url}/>   
         <div className="content">
             <div className="header">{snippet.title}</div> 
         </div>
      </div>
    );
}

export default VideoItem;