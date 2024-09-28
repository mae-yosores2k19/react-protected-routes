import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const initial = { password: "", username: "" };
  const [loginValues, setLoginValues] = useState(initial);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleInputLoginField = (e: any) => {
    const { value, name } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
  };
  const handleSubmit = async () => {
    const { username, password } = loginValues;
    if (username && password) {
      if (username === "jessa" && password === "test123") {
        localStorage.setItem("token", "authenticated");
        setIsAuthenticated(true);
        navigate("/home");
      } else {
        alert("Kindy input correct credentials");
      }
    } else {
      alert("All fields are required");
    }
  };

  return (
    <>
      <h1>Hello</h1>
      <div className="card my_login_card">
        <div className="card-body">
          <div className="mb-3">
            <span>Username</span>
            <input
              type="email"
              className="form-control"
              id="username"
              name="username"
              onChange={(e) => handleInputLoginField(e)}
            />
          </div>
          <div className="mb-3">
            <span>Password</span>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              onChange={(e) => handleInputLoginField(e)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div className="container">
          <table>
            <tr>
              <th>Name </th>
              <th>Age </th>
              <th>Sex</th>
            </tr>
            <tr>
              <td>Jessa </td>
              <td>25</td>
              <td>Female</td>
            </tr>
            <tr>
              <td>Shane </td>
              <td>25</td>
              <td>Female</td>
            </tr>
            <tr>
              <td>Nicole </td>
              <td>25</td>
              <td>Female</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};
export default Login;
