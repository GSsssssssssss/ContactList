import React from "react";
import './LandingPage.css';
import Navbar from "../Navbar/Navbar";
function LandingPage() {
    return(
        <>
        <Navbar showButton={true} signOut={false}/>
        <div className="text">
            
            <h2>Welcome to Contact List</h2>
            <p>Sample Text</p>
            
        </div>
        </>

    );
}

export default LandingPage;