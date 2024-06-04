import React from "react";
import { useNavigate } from "react-router-dom";
import InputGroup from "../../components/InputGroup";
import FormButton from "../../components/FormButton";

export function LoginContainer() {
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate("/register");
  };

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
        <div className="col-md-8"></div>
        <div className="col-md-4">
          <div className="sidebar" style={{}}>
            <div className="logo">
              <img
                src="./assets/img/career_compass_logo.png"
                alt="career compass logo"
                className="img-fluid"
              />
            </div>

            {/* <img
              src="./assets/img/chart_girl.png"
              alt="home page icon"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
