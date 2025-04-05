import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate, Link} from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    alert("Signup successful! 🎉");
    navigate("/");
  };

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <input
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
        <p className="note">We'll save your credentials locally 🙂</p>
        <p className="note">
            Already have an account? <Link to="/login" className="link">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
