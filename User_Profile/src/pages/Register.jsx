import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register({ setUsers }) {
  const [form, setForm] = useState({ name: "", email: "", role: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUsers(prev => [...prev, form]);
    navigate("/users");
  }

  return (
    <div id="register">
      <h1>PeopleBoard</h1>
      <h3>Register User</h3>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <select name="role" value={form.role} onChange={handleChange} required>
          <option value="">-- Select Role --</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Guest">Guest</option>
        </select>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default Register;