import React from "react";

import { useState, useEffect } from "react";
const initialFormValues = { fullname: "", number: "" };
function Form({ addContact, contacts }) {
  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const [form, setForm] = useState(initialFormValues);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.number === "") return false;

    addContact([...contacts, form]);
    console.log(form);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="number"
          placeholder="Number"
          value={form.number}
          onChange={onChangeInput}
        />
      </div>
      <div className="btn">
        <button>ADD!</button>
      </div>
    </form>
  );
}

export default Form;
