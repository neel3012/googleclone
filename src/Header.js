import React from "react";
import "./Header.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar, Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { login, selectuser ,logout} from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectuser);
  const signin = () => {
    auth.signInWithPopup(provider).then(({ user }) => {
      dispatch(
        login({
          displayName: user.displayName,
          photoUrl: user.photoURL,
          email: user.email,
        })
      );
    });
  };

  const signout=()=>{
         const text = "Confirm! Log Out?";
  if (window.confirm(text) == true) {
       auth.signOut();
       dispatch(logout());
  } else {
    text = "You canceled!";
  }
      
  }
       
       

  return (
    <div className="header">
      <div className="header_leftside">
        <a href="#" className="header_a">
          About
        </a>
        <a href="#" className="header_a">
          Store
        </a>
      </div>
      <div className="header_rightside">
        <a href="" className="header_a">
          Gmail
        </a>
        <a href="" className="header_a">
          Images
        </a>
        <AppsIcon className="header_app" />
        {user ? (
          <Avatar src={user?.photoUrl} style={{cursor:'pointer'}} onClick={signout}/>
        ) : (
          <Button
            className="header_button"
            variant="contained"
            onClick={signin}
          >
            Sign In
          </Button>
        )}
      </div>
    </div>
  );
}

export default Header;
