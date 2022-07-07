import { Link } from "react-router-dom";
import { useAuth } from "hooks/use-auth";
import { removeUser } from "store/slices/userSlice";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  return isAuth ? (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    <div>
      <p>
        Do you have an account? <Link to="/login">Sign in</Link>
      </p>
      <p>
        or <Link to="/register">create an account</Link>
      </p>
    </div>
  );
};

export default HomePage;
