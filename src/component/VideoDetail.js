import React from 'react';



const VideoDetail = ({ video }) => {

    if (!video) {
        return <div></div>
    }
    
    const videoScr = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
             <div className="ui embed" >
                 <iframe title={video.snippet.title} src={videoScr} />
             </div>
            <div className="ui grid segment">
               <div className="ui row">
                    <h4 className="header sixteen wide column">{video.snippet.title}</h4>
                </div>
                <div className="ui row">
                  <div className="ten wide column">
                     <p >{video.snippet.description}</p>
                  </div>
                  <div className="ui vertical divider one wide column"></div>
                  <div className="four wide column">
                     <p >{video.snippet.publishedAt}</p>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default VideoDetail;