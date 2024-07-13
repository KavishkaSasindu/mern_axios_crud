import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [updateValue, setUpdateValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    job: "",
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/get/${id}`);
      setUpdateValue(response.data.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/update/${id}`,
        updateValue
      );
      console.log(response.data);
      navigate("/"); // Redirect to home page after successful update
    } catch (err) {
      console.error(err.message);
    }
  };

  const changeValues = (e) => {
    setUpdateValue({
      ...updateValue,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Update Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name: <br />
          <input
            type="text"
            name="firstName"
            onChange={changeValues}
            value={updateValue.firstName}
          />
        </label>
        <br />
        <label>
          Last Name: <br />
          <input
            type="text"
            name="lastName"
            onChange={changeValues}
            value={updateValue.lastName}
          />
        </label>
        <br />
        <label>
          Email: <br />
          <input
            type="email"
            name="email"
            onChange={changeValues}
            value={updateValue.email}
          />
        </label>
        <br />
        <label>
          Job: <br />
          <input
            type="text"
            name="job"
            onChange={changeValues}
            value={updateValue.job}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Update;
