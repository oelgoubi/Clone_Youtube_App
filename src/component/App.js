import React from 'react';
import SearchBar from './SearchBar'

class App extends React.Component {

  onSubmitForm = (keyword)=>{

    console.log(keyword);

    // Do an network request to the Youtube API using axios
  }
  
  render(){
    return (
      <div className="App ui container" style={{marginTop:"20px", width:"900px"}}>
        <SearchBar  onSubmit={this.onSubmitForm} />
      </div>
    );
  }
}

export default App;
