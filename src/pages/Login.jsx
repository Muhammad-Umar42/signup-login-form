import React from "react";

const Login = () => {
  return (
    <div className="bg-gradient-to-t from-sky-400 to-sky-600 p-8 rounded-lg w-full max-w-xl mx-auto mt-40">
      <h1 className="text-3xl text-white font-bold text-center mb-5">Log in</h1>
      <div>
        <label className="block font-bold text-xl my-2">Email</label>
        <input
          className="rounded-md p-2 w-full"
          placeholder="Enter Email"
          type="email"
        />
      </div>
      <div>
        <label className="block font-bold text-xl my-2">PassWord</label>
        <input
          className="rounded-md p-2 w-full"
          placeholder="Enter password"
          type="password"
        />
      </div>
      <button className="bg-slate-100 text-xl font-bold  p-2 mt-10 rounded-md">
        Login
      </button>
    </div>
  );
};

export default Login;
