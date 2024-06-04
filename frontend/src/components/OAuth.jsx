import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/user/userSlice";

const OAuth = () => {
  const dispatch = useDispatch();
  const handleGoogleButton = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      // console.log(result);

      const res = await axios.post(
        "http://localhost:3000/user/google",
        {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(loginSuccess(res.data));
    } catch (error) {
      console.log("could not login with google", error);
    }
  };

  return (
    <button
      onClick={handleGoogleButton}
      type="button"
      className="text-white bg-red-700 p-3 rounded-lg uppercase hover:bg-red-800"
    >
      continue with google
    </button>
  );
};

export default OAuth;
