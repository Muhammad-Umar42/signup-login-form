import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import resturent from "../components/data";

const Home = () => {
  let navigate = useNavigate();
  const handelRemove = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  ///////////////FILTERDATA//////////
  const [userInput, setUserInput] = useState("");

  const result = resturent.filter((el) => {
    return el.catagry?.includes(userInput);
  });

  if (result == "") {
    confirm("tito patiya na laaa");
  }

  return (
    <>
      <div className=" m-3 flex justify-around">
        <button
          onClick={handelRemove}
          className="bg-red-500 rounded-lg font-bold p-3 text-4xl"
        >
          Logout
        </button>
        <div>
          <input
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            value={userInput}
            className="p-3 text-2xl"
            type="text"
            placeholder="search Here"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
        {result.map((e, ind) => {
          return (
            <div
              key={ind}
              className="bg-black border-4 border-solid border-yellow-500 text-slate-200  flex p-8 w-full max-w-80"
            >
              <img className="w-32" src={e.image} alt="pizza" />
              <div className="m-auto p-2">
                <p className="font-semibold ">{e.name}</p>
                <h2 className="text-yellow-500 font-bold">{e.price}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
