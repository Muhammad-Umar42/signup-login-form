import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const defaultValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginData, setLoginData] = useState(defaultValues);
  const navigate = useNavigate();

  const storeData = localStorage.getItem("data");
  let userSignupData = storeData ? JSON.parse(storeData) : [];

  const handelData = (e) => {
    let { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handelCheckUser = () => {
    const findUser = userSignupData.find((el) => {
      if (el.email === loginData.email && el.password === loginData.password) {
        return true;
      }
    });
    if (findUser) {
      navigate("/home");
    } else alert("user invalid");
  };
  return (
    <div className="bg-gradient-to-t from-sky-400 to-sky-600 p-8 rounded-lg w-full max-w-xl mx-auto mt-40">
      <h1 className="text-3xl text-white font-bold text-center mb-5">Log in</h1>
      <div>
        <label className="block font-bold text-xl my-2">Email</label>
        <input
          onChange={handelData}
          value={loginData.email}
          name="email"
          className="rounded-md p-2 w-full"
          placeholder="Enter Email"
          type="email"
        />
      </div>
      <div>
        <label className="block font-bold text-xl my-2">PassWord</label>
        <input
          onChange={handelData}
          value={loginData.password}
          name="password"
          className="rounded-md p-2 w-full"
          placeholder="Enter password"
          type="password"
        />
      </div>
      <button
        onClick={handelCheckUser}
        className="bg-slate-100 text-xl font-bold  p-2 mt-10 rounded-md"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
