import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;
  let navigate = useNavigate();
  useEffect(() => {
    const stData = localStorage.getItem("user");
    let login = stData ? JSON.parse(stData) : null;

    // let login = JSON.parse(localStorage.getItem("user"));
    if (!login) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
