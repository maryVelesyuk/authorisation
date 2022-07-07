import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/slices/userSlice";
import { Form } from "./Form";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({ email: user.email, id: user.uid, token: user.accessToken })
        );
        navigate("/", { replace: true });
      })
      .catch(() => {
        alert("Invalid user");
      });
  };

  return <Form title="sign in" handleClick={handleLogin} />;
};

export { Login };
