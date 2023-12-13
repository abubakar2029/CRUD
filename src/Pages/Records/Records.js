import React, { useState } from "react";

import axios from "axios";

function Records() {
  const [data, setdata] = useState([]);

  async function record() {
    try {
      const response = await axios.get("/recordLao", "Hello");
      setdata(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={record}>Record Dikhao</button>
      <button
        onClick={() => {
          setdata([]);
        }}
      >
        Record Khatam kro
      </button>
      {data.map((item) => (
        <div key={item._id}>
          <p>Name</p> &ensp; <p>{item.name}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Records;
