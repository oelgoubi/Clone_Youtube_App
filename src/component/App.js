import React from 'react';
import SearchBar from './SearchBar';
import {youtube,baseParams} from '../api/youtube'

class App extends React.Component {

  onSubmitForm = async (keyword) => {

    console.log(keyword);

    const response = await youtube.get('/search', {
                   params: {
                         ...baseParams,
                         q: keyword
                        }
                    });
    
    console.log(response);
  }

  render() {
    return (
      <div className="App ui container" style={{ marginTop: "20px", width: "900px" }}>
        <SearchBar onSubmit={this.onSubmitForm} />
      </div>
    );
  }
}

export default App;
