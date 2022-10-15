import React from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/contact";

const ContactListComponent = () => {
  const defaultContact = new Contact(
    "Alberto",
    "Ruiz",
    "alberto_ruiz@gmail.com",
    false
  );

  return (
    <div>
      <div>
        <h1>Your Contacts:</h1>
      </div>

      <ContactComponent contact={defaultContact}></ContactComponent>
    </div>
  );
};

export default ContactListComponent;
