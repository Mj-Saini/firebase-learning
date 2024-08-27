import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const SingleData = () => {
  const [userData, setUserData] = useState([]);

  const user = async () => {
    const docRef = doc(db, "shayri", "sWT40SkfXZfqdNIksAUc");
    const docSnap = await getDoc(docRef);
    setUserData(docSnap.data());
  };
  useEffect(() => {
    user();
  }, []);

  return (
    <div>
      <h2>{userData.title}</h2>
      <p> {userData.description}</p>
    </div>
  );
};

export default SingleData;
