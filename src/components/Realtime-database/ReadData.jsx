import { getDatabase, ref, onValue } from "firebase/database";
import React, { useEffect, useState } from "react";
import { app } from "../../firebase";

const ReadData = () => {
  const [getData, setGetData] = useState([]);

  const getAllDate = async () => {
    const db = getDatabase(app);
    const starCountRef = ref(db, "users/");

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const allArrays = Object.values(data);
        setGetData(allArrays);
      } else {
        setGetData([]);
      }
    });
  };

  useEffect(() => {
    getAllDate();
  }, []);

  console.log(getData, "star");

  return (
    <div>
      {getData.length > 0 ? (
        getData.map((messages, index) => (
          <h2 key={index}>{messages.massage || "No message available"}</h2>
        ))
      ) : (
        <p>Please add a message</p>
      )}
    </div>
  );
};

export default ReadData;
