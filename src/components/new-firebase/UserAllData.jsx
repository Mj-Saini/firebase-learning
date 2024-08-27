import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const UserAllData = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  const getUserDetails = async () => {
    const docRef = doc(db, "info", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUserDetails(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-5 items-start">
      <img
        src={userDetails.url}
        alt={userDetails.username}
        className="w-40 h-40 object-cover rounded-full"
      />
      <div>
        <h2 className="text-xl text-black capitalize">
          {userDetails.formData.username}
        </h2>
        <h2 className="text-xl text-black capitalize">
          {userDetails.formData.email}
        </h2>
        <h2 className="text-xl text-black capitalize">
          {userDetails.formData.mobile}
        </h2>
        <h2 className="text-xl text-black capitalize">
          {userDetails.formData.address}
        </h2>
      </div>
    </div>
  );
};

export default UserAllData;
