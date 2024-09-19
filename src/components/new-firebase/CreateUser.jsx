import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const CreateUser = ({ setReadUser }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [addImg, setAddImg] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    address: "",
    mobile: "",
  });

  const fields = [
    { id: "username", label: "Username", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "address", label: "Address", type: "text" },
    { id: "mobile", label: "Mobile", type: "text" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUser;

    if (id) {
      await setDoc(doc(db, "info", id), formData);
      newUser = { id, ...formData };
    } else {
      // const docRef = await addDoc(collection(db, "info"), formData);
      const storage = getStorage();
      const storageRef = ref(storage, `img/${addImg.name}`);
      await uploadBytes(storageRef, addImg);
      const downloadURL = await getDownloadURL(storageRef);

      // Add the document to Firestore with the download URL
      const docRef = await addDoc(collection(db, "info"), {
        formData,
        url: downloadURL,
      });
      newUser = { id: docRef.id, ...formData, url: downloadURL };
    }

    setFormData({
      username: "",
      email: "",
      address: "",
      mobile: "",
    });

    setReadUser((prevUsers) => [...prevUsers, newUser]);

    navigate("/");
  };

  // update user

  const getUserDetails = async () => {
    const docRef = doc(db, "info", id);
    const docSpan = await getDoc(docRef);
    setFormData(docSpan.data());
  };
  useEffect(() => {
    if (id) {
      getUserDetails();
    }
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-bold uppercase text-4xl text-center">Create User</h2>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-5 flex-col"
      >
        {fields.map((field) => (
          <div key={field.id} className="flex gap-5">
            <label className="w-32 text-2xl" htmlFor={field.id}>
              {field.label}:
            </label>
            <input
              className="border border-black px-4 py-2 rounded-md"
              type={field.type}
              id={field.id}
              name={field.id}
              value={formData[field.id]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <label
          htmlFor="fileInput"
          className="px-6 py-2 border border-black text-white bg-[green]"
        >
          Choose Files
          <input
            onChange={(e) => setAddImg(e.target.files[0])}
            type="file"
            name="fileInput"
            id="fileInput"
            hidden
          />
        </label>
        {/* <img
          className="w-[300px]"
          src={addImg && URL.createObjectURL(addImg)}
          alt="img"
        /> */}
        <button
          className="border border-black bg-[yellow] text-black px-6 py-3 text-2xl uppercase"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
