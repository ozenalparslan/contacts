import { useState, useEffect } from "react";

import "./styles.css";
import List from "./List";
import Form from "./Form";
function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Hakan",
      number: "123123",
    },
    {
      fullname: "Ömer",
      number: "456456",
    },
    {
      fullname: "Kemal",
      number: "789789",
    },
  ]);
  useEffect(() => {}, [contacts]);

  return (
    <div id="container">
      <h1>CONTACTS</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
