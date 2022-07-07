import { useState } from "react";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password (6 or more characters)"
      />
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </div>
  );
};

export { Form };
