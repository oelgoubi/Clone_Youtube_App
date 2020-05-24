import React from 'react';
import '../style/SearchBar.css'


class SearchBar extends React.Component {
    state = { term :''};

    onInputChange = (e)=>{
        e.preventDefault();
        this.setState({term : e.target.value})
    }

    onFormSumbit = e =>{
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSumbit}>
                    <div className="field">
                        <label>Watch Now</label>
                        <input placeholder="search for a video" name="searchVid" type="text" 
                        value={this.state.term}
                        onChange={this.onInputChange}/>
                    </div>
                    <button type="submit" className="ui primary button">
                       Search
                    </button>
                </form>
            </div>
        );
    }
}


export default SearchBar;