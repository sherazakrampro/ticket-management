import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/user/register",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(res.data);
      setLoading(false);
      setError(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      if (error.response) {
        if (error.response.status === 400) {
          setError("All fields are required");
        } else if (error.response.status === 409) {
          setError("User already exists");
        } else {
          setError("An error occurred. Please try again.");
        }
      } else if (error.request) {
        setError("No response from server. Please check your network.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-4xl text-center font-bold my-6">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="bg-sky-200 p-3 rounded-lg"
          type="text"
          placeholder="Enter your name"
          id="name"
          required
          onChange={handleChange}
        />
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
          {loading ? "Loading..." : "Register"}
        </button>
        <OAuth />
      </form>

      <div className="flex gap-2 mt-4">
        <p>Already have an account?</p>
        <Link to="/login">
          <span className="text-blue-500 hover:underline">Login</span>
        </Link>
      </div>

      <p className="text-red-500 mt-4">{error && error}</p>
    </div>
  );
};

export default Register;
