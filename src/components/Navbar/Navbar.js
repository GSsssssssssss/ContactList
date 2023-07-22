import React from "react";
import './Navbar.css';
import { useAuth0 } from "@auth0/auth0-react";
export default function Navbar({showButton, signOut}) {
    const {user, loginWithRedirect} = useAuth0();
    const {logout} = useAuth0();
    // const goToLogInPage = () => {
    //     loginWithRedirect();
    // };
    return (
        <div className="nav">
            <h2>Contact List</h2> 
            {showButton === false ? (" ") :(
            <>
            <button type="button" onClick={() => loginWithRedirect()}>Log In</button>
            
            </>)}
            {
                signOut && (
                    <div className="nav_content">
                   
                    <h4>{user && `Hello ${user.name}`}</h4>
                    &nbsp; &nbsp;
                    {/* <button onClick={() => logout( {logoutParams: {returnTo: window.location.origin}})}>Log Out</button> */}
                    <img src={user.picture} alt={user.name} onClick={() => logout( {logoutParams: {returnTo: window.location.origin}})} />
                    </div>
                ) }
        </div>
    );
}