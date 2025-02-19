import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './registerPage.css'; // Import the CSS file

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    const { name, email, password } = form;
    try {
      await axios.post('http://localhost:4000/api/register', { name, email, password });
      navigate('/')
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Create an Account</h2>
        <form>
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <button type="button" onClick={handleRegister} className="register-button">
            Register
          </button>
        </form>
        <p>
          Already have an account? <a href="/">Login here</a>
        </p>
      </div>
    </div>
  );
}
