import React,{useEffect} from 'react'
import Header from './Header';
import Body from './Body'
import Search from './Search'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

// import { useDispatch, useSelector } from 'react-redux';
// import { login, selectuser } from './features/userSlice';
// import {auth} from './firebase'

function App() {
  //   const user=useSelector(selectuser);
  //   const dispatch=useDispatch();
  // useEffect(()=>{
  //   auth.onAuthStateChanged(user=>{
  //     if(user){
  //       dispatch(login({
          
  //         displayName:user.displayName,
  //         photoUrl:user.photoURL,
  //         email:user.email,
          
  //       }))
  //     }
  //     else{

  //     }
  //   })
  // })

    // auth.onAuthStateChanged(({user})=>{
    //   if(user){
    //     login({
    //       email:user.email,
    //       photoUrl:user.photoURL,
    //       displayName:user.displayName
    //     })
    //   }
    //   else{

    //   }
    
    //   },[])
   
  return (
    <div className='app'>
      <Router>
      
        <Routes>
        <Route path='/' element={<><Header/><Body/></>}/>
          <Route exact path='/search' element={<Search/>}/>
          
        </Routes>
      </Router>
      
      
    </div>
  )
}

export default App;