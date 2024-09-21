import { getDatabase, ref, onValue, remove } from "firebase/database";
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
        const allArrays = Object.keys(data).map((keys) => {
          return { id: keys, ...data[keys] };
        });

        setGetData(allArrays);
      } else {
        setGetData([]);
      }
    });
  };

  useEffect(() => {
    getAllDate();
  }, []);

  const handleRemove = (e, messages) => {
    e.preventDefault();
    let db = getDatabase(app);
    const refrence = ref(db, `users/${messages.id}`);
    console.log(refrence, "remove");
    remove(refrence);
  };

  console.log(getData);

  return (
    <div>
      {getData.length > 0 ? (
        getData.map((messages, index) => (
          <div key={index} className="flex justify-between">
            <h2>{messages.massage || "No message available"}</h2>
            <button
              onClick={(e) => handleRemove(e, messages)}
              className="border border-black px-5 py-2"
            >
              delete
            </button>
          </div>
        ))
      ) : (
        <p>Please add a message</p>
      )}
    </div>
  );
};

export default ReadData;
