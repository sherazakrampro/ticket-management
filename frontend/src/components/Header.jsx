import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/user/userSlice";
import axios from "axios";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3000/user/logout", {
        withCredentials: true,
      });
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-sky-700 shadow-md">
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
          {currentUser && (
            <Link to="/create-ticket">
              <li className="hover:border-b">Create Ticket</li>
            </Link>
          )}
        </ul>
        <ul className="flex gap-5 text-white">
          {currentUser ? (
            <>
              <Link>
                <li onClick={handleLogout} className="hover:border-b">
                  Logout
                </li>
              </Link>
              <li>{currentUser.user.name}</li>
            </>
          ) : (
            <>
              <Link to="/login">
                <li className="hover:border-b">Login</li>
              </Link>
              <Link to="/register">
                <li className="hover:border-b">Register</li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
