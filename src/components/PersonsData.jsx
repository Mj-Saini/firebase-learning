import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const PersonsData = () => {
  const [personData, setPersonData] = useState([]);

  const handlePersonData = async () => {
    const querySnapshot = await getDocs(collection(db, "gazals"));
    let peopleData = [];
    querySnapshot.forEach((doc) => {
      peopleData.push({ id: doc.id, data: doc.data() });
    });
    setPersonData(peopleData);
  };
  useEffect(() => {
    handlePersonData();
  }, []);

  const handleRemovePerson = async (id) => {
    console.log(id);
    await deleteDoc(doc(db, "gazals", id));
    let data = personData.filter((person) => person.id !== id);
    // setPersonData((prevData) => prevData.filter((items) => items.id !== id));
    setPersonData(data);
    notify();
  };
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <div className="flex flex-wrap justify-between">
        {personData.map((person, index) => (
          <div key={index} className="w-1/4 px-2 mt-3">
            <div className="p-4 bg-slate-900 rounded-lg ">
              <Link to={`/person-details/${person.id}`}>
                <div className="flex justify-center items-center w-full h-[100px] bg-[blue] rounded-md">
                  <h2 className="font-bold text-[yellow] uppercase">
                    click Me
                  </h2>
                </div>
              </Link>
              <h2 className="text-white font-bold text-center uppercase mt-3">
                {person.data.name}
              </h2>
              <button
                onClick={() => handleRemovePerson(person.id)}
                className="text-white border border-white px-6 py-2 mt-5 w-full rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default PersonsData;
