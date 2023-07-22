import React, { useState } from "react";
import './ContactList.css';
import ContactCard from "../card/card";

export default function ContactList() {
  const [contacts, setContacts] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: ""
  });
  const [contactList, setContactList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [select, setSelect] = useState(false);

  const handleSelect = () => {
    setSelect(!select);
  }
  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContacts((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setContactList((arr) => [...arr, contacts]);
    setContacts({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: ""
    });
    setShowForm(false); // Close the form after submitting
  };

  const deleteContact = (index) => {
    setContactList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <div className="main_container">
      <div className="add_button">
        <span className="contact_button">
        <h3>Click to ADD NEW CONTACT! 👉</h3>
        <button className="add" onClick={handleClick}>+</button>
        <button className="select" onClick={handleSelect}>{(!select) ? 'Select' : 'Deselect'}</button>
        </span>
        {showForm && (
          <div className="modal">
            <div className="overlay">
              <div className="container">
                <h1>Save Contact Details Here</h1>
                <form className="form_content" onSubmit={handleSubmit}>
                  <span className="lable_field">
                    <label htmlFor="first_name">First Name: </label>
                    <label htmlFor="last_name">Last Name: </label>
                  </span>
                  <span className="name_field">
                  <input type="text" id="first_name" name="firstName" value={contacts.firstName} onChange={handleChange} />
                  <input type="text" id="last_name" name="lastName" value={contacts.lastName} onChange={handleChange} />
                  </span>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" pattern="[0-9]{10}" required name="phoneNumber" value={contacts.phoneNumber} onChange={handleChange} />
                  <label htmlFor="mail">Email</label>
                  <input type="email" id="mail" name="email" value={contacts.email} onChange={handleChange} />
                  <br />
                  <span className="button_container">
                  <button type="submit">Save</button>
                  <button type="button" onClick={handleClick}>Close</button>
                  </span>
                  
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {contactList.map((contact, index) => (
          <div className="list" key={index}>
            {
             (select) ? (
              <span>
              <label>
              <input type="checkbox" />
            <ContactCard Name={contact.firstName + " " + contact.lastName} phone={contact.phoneNumber} />
            <button onClick={() => deleteContact(index)}>Delete</button>
            </label></span>
              ) : ( <div>
            <ContactCard Name={contact.firstName + " " + contact.lastName} phone={contact.phoneNumber} />
          <button onClick={() => deleteContact(index)}>Delete</button> 
           </div> )}
          </div>
        ))}
      </div>
    </div>
  );
}
