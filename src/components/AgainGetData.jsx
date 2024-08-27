import { collection, getDocs } from "firebase/firestore";

import { useEffect, useState } from "react";
import { db } from "../firebase";

function AgainGetData() {
  const [getUser, setGetUser] = useState([]);
  useEffect(() => {
    const allData = async () => {
      const querySnapshot = await getDocs(collection(db, "shayri"));
      let userAllData = [];
      querySnapshot.forEach((doc) => {
        userAllData.push({ id: doc.id, data: doc.data() });
        setGetUser(userAllData);
      });
    };
    allData();
  }, []);
  console.log(getUser);

  // // Utility function to wrap a word in a span with red color
  const highlightWord = (text, wordToHighlight) => {
    if (!text) return ""; // If text is undefined, return an empty string
    const regex = new RegExp(`(${wordToHighlight})`, "i");
    return text.replace(regex, '<span style="color: red;">$1</span>');
  };
  // const highlightFirstWord = (text, wordToHighlight) => {
  //   if (!text) return ""; // If text is undefined, return an empty string
  //   const regex = new RegExp(`(${wordToHighlight})`, "i");
  //   return text.replace(regex, '<span style="color: red;">$1</span>');
  // };

  // Utility function to split the text in the middle
  const splitTextInMiddle = (text) => {
    if (!text) return ["", ""];
    const middle = Math.floor(text.length / 2);
    const spaceIndex = text.indexOf(" ", middle);
    const splitIndex = spaceIndex > -1 ? spaceIndex : middle;
    return [text.slice(0, splitIndex), text.slice(splitIndex)];
  };

  return (
    <div className="p-5">
      {getUser.sher1}
      {getUser.map((user, index) => (
        <div key={index} className="flex flex-col gap-4 ">
          <p className="">{user.data.sher1}</p>

          {splitTextInMiddle(user.data.sher1 || "").map((part, i) => (
            <p
              key={i}
              dangerouslySetInnerHTML={{
                __html: highlightWord(part, "title"),
              }}
            ></p>
          ))}
          {splitTextInMiddle(user.data.sher2 || "").map((part, i) => (
            <p
              key={i}
              dangerouslySetInnerHTML={{
                __html: highlightWord(part, "title"),
              }}
            ></p>
          ))}
        </div>
      ))}
    </div>
  );
}
export default AgainGetData;
