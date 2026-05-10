import "./Registration.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [output, setOutput] = useState(null);

  const [isOtherCity, setIsOtherCity] = useState(false);
  const [otherCity, setOtherCity] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    age: "",
    gender: "",
    city: "",
    about: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { name, email, password, mobile, age, gender, city, about } = form;

    let finalCity = city;
    if (city === "Other") {
      finalCity = otherCity.trim();
      if (!finalCity) return setOutput("⚠ Please specify your city.");
    }

    if (!name || !email || !password || !mobile || !age || !gender || !finalCity)
      return setOutput("⚠ Please fill all required fields.");

    if (!/^[0-9]{10}$/.test(mobile))
      return setOutput("⚠ Mobile number must be exactly 10 digits.");

    if (password.length < 5 || password.length > 10)
      return setOutput("⚠ Password must be 5–10 characters.");

    const submissionData = { ...form, city: finalCity };

    axios
      .post("https://happysoul-backend.onrender.com/user/register", submissionData)
      .then(() => {
        setOutput("✔ Registration Successful! Please check your email for verification.");
        setTimeout(() => navigate("/login"), 3500);
      })
      .catch(() => setOutput("❌ Registration Failed. Try Again."));
  };
  return (
    <div className="register-container">
      <div className="form-card register-form-card bg-white p-4 shadow rounded">
        {output && <div className="alert alert-info">{output}</div>}

            <h2 className="register-heading">Registration</h2>

            <form>
              
              <div className="row">
                <div className="col-12 mb-3">
                  <label>Name</label>
                  <input
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 mb-3">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 mb-3">
                  <label>Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 mb-3">
                  <label>Mobile</label>
                  <input
                    className="form-control"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 mb-3">
                  <label>Age</label>
                  <input
                    className="form-control"
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 mb-3">
                  <label>Gender</label>
                  <select
                    className="form-control"
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="col-12 mb-3">
                  <label>City</label>
                  <select
                    className="form-control"
                    name="city"
                    value={form.city}
                    onChange={(e) => {
                      handleChange(e);
                      setIsOtherCity(e.target.value === "Other");
                    }}
                  >
                    <option value="">Select City</option>
                    <option>Indore</option>
                    <option>Bhopal</option>
                    <option>Ujjain</option>
                    <option>Dewas</option>
                    <option>Other</option>
                  </select>
                  {isOtherCity && (
                    <input
                      type="text"
                      className="form-control mt-2"
                      placeholder="Type your city"
                      value={otherCity}
                      onChange={(e) => setOtherCity(e.target.value)}
                    />
                  )}
                </div>

                <div className="col-12 mb-3">
                  <label>About You</label>
                  <textarea
                    className="form-control"
                    name="about"
                    placeholder="Write briefly about your mental health goals..."
                    value={form.about}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <button type="button" className="btn btn-brownish-red w-100" onClick={handleSubmit}>
                Register
              </button>

              <div className="text-center mt-3">
                Already Registered? <Link to="/login">Login here</Link>
              </div>
            </form>
          </div>
    </div>
  );
}

export default Register;
