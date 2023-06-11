import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import log_img from "../assests/images/login_img.png";

const Login = () => {
  const navigate = useNavigate();
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = () => {
    navigate("/JobVacancy");
  };

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res));
  };

  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

 

  return (
    <div className="Main_content ">
      <div className="auth-form-container">
        <img src={log_img} className="img-top " width="80px" alt="photo" />
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username" className="log">
            UserName
          </label>
          <input
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
            type="text"
            placeholder="Enter the Username"
            id="username"
            name="username"
            className="Login_input "
            required
          />
          <label htmlFor="password" className="log">
            password
          </label>
          <input
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            placeholder="Enter the Password"
            type="password"
            id="password"
            name="password"
            className="Login_input"
            required
          />
          <button type="submit" className="btn_login ">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
