import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

const Login = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const [errorText, setErrorText] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginStart());
      const res = await axios.post(
        "http://localhost:3000/user/login",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(res.data);
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setErrorText("Invalid password");
        } else if (error.response.status === 404) {
          setErrorText("User not found");
        } else if (error.response.status === 400) {
          setErrorText("All fields are required");
        } else {
          setErrorText("An error occurred. Please try again.");
        }
      } else if (error.request) {
        setErrorText("No response from server. Please check your network.");
      } else {
        setErrorText("An error occurred. Please try again.");
      }
      dispatch(loginFailure(error));
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-4xl text-center font-bold my-6">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="bg-sky-200 p-3 rounded-lg"
          type="email"
          placeholder="Enter your email"
          id="email"
          required
          onChange={handleChange}
        />
        <input
          className="bg-sky-200 p-3 rounded-lg"
          type="password"
          placeholder="Enter password"
          id="password"
          required
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-sky-700 text-white p-3 rounded-lg hover:bg-sky-800 uppercase disabled:opacity-80"
        >
          {loading ? "Loading..." : "Login"}
        </button>
        <OAuth />
      </form>

      <div className="flex gap-2 mt-4">
        <p>Do not have an account?</p>
        <Link to="/register">
          <span className="text-blue-500 hover:underline">Register</span>
        </Link>
      </div>

      <p className="text-red-500 mt-4">{error && <span>{errorText}</span>}</p>
    </div>
  );
};

export default Login;
