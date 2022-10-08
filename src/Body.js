import React, { useState } from "react";
import "./Body.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import Searchbar from './Searchbar'
function Body() {

  // const [input,setinput]=useState('');
  // const search=(e)=>{
  //   e.preventDefault();
  //   window.alert('hello')
  // }
  return (
    <div className="body">
      <div className="body_upper">
        <img
          className="body_logoimg"
          src="https://cdn.vox-cdn.com/thumbor/dOZfqr8j2NcSa8Vjn0pPzg2gm2s=/0x0:2012x1341/1220x813/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
          alt="logo"
        />
         <Searchbar/>
      </div>

      <div className="body_lower">
        <p className="body_country">Canada</p>
        <div className="body_options">
          <div className="body_leftoptions">
                 <p className="body_p">Advertising</p>
                 <p className="body_p">Business</p>
                 <p className="body_p">How Search works</p>


          </div>
          <div className="body_rightoptions">
          <p className="body_p">Privacy</p>
                 <p className="body_p">Terms</p>
                 <p className="body_p">Services</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
