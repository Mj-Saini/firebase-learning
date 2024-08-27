import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const GetData = () => {
  const [getUserData, setGetUserData] = useState([]);

  useEffect(() => {
    const getFromFirestore = async () => {
      const querySnapshot = await getDocs(collection(db, "unique"));
      const LetGetStarted = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        LetGetStarted.push(doc.id, doc.data());
        setGetUserData(LetGetStarted);
      });
    };
    getFromFirestore();
  }, []);
  console.log(getUserData, "12ws");
  return (
    <div>
      {getUserData.map((user) => (
        <>
          <h2>{user.name}</h2>
          <h2>{user.hobby}</h2>
          <h2>{user.lyrics}</h2>
        </>
      ))}
    </div>
  );
};

export default GetData;
