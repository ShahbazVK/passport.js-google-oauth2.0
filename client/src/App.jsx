import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const loginWithGoogle = async () => {
    window.location.href = "http://localhost:3000/auth/google";
    // const resp = await axios.post("http://localhost:3000/api/auth/register");
    // console.log(resp);
  };
  return <button onClick={loginWithGoogle}>Login with Google</button>;
};

export default App;
