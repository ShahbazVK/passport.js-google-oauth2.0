import axios from "axios";
const App = () => {
  const loginWithGoogle = async () => {
    window.location.href = "http://localhost:5000/auth/google";
  };
  const logoutWithGoogle = async () => {
    window.location.href = "http://localhost:5000/auth/logout";
  };
  const getData = async () => {
    const resp = await axios.get("http://localhost:5000/auth/login/success", {
      withCredentials: true,
    });
    console.log(resp.data);
  };
  return (
    <div>
      <button onClick={loginWithGoogle}>Login with Google</button>
      <button onClick={logoutWithGoogle}>Logout with Google</button>
      <button onClick={getData}>Get Data</button>
    </div>
  );
};

export default App;
