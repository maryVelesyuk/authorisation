import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/userSlice";
import { Form } from "./Form";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({ email: user.email, id: user.uid, token: user.accessToken })
        );
        navigate("/", { replace: true });
      })
      .catch(alert("Invalid email or password"));
  };

  return <Form title="register" handleClick={handleRegister} />;
};

export { SignUp };
