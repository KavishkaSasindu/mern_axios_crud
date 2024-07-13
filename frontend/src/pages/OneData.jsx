import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const OneData = () => {
  const { id } = useParams();
  const [oneData, setOneData] = useState({});
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/get/${id}`);
      console.log(response.data.data);
      setOneData(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <div>
      <h1>One Data Page</h1>
      <div>
        <hr />
        <p>{oneData._id}</p>
        <h4>{oneData.firstName}</h4>
        <p>{oneData.lastName}</p>
        <p>{oneData.email}</p>
        <p>{oneData.job}</p>
        <div>
          <button
            onClick={() => {
              navigate(`/`);
            }}
          >
            AllData
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default OneData;
