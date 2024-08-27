import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const People = () => {
  const { id } = useParams();
  const [personDetails, setPersonDetails] = useState("");
  const personAllDetails = async () => {
    let docRef = doc(db, "gazals", id);
    let docSpan = await getDoc(docRef);
    setPersonDetails(docSpan.data());
  };
  useEffect(() => {
    personAllDetails();
  }, [id]);

  return (
    <div>
      <h2>{personDetails.name}</h2>
      <h2>{personDetails.hobby}</h2>
      <h2>{personDetails.address}</h2>
      <h2>{personDetails.state}</h2>
      <h2>{personDetails.region}</h2>
      <h2>{personDetails.study}</h2>
    </div>
  );
};

export default People;
