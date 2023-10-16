import { useState } from "react";
import "../../assets/style/Dashboard/Login.css";
import Button from "../../components/Button";
import useFormValidation from "../../utils/customHooks/useFormValidation";
import { validationRules } from "../../assets/Data/validationRules";
import adminCredential from "../../assets/Data/adminCredential.json";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState({
    email: "",
    adminPassword: "",
  });
  const { errors, handleChange, validateForm, setErrors } = useFormValidation(
    adminData,
    setAdminData,
    validationRules
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    const isauthenticated = adminCredential.some(
      (ele) =>
        ele.email === adminData.email &&
        ele.password === adminData.adminPassword
    );
    if (isFormValid) {
      isauthenticated
        ? navigate("/dashboard/subscriptionInfo")
        : setErrors({ notAuth: "password or email are not correct" });
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="card-header">
        <h3>Log In</h3>
      </div>
      <div className="card-body">
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={adminData.email}
        />
        <input
          type="password"
          name="adminPassword"
          placeholder="Password"
          onChange={handleChange}
          value={adminData.adminPassword}
        />
      </div>
      <div className="card-footer">
        <Button>Log In</Button>
        {errors.email && (
          <div className="alert">
            <span>{errors.email}</span>
          </div>
        )}
        {errors.adminPassword && (
          <div className="alert">
            <span>{errors.adminPassword}</span>
          </div>
        )}
        {errors.notAuth && (
          <div className="alert">
            <span>{errors.notAuth}</span>
          </div>
        )}
      </div>
    </form>
  );
}

export default Login;
