import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-4xl text-center font-bold my-6">Register</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          className="bg-sky-200 p-3 rounded-lg"
          type="text"
          placeholder="Enter your name"
          id="name"
          required
        />
        <input
          className="bg-sky-200 p-3 rounded-lg"
          type="email"
          placeholder="Enter your email"
          id="email"
          required
        />
        <input
          className="bg-sky-200 p-3 rounded-lg"
          type="password"
          placeholder="Enter password"
          id="password"
          required
        />
        <button className="bg-sky-700 text-white p-3 rounded-lg hover:bg-sky-800 uppercase disabled:opacity-80">
          Register
        </button>
      </form>
      <div className="flex gap-2 mt-4">
        <p>Already have an account?</p>
        <Link to="/login">
          <span className="text-blue-500 hover:underline">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
