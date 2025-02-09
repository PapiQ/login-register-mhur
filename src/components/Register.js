import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("register email:", email, "password:", password);
  };

  return (
    <div>
      {/* <h2>Register</h2> */}
      <form onSubmit={handleRegister}>
        {/* <!-- Email input --> */}
        <div className="field">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* <!-- Username input --> */}
        <div className="field">
          <label htmlFor="username">User name</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your User name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        {/* <!--Password input--> */}
        <div className="field">
          <label htmlFor="password">Password</label>
          <div className="input-container">
            <input
              className="form-input"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {showPassword ? (
              <AiFillEye
                className="eye-icon"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            ) : (
              <AiFillEyeInvisible
                className="eye-icon"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            )}
          </div>
        </div>

        {/* <!-- Register button --> */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
