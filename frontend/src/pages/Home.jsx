import React, { useEffect, useState } from "react";
import axios, { all } from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [allData, setAllData] = useState([]);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/");
      console.log(response);
      setAllData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/delete/${id}`);
      console.log(response);
      location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {allData.data?.map((user, index) => (
          <div key={index}>
            <hr />
            <p>{user._id}</p>
            <h4>{user.firstName}</h4>
            <p>{user.lastName}</p>
            <p>{user.email}</p>
            <p>{user.job}</p>
            <div>
              <button
                onClick={() => {
                  navigate(`/get/${user._id}`);
                }}
              >
                Read
              </button>
              <button
                onClick={() => {
                  navigate(`/update/${user._id}`);
                }}
              >
                Update
              </button>
              <button
                onClick={() => {
                  handleDelete(user._id);
                }}
              >
                Delete
              </button>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
