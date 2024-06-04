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
    <div className="container-fluid" style={{ background: primaryColor }}>
      <div className="row">
        <div className="col-md-4  order-sm-1 order-2 ">
          <div
            className="sidebar"
            style={{ background: primaryColor, height: "100vh", position:'relative' }}
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
                src="./assets/img/home_page_icon.png"
                alt="home page icon"
                className="img-fluid"
                style={{ position: "absolute", top: "25%", left: "50%" }}
              />
            </div>
          </div>
        </div>
        <div
          className="col-md-8 order-sm-2 order-1 "
          style={{
            background: primaryFontColor,
            borderRadius: "40px 0 0 40px",
          }}
        >
          <div className="container mt-5 ">
            <div className="row mt-5">
              <div className="heading text-center">
                <h1>Create Account</h1>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-8 pt-5 mt-5">
                <form>
                  <div
                    className="registrationDetails"
                    style={{ display: "flex", justifyContent: "space-evenly", flexWrap:"wrap" }}
                  >
                    <div class="mb-3 text-center">
                      <TextField
                        type="text"
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        name="email"
                        style={{ width: "250px" }}
                      />
                    </div>
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
                  </div>
                  <div
                    className="registrationDetails"
                    style={{ display: "flex", justifyContent: "space-evenly", flexWrap:"wrap" }}
                  >
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
                        type="Confirmpassword"
                        id="outlined-basic"
                        label="Confirm Password"
                        variant="outlined"
                        name="Confirmpassword"
                        style={{ width: "250px" }}
                      />
                    </div>
                  </div>
                  <div
                    className="ageDetails"
                    style={{ display: "flex", justifyContent: "space-evenly", flexWrap:"wrap" }}
                  >
                    <FormControl style={{ width: "250px" }}>
                      <InputLabel id="role">Role</InputLabel>
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
                    <div class="mb-3 text-center">
                      <TextField
                        type="phoneNumber"
                        id="outlined-basic"
                        label="Phone Number"
                        variant="outlined"
                        name="phoneNumber"
                        style={{ width: "250px" }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col text-center items-center mt-5 pt-5">
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
                      Sign Up
                    </button>
                    <p className="self-center text-center mt-2">Or</p>
                    <button
                      type="submit"
                      style={{
                        backgroundColor: primaryFontColor,
                        color: primaryColor,
                        width: "250px",
                        padding: "10px",
                        borderRadius: "10px",
                        border: "1px solid",
                      }}
                    >
                      Sign n
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
