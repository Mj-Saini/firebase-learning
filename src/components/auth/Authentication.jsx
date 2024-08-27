import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignIn";

const Authentication = () => {
  const [changeForm, setChangeform] = useState(false);
  return (
    <div className=" h-screen flex items-center justify-center w-full">
      <div className="flex flex-col justify-center items-center">
        {changeForm ? <Login /> : <SignUp />}
        <button
          className="flex border border-black px-6 py-2 text-black mt-5"
          onClick={() => setChangeform(!changeForm)}
        >
          {changeForm ? "signUp" : "login"}
        </button>
      </div>
    </div>
  );
};

export default Authentication;
