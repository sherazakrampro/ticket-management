import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-sky-700">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="text-4xl text-white font-bold">TMS</h1>
        </Link>
        <ul className="flex gap-5 text-white">
          <Link to="/">
            <li className="hover:border-b">Home</li>
          </Link>
          <Link to="/categories">
            <li className="hover:border-b">Categories</li>
          </Link>
          <Link to="/create-ticket">
            <li className="hover:border-b">Create Ticket</li>
          </Link>
        </ul>
        <ul className="flex gap-5 text-white">
          <Link to="/profile">
            <li className="hover:border-b">Profile</li>
          </Link>
          <Link to="/login">
            <li className="hover:border-b">Login</li>
          </Link>
          <li className="hover:border-b">Logout</li>
          <Link to="/register">
            <li className="hover:border-b">Register</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
