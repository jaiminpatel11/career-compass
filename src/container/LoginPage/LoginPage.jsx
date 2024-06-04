import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { border } from "@mui/system";

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
        <div
          className="col-md-8 "
          style={{
            background: primaryFontColor,
            borderRadius: "0 40px 40px 0",
          }}
        >
          <div className="heading text-center mt-5">
            <h1 className="pt-3">Sign In</h1>
          </div>
          <div className="container mt-4 ">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6 mt-4">
                <form>
                  <div class="mb-3 mt-5 text-center">
                    <TextField
                      type="email"
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      name="email"
                      style={{width:'250px'}}
                    />
                  </div>
                  <div class="mb-3 text-center">
                    <TextField
                      type="password"
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      name="password"
                      style={{width:'250px'}}
                    />
                  </div>
                  <div className="flex text-center mb-3" >
                    <a
                      href="/forgot_password"
                      className="text-sm"
                      style={{ color: primaryColor , marginLeft:'90px' }}
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="flex flex-col text-center items-center pt-5">
                    <button type="submit" style={{backgroundColor:primaryColor, color: primaryFontColor, width:'250px', padding:'10px', borderRadius: '10px', border: '1px solid'  }}>Sign In</button>
                    <p className="self-center text-center mt-2">Or</p>
                    <button type="submit" style={{backgroundColor:primaryFontColor, color:primaryColor , width:'250px', padding:'10px', borderRadius: '10px', border: '1px solid'  }}>Sign Up</button>
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
            <div className="logo">
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
                className="img-fluid"
                style={{ position: "absolute", top: "25%", right: "50%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
