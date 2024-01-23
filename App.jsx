import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    let str = "qertyuiopasdfghjklzxcvbnmQERTYUIOPASDFGHJKLZXCVBNM";
    numAllowed ? (str += "1234567890") : "";
    charAllowed ? (str += "./;'[]!@#$%^&*()_+") : "";
    let tempPass = "";
    for (let i = 0; i < length; i++) {
      let randIndex = Math.floor(Math.random() * str.length);
      tempPass += str.charAt(randIndex);
    }
    setPassword(tempPass);
  }, [length, numAllowed, charAllowed]);
  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
  };
  return (
    <>
      <p className="text-3xl mb-7">Generate Password</p>
      <div className=" w-25">
        <div className="input-copy mb-7">
          <input
            className="p-2 bg-gray-600 mr-2 rounded w-[350px] outline-none"
            type="text"
            value={password}
            readOnly
            id="passField"
          />
          <button className="px-4 py-2 bg-gray-500" onClick={copyPassword}>
            Copy
          </button>
        </div>
        <div className="options flex justify-between ">
          <div className="range flex flex-col w-[120px] items-start">
            <input
              type="range"
              min={8}
              max={20}
              id="range-input"
              className="w-full"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="range-input">Length: {length} </label>
          </div>

          <div className="number">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numAllowed"
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label htmlFor="numAllowed" className="ml-2">
              Numbers
            </label>
          </div>
          <div className="character">
            <input
              type="checkbox"
              id="charAllowed"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charAllowed" className="ml-2">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
