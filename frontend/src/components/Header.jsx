import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-sky-700">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="text-4xl text-white font-bold">TMS</h1>
        </Link>
        <ul className="flex gap-4 text-white">
          <Link to="/">
            <li className="hover:underline">Home</li>
          </Link>
          <Link to="/categories">
            <li className="hover:underline">Categories</li>
          </Link>
          <Link to="/create-ticket">
            <li className="hover:underline">Create Ticket</li>
          </Link>
        </ul>
        <ul className="flex gap-4 text-white">
          <Link to="/profile">
            <li className="hover:underline">Profile</li>
          </Link>
          <Link to="/login">
            <li className="hover:underline">Login</li>
          </Link>
          <li className="hover:underline">Logout</li>
          <Link to="/register">
            <li className="hover:underline">Register</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
