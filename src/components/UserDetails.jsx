import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const UserDetails = () => {
  const { id } = useParams();
  const [userAllDetails, setUserAllDetails] = useState("");

  const getDetails = async () => {
    const docRef = doc(db, "shayri", id);
    const docSpan = await getDoc(docRef);
    console.log(docSpan.data(), "userDetails");
    setUserAllDetails(docSpan.data());
  };
  useEffect(() => {
    getDetails();
  }, []);
  const splitTextInMiddle = (text) => {
    if (!text) return ["", ""];
    const middle = Math.floor(text.length / 2);
    const spaceIndex = text.indexOf(" ", middle);
    const splitIndex = spaceIndex > -1 ? spaceIndex : middle;
    return [text.slice(0, splitIndex), text.slice(splitIndex)];
  };

  const highlightWord = (text, wordToHighlight) => {
    if (!text) return ""; // If text is undefined, return an empty string
    const regex = new RegExp(`(${wordToHighlight})`, "i");
    return text.replace(regex, '<span style="color: red;">$1</span>');
  };

  return (
    <div>
      <div>
        {" "}
        {splitTextInMiddle(userAllDetails.sher1 || "").map((part, i) => (
          <p
            key={i}
            dangerouslySetInnerHTML={{
              __html: highlightWord(part, "title"),
            }}
          ></p>
        ))}{" "}
        <br />
        {splitTextInMiddle(userAllDetails.sher2 || "").map((part, i) => (
          <p
            key={i}
            dangerouslySetInnerHTML={{
              __html: highlightWord(part, "title"),
            }}
          ></p>
        ))}
        <p>{userAllDetails.title}</p>
        <p>{userAllDetails.description}</p>
      </div>
    </div>
  );
};

export default UserDetails;
