import React, { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import ReadData from "./ReadData";

const WriteData = () => {
    const [sendData, setSendData] = useState("");
  let uuid = uuidv4();

  function writeUserData(name) {
    const db = getDatabase();
    set(ref(db, "users/" + uuid), {
      massage: name,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    writeUserData(sendData);
    setSendData("");
  };

  return (
    <div className="m-10">
      <form onSubmit={handleSubmit}>
        <input
          className="border border-black px-3 py-2 outline-none"
          type="text"
          value={sendData}
          name="name"
          placeholder="type message"
          onChange={(e) => setSendData(e.target.value)}
        />
        <button className="border px-5 py-2 bg-black text-white">send</button>
      </form>

      <div>
        <ReadData userId={uuid} />
      </div>
    </div>
  );
};

export default WriteData;
