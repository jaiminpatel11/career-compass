import React, { useEffect, useState } from "react";
import InputGroup from "../../components/InputGroup";
import FormButton from "../../components/FormButton";
import { TextField } from "@mui/material";

const ForgotPasswordPage = () => {
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
      <div className="row" style={{ background: primaryColor }}>
        <div className="col-md-6">
          <div className="logo">
            <img
              src="./assets/img/career_compass_logo.png"
              alt="career compass logo"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="logo">
            <img
              src="./assets/img/secure_files.png"
              alt="home page icon"
              style={{ width: "200px" }}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 ">
          <div className="login-container text-center mt-5">
            <h1>Forgot your Password?</h1>
          </div>
          <div className="container mt-5 ">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6 mt-5">
                <form>
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
                  <div class="mb-3 text-center">
                    <TextField
                      type="password"
                      id="outlined-basic"
                      label="Confirm Password"
                      variant="outlined"
                      name="confirmpassword"
                    />
                  </div>
                  <div className="flex flex-col text-center items-center">
                    <FormButton type="submit" className="justify-center ">
                      Reset Password
                    </FormButton>
                  </div>
                </form>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
