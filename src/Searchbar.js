import React,{useState} from 'react'
import './Searchbar.css';
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getinput } from './features/termSlice';
function Searchbar({hidebuttons = false}) {
       const [input,setinput]=useState('');
       const navigate=useNavigate();
       const dispatch=useDispatch();
       
  const search=(e)=>{
    e.preventDefault();
    navigate('/search');
    dispatch(getinput(input));
  }
  return (
         <div className='search'>
       <form onSubmit={search} className="body_search">
       <SearchIcon />
       <input type="text" value={input} onChange={e=>setinput(e.target.value)} contentEditable="true" />
       <img
         className="body_mike"
         src="https://logowik.com/content/uploads/images/google-mic-icon9492.jpg"
         alt="mike"
       />
       </form>

       {
              !hidebuttons ?( <><div className="body_btngroup">
       <Button type='submit'>Google Search</Button>
       <Button>I'm Feeling Lucky</Button>

     </div>
     <p>
       {" "}
       Google offered in: <span style={{ color: "blue" }}>Français</span>
     </p>
     </>
      ):( <><div className="body_btngroup">
       <Button type='submit' className='hiddenbtn'>Google Search</Button>
       <Button className='hiddenbtn'>I'm Feeling Lucky</Button>
     </div> <p className='hiddenbtn'>
       {" "}
       Google offered in: <span style={{ color: "blue" }}>Français</span>
     </p> </>)
       }
    
    
    
     </div>
  )
}

export default Searchbar