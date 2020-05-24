import React from 'react';
import SearchBar from './SearchBar';
import {youtube,baseParams} from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

class App extends React.Component {
  state={videos:[] ,selectedVideo : null}

  onSubmitForm = async (keyword) => {

    const response = await youtube.get('/search', {
                   params: {
                         ...baseParams,
                         q: keyword
                        }
                    });
   
    this.setState({      // keep only the videos
      videos : response.data.items.filter(video => video.id.videoId)
    })
    console.log(response);
  }

  onVideoClicked = video =>{

    console.log('from App', video);
    this.setState({
      selectedVideo : video
    })
  }





  render() {
    return (
      <div className="App ui container" style={{ marginTop: "20px", width: "900px" }}>
        <SearchBar onSubmit={this.onSubmitForm} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos}  onVideoClicked={this.onVideoClicked} />
      </div>
    );
  }
}

export default App;
