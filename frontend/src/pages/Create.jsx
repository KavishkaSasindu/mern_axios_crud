import axios from "axios";
import React, { useState } from "react";

const Create = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    job: "",
  });

  const changeValues = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/create",
        formData
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h1>Create Page</h1>
      <div>
        <form method="post" onSubmit={postData}>
          firstname: <br />
          <input type="text" name="firstName" onChange={changeValues} /> <br />
          lastName: <br />
          <input type="text" name="lastName" onChange={changeValues} /> <br />
          email: <br />
          <input type="email " name="email" onChange={changeValues} /> <br />
          job: <br />
          <input type="text" name="job" onChange={changeValues} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
