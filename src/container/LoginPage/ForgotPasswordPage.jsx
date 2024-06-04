import React, { useEffect, useState } from "react";
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
    <div className="container-fluid" style={{ background: primaryColor }}>
      <div className="row d-md-block d-none " style={{ height: "40vh" }}>
        <div className="topbar" style={{ position: "relative" }}>
          <div className="col-md-4">
            <div className="logo">
              <img
                src="./assets/img/career_compass_logo.png"
                alt="career compass logo"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="fluid-image">
              <img
                src="./assets/img/secure_files.png"
                alt="home page icon"
                className="img-fluid"
                style={{ position: "absolute", top: "0%", right: "0%", width: '400px' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row forgot-pass-form " style={{background: primaryFontColor, borderRadius:'40px 40px 0 0'}}>
      <div className=" d-sm-block d-md-none" style={{background:primaryColor}}>
                <div className="logo">
                  <img
                    src="./assets/img/career_compass_logo.png"
                    alt="career compass logo"
                    className=""
                    style={{height: '70px', width:"auto"}}
                  />
                </div>
              </div>
        <div className="heading text-center mt-5">
          <h1>Forgot your Password?</h1>
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-6 mt-5">
          <form>
            <div class="mb-3 text-center">
              <TextField
                type="email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                style={{ width: "250px" }}
              />
            </div>
            <div class="mb-3 text-center">
              <TextField
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                name="password"
                style={{ width: "250px" }}
              />
            </div>
            <div class="mb-3 text-center">
              <TextField
                type="password"
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                name="confirmpassword"
                style={{ width: "250px" }}
              />
            </div>
            <div className="flex flex-col mb-5 text-center items-center mt-5">
              <button
                type="submit"
                style={{
                  backgroundColor: primaryColor,
                  color: primaryFontColor,
                  width: "250px",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "1px solid",
                }}
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row d-sm-block d-md-none" style={{ height: "50vh" }}>
        <div className="topbar" style={{ position: "relative" }}>
          <div className="col-md-12">
            <div className="fluid-image">
              <img
                src="./assets/img/secure_files.png"
                alt="home page icon"
                className="img-fluid"
                style={{ position: "absolute", top: "25%", right: "0%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
