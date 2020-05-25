import React from 'react';
import SearchBar from './SearchBar';
import { youtube, baseParams } from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

class App extends React.Component {
  state = { videos: [], selectedVideo: null };


  componentDidMount()
  {
    this.onSubmitForm("Peace");  // when the App is loading
  }

  onSubmitForm = async (keyword) => {

    const response = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: keyword
      }
    });
 
    const videos = response.data.items.filter(video => video.id.videoId)
    this.setState({      // keep only the videos and  // Defaulting Video Selection
      videos: videos,
      selectedVideo: videos[0]
    })
   
  }

  onVideoClicked = video => {

    console.log('from App', video);
    this.setState({
      selectedVideo: video
    })
  }





  render() {
    return (
      <div className="App ui container" style={{ marginTop: "20px", width: "900px" }}>
        <SearchBar onSubmit={this.onSubmitForm} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList videos={this.state.videos} onVideoClicked={this.onVideoClicked} />
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
