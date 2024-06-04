import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import '../LoginPage/login.css'

const LoginPage = () => {
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
      <div className="row">
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
                <form>
                  <div class="mb-3 mt-5 text-center">
                    <TextField
                      type="email"
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      name="email"
                      className="login-field"
                    />
                  </div>
                  <div class="mb-3 text-center">
                    <TextField
                      type="password"
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      name="password"
                      className="login-field"
                    />
                  </div>
                  <div className="flex text-center mb-3" >
                    <a
                      href="/forgot_password"
                      className="text-sm login-forgot-pass"
                      style={{ color: primaryColor  }}
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="flex flex-col mb-5 text-center items-center login-btns">
                    <button type="submit" style={{backgroundColor:primaryColor, color: primaryFontColor, padding:'12px', borderRadius: '10px', border: '1px solid'  }}>Sign In</button>
                    <p className="self-center text-center mt-2">Or</p>
                    <button type="submit" style={{backgroundColor:primaryFontColor, color:primaryColor , padding:'12px', borderRadius: '10px', border: '1px solid'  }}>Sign Up</button>
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
