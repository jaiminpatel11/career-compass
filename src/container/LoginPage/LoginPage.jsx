import React, { useEffect, useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "../LoginPage/login.css";

const LoginPage = () => {
  // color theme
  const [primaryColor, setPrimaryColor] = useState("");
  const [primaryFontColor, setPrimaryFontColor] = useState("");
  const [secondaryFontColor, setSecondaryFontColor] = useState("");
  const [cardColor, setcardColor] = useState("");

  // apply color theme tot elements
  useEffect(() => {
    // Fetch the CSS variables after component mounts
    const rootStyles = getComputedStyle(document.documentElement);
    setPrimaryColor(rootStyles.getPropertyValue("--primary-color").trim());
    setPrimaryFontColor(
      rootStyles.getPropertyValue("--primary-font-color").trim()
    );
    setSecondaryFontColor(
      rootStyles.getPropertyValue("--secondary-font-color").trim()
    );
    setcardColor(rootStyles.getPropertyValue("--card-color").trim());
  }, []);

  // variable to go to handle click and naviagte to other page
  const navigate = useNavigate();
  const handleSignUpClick = () => {
    navigate("/register");
  };

  // variables used in form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // password Visibility toogle
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // function to remove error from text input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    } else if (name === "password") {
      setPassword(value);
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  };

  // function to validate form and call api
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length === 0) {
      // Perform the sign-in logic here
      console.log("Form submitted:", { email, password });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container-fluid" style={{ background: primaryColor }}>
      <div className="row">
        <div
          className=" d-sm-block d-md-none"
          style={{ background: primaryColor }}
        >
          <div className="logo">
            <img
              src="./assets/img/career_compass_logo.png"
              alt="career compass logo"
              className=""
              style={{ height: "70px", width: "auto" }}
            />
          </div>
        </div>
        <div
          className="col-md-8 login-form-col "
          style={{
            background: primaryFontColor,
          }}
        >
          <div className="heading text-center mt-5">
            <h1 className="pt-3">Sign In</h1>
          </div>
          <div className="container mt-0 mt-md-4 ">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6 mt-0 mt-md-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 mt-5 text-center">
                    <TextField
                      type="email"
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      name="email"
                      className="login-field"
                      value={email}
                      onChange={handleInputChange}
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                  </div>
                  <div className="mb-3 text-center">
                    <TextField
                      type={showPassword ? "text" : "password"}
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      name="password"
                      className="login-field"
                      value={password}
                      onChange={handleInputChange}
                      error={!!errors.password}
                      helperText={errors.password}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div className="flex text-center mb-3">
                    <a
                      href="/forgot_password"
                      className="text-sm login-forgot-pass"
                      style={{ color: primaryColor }}
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="flex flex-col mb-5 text-center items-center login-btns">
                    <button
                      type="submit"
                      style={{
                        backgroundColor: primaryColor,
                        color: primaryFontColor,
                        padding: "12px",
                        borderRadius: "10px",
                        border: "1px solid",
                      }}
                    >
                      Sign In
                    </button>
                    <p className="self-center text-center mt-2">Or</p>
                    <button
                      type="button"
                      onClick={handleSignUpClick}
                      style={{
                        backgroundColor: primaryFontColor,
                        color: primaryColor,
                        padding: "12px",
                        borderRadius: "10px",
                        border: "1px solid",
                      }}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="sidebar"
            style={{
              background: primaryColor,
              height: "100vh",
              position: "relative",
            }}
          >
            <div className="logo d-none d-md-block">
              <img
                src="./assets/img/career_compass_logo.png"
                alt="career compass logo"
                className="img-fluid"
              />
            </div>
            <div className="fluid-image">
              <img
                src="./assets/img/chart_girl.png"
                alt="home page icon"
                className="img-fluid position-absolute top-50 start-0 translate-middle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
