import React,{useState} from 'react';
import '../style/SearchBar.css';



function SearchBar(props) {
   const  [term,setTerm] = useState("");
   const  onInputChange = (e)=>{
        e.preventDefault();
        setTerm(e.target.value)
    }

   const onFormSumbit = e =>{
        e.preventDefault();
        props.onSubmit(term);
        setTerm("")
    }

    
        return (
            <div className="serachbar ui segment">
                <form className="ui form" onSubmit={onFormSumbit}>
                    <div className="field">
                        <label style={{color:"red", fontSize:"27px"}}><span>YouGoubi</span></label>
                        <input placeholder="search for a video" name="searchVid" type="text" 
                        value={term}
                        onChange={onInputChange}/>
                    </div>
                    <button type="submit" className="ui primary button">
                       Search
                    </button>
                </form>
            </div>
        );
    }



export default SearchBar;