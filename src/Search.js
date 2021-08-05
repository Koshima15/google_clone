import React,{useState} from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
function Search({hideButtons=false}) {
    const [input, setInput]=useState("");
    const history =useHistory();
    const search = e =>{
        e.preventDefault();
        history.push('/search');
    }
    return (
        <form className="search">
            <div className="searchInput">
                <SearchIcon className="searchInputIcon"/>
                <input value={input} onChange={e=>setInput(e.target.value)}/>
                <MicIcon/>
            </div>
            {!hideButtons ?(
            <div className="searchButtons">
                <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm feeling lucky!</Button>
            </div>
            ):(
                <div className="searchButtons">
                <Button type='submit' onClick={search} variant="outlined" className="searchButtonsHidden">Google Search</Button>
                <Button variant="outlined" className="searchButtonsHidden">I'm feeling lucky!</Button>
            </div>
            )}
        </form>
    )
}

export default Search
