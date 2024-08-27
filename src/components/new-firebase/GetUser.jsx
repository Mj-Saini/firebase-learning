import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import CreateUser from "./CreateUser";

const GetUser = () => {
  const [readUser, setReadUser] = useState([]);

  const GetUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "info"));
    let userData = [];
    querySnapshot.forEach((doc) => {
      userData.push({ id: doc.id, ...doc.data() });
    });
    setReadUser(userData);
  };
  useEffect(() => {
    GetUsers();
  }, []);
  console.log(readUser, "Users");

  const RemoveUser = async (id) => {
    await deleteDoc(doc(db, "info", id));
    let dltUser = readUser.filter((user) => user.id !== id);
    setReadUser(dltUser);
    console.log(id, " ");
  };

  return (
    <>
      <CreateUser setReadUser={setReadUser} />
      <div className="flex flex-wrap gap-5 justify-center">
        {readUser.map((data, i) => (
          <div
            key={i}
            className="border border-black w-3/12 p-5 flex flex-col gap-2 bg-[#540a0a] rounded-lg  mt-12"
          >
            <img src={data.url} alt="" />
            <h2 className="text-xl text-white capitalize">{data.username}</h2>

            <div className="flex flex-wrap justify-center gap-2 mt-5">
              <Link
                to={`user-details/${data.id}`}
                className="border border-white bg-[yellow] p-2 text-black uppercase text-base"
              >
                view
              </Link>
              <Link
                to={`user-update/${data.id}`}
                className="border border-white bg-[yellow] p-2 text-black uppercase text-base"
              >
                update
              </Link>
              <button
                onClick={() => RemoveUser(data.id)}
                className="border border-white bg-[yellow] p-2 text-black uppercase text-base"
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetUser;
