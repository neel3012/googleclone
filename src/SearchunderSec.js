import React from 'react'
import './SearchunderSec.css'
function SearchunderSec({Icon,title,active}) {
  return (
    <div className={`tools ${active && 'activeser'}`}>
           <Icon></Icon>
           <p>{title}</p>
    </div>
  )
}

export default SearchunderSec