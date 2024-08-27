import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const googlebaba = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, data.email, data.password);
    console.log("hello");
  };

  return (
    <div>
      <form>
        <label>email</label>
        <input
          className="border border-black"
          onChange={handleChange}
          type="text"
          placeholder="email"
          value={data.email}
          id="email"
          name="email"
        />
        <br />
        <br />

        <label>password</label>
        <input
          className="border border-black"
          onChange={handleChange}
          type="text"
          placeholder="password"
          id="password"
          value={data.password}
          name="password"
        />
        <br />
        <br />
      </form>
      <button onClick={googlebaba} className="bg-black text-white p-2">
        Login
      </button>
    </div>
  );
}

export default Login;
