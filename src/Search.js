import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getdata } from "./features/termSlice";
import "./Search.css";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import Searchbar from "./Searchbar";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import { selectuser } from "./features/userSlice";
import SearchunderSec from "./SearchunderSec";
import SearchIcon from "@material-ui/icons/Search";

import PermMediaIcon from "@material-ui/icons/PermMedia";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoomIcon from "@material-ui/icons/Room";
import AssignmentIcon from "@material-ui/icons/Assignment";
function Search() {
  const selector = useSelector(getdata);
  const user = useSelector(selectuser);
  const {data}=useGoogleSearch(selector)   //live call
  // const data = Response;
  // useEffect(()=>{
        
  // },[term])

  return (
    <div className="search_main">
      <div className="searchmain_header">
        <div className="headermain_left">
          <img
            className="search_logoimg"
            // src="https://cdn.vox-cdn.com/thumbor/dOZfqr8j2NcSa8Vjn0pPzg2gm2s=/0x0:2012x1341/1220x813/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="logo"
          />
          <div>
            {" "}
            <Searchbar hidebuttons className="search_searbar" />
          </div>
        </div>
        <div className="headermain_right">
          <SettingsIcon className="seticon" />
          <AppsIcon className="seticon" />
          <Avatar src={user?.photoUrl} />
        </div>
      </div>
      <div className="secline">
        <div className="secline_left">
          <SearchunderSec Icon={SearchIcon} title="All" active />
          <SearchunderSec Icon={PermMediaIcon} title="Images" />
          <SearchunderSec Icon={OndemandVideoIcon} title="Videos" />
          <SearchunderSec Icon={RoomIcon} title="Maps" />
          <SearchunderSec Icon={AssignmentIcon} title="News" />
          <SearchunderSec Icon={MoreVertIcon} title="More" />
        </div>
        <p>Tools</p>
        <div className="secline_right">
          <p>SafeSearch on</p>
        </div>
      </div>

      <div className="line"></div>
      <div className="search_results">
        <p className="results_seconds">
          About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)
        </p>


        
        <div className="search_detailresult">
        {data?.items.map(item=>(
          
          <div className="search_innerdet">
            <div className="search_link">
           
            {item?.pagemap?.cse_image?.length>0 && item?.pagemap?.cse_image[0]?.src && (
              <img
                className="thumb_img"
                src={item?.pagemap?.cse_image[0]?.src}
              />
            )}
             
              <a target='_blank' href={item?.link} className="q">
               {item?.displayLink}
              </a>
            </div>
            <a target='_blank' href={item?.link} className="link_therory">
              {item?.title}
            </a>
            <p className="inner_p">
              {item?.snippet}
            </p>
          </div>

          
        ))}
        </div>
        </div>
      
    </div>
  );
}

export default Search;
