import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Link } from "react-router-dom";

const UserCard = () => {
  const [userDetails, setUserDetails] = useState([]);

  const getAllData = async () => {
    const querySnapshot = await getDocs(collection(db, "shayri"));
    let userData = [];
    querySnapshot.forEach((doc) => {
      userData.push({ data: doc.data(), id: doc.id });
      setUserDetails(userData);
    });
  };
  useEffect(() => {
    getAllData();
  }, []);

  console.log(userDetails, "user");

  return (
    <div className="flex flex-wrap">
      {userDetails.map((items, index) => {
        return (
          <div key={index} className="w-1/3 px-3 mt-3 ">
            <div className=" border border-black p-4">
              <Link
                to={`/user-details/${items.id}`}
                className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
              >
                <img
                  className="w-full"
                  src="https://via.placeholder.com/400x200"
                  alt="Placeholder"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Shayar Mirza</div>
                  <p className="text-gray-700 text-base">check the ryms</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #tag1
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #tag2
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #tag3
                  </span>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserCard;
