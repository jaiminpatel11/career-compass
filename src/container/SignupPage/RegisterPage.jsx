import React, { useEffect, useState } from "react";
import FormButton from "../../components/FormButton";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const RegisterPage = () => {
  const [primaryColor, setPrimaryColor] = useState("");
  const [primaryFontColor, setPrimaryFontColor] = useState("");
  const [secondaryFontColor, setSecondaryFontColor] = useState("");
  const [cardColor, setcardColor] = useState("");

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

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div
            className="sidebar"
            style={{ background: primaryColor, height: "100vh" }}
          >
            <div className="logo">
              <img
                src="./assets/img/career_compass_logo.png"
                alt="career compass logo"
                className="img-fluid"
              />
            </div>
            <div className="logo">
              <img
                src="./assets/img/home_page_icon.png"
                alt="home page icon"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="col-md-8 ">
          <div className="login-container text-center mt-5">
            <h1>Create Account</h1>
          </div>
          <div className="container mt-5 ">
            <form>
              <div className="row">
                <div className="col-md-6 mt-5">
                  <div class="mb-3 mt-5 text-center">
                    <TextField
                      type="email"
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      name="email"
                    />
                  </div>
                  <div class="mb-3 text-center">
                    <TextField
                      type="password"
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      name="password"
                    />
                  </div>
                </div>
                <div className="col-md-6 mt-5">
                  <div class="mb-3 mt-5 text-center">
                    <TextField
                      type="email"
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      name="email"
                    />
                  </div>
                  <div class="mb-3 text-center">
                    <TextField
                      type="password"
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      name="password"
                    />
                  </div>
                </div>
              </div>
              <FormControl fullWidth>
                <InputLabel id="role">Age</InputLabel>
                <Select
                  labelId="role"
                  id="demo-role-select"
                  //   value={}
                  label="Role"
                  //   onChange={handleChange}
                >
                  <MenuItem value={"candidate"}>Job Seeker</MenuItem>
                  <MenuItem value={"employer"}>Employer</MenuItem>
                </Select>
              </FormControl>

              <div className="flex flex-col text-center items-center mt-5">
                <FormButton type="submit" className="justify-center ">
                  Create Account
                </FormButton>
                <p className="self-center text-center mt-2">Or</p>
                <FormButton
                  type="button"
                  className="justify-center items-center "
                >
                  Sign in
                </FormButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
