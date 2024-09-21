import React, { useState } from "react";

const ReduxTry = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="h-screen flex justify-center items-center">
      <span className="absolute top-5 right-5"> {count} </span>
      <span className="flex gap-3 bg-black text-white py-2 px-4">
        <button
          onClick={() => setCount(count - 1)}
          className="font-bold text-2xl"
        >
          -
        </button>
        <span className="text-xl">Add/Sub</span>
        <button
          onClick={() => setCount(count + 1)}
          className="font-bold text-2xl"
        >
          +
        </button>
      </span>
    </div>
  );
};

export default ReduxTry;
