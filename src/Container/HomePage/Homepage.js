import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ContactList from "../../components/Homepage content/ContactList";
import "./Homepage.css";
function Homepage(){
    return(
        <div className="home_container">
        <Navbar showButton={false} signOut={true} />
        <ContactList />
        </div>
    );
}

export default Homepage;