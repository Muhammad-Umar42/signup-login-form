import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const handelRemove = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div className="text-4xl">
      <span className="text-white font-semibold">Welcome</span> Home Page
      <button onClick={handelRemove} className="bg-red-400 p-3">
        Logout
      </button>
    </div>
  );
};

export default Home;
