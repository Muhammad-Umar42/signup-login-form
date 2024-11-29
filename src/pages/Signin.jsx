import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const defaultValues = {
  name: "",
  email: "",
  password: "",
};

const Signin = () => {
  const [userData, setUserData] = useState(defaultValues);
  const navigate = useNavigate();

  const handelChange = (e) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const clearValues = () => {
    if (userData.email != "") {
      navigate("/login");
    } else alert("unvalid Form");
    const storeData = localStorage.getItem("data");
    let preData = storeData ? JSON.parse(storeData) : [];
    localStorage.setItem("data", JSON.stringify([...preData, userData]));
    setUserData(defaultValues);
  };

  return (
    <div className="bg-gradient-to-t from-sky-400 to-sky-600 p-8 rounded-lg w-full max-w-xl mx-auto mt-40">
      <h1 className="text-3xl text-white font-bold text-center mb-5">
        Sign up
      </h1>
      <div>
        <label className="block font-bold text-xl mb-2">Name</label>
        <input
          name="name"
          onChange={handelChange}
          value={userData.name}
          className="rounded-md p-2 w-full"
          placeholder="Enter Name"
          type="text"
        />
      </div>
      <div>
        <label className="block font-bold text-xl my-2">Email</label>
        <input
          name="email"
          onChange={handelChange}
          value={userData.email}
          className="rounded-md p-2 w-full"
          placeholder="Enter Email"
          type="text"
        />
      </div>
      <div>
        <label className="block font-bold text-xl my-2">PassWord</label>
        <input
          name="password"
          onChange={handelChange}
          value={userData.password}
          className="rounded-md p-2 w-full"
          placeholder="Enter password"
          type="password"
        />
      </div>
      <button
        onClick={clearValues}
        className="bg-slate-100 text-xl font-bold mb-6 p-2 mt-10 rounded-md"
      >
        Signup
      </button>
      <p className="text-right font-semibold">
        if you already signup
        <Link className="font-bold text-blue-100 px-1" to="/login">
          login
        </Link>
        here
      </p>
    </div>
  );
};

export default Signin;
