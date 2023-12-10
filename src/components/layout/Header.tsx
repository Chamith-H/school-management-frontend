import { useState } from "react";
import "../../styles/layout/Header.css";
import Logo from "../../assets/icons/Logo.png";
import Popup from "../shared/Popup";
import Login from "../contents/auth/views/account/Login";
import RefreshLoader from "../shared/RefreshLoader";
import SuccessMessage from "../../common/SuccessMessage";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const loginUser = (data: any) => {
    setIsLoading(true);
    setTimeout(function () {
      setShowLogin(false);
      setIsLoading(false);
      SuccessMessage("User created successfully");
    }, 5000);
  };

  return (
    <div className="Header px-5">
      <div className="Left-Section">
        <div className="Company-Brand">
          <img src={Logo} alt="CompanyLogo" />
          <h4 className="ms-2 mb-0">EDUSYNC</h4>
        </div>

        <div className="Nav-Links ms-5">
          <a href="" className="me-4">
            Home
          </a>
          <a href="" className="me-4">
            School
          </a>
          <a href="" className="me-4">
            Products
          </a>
          <a href="" className="me-4">
            Blogs
          </a>
          <a href="">About Us</a>
        </div>
      </div>

      <div className="Right-Section">
        <div className="Access-Account">
          {!isLogged && (
            <div className="Access-Buttons">
              <button
                className="mb-0 Login-Button"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
              <h4 className="mb-1 me-2">|</h4>
              <button className="mb-0 Register-Button py-1 px-3">
                Register
              </button>
            </div>
          )}

          {isLogged && <div className="Account-Details"></div>}
        </div>

        {isLogged && (
          <div className="Account-Button">
            <button>
              <i className="bi bi-person-circle"></i>
            </button>
          </div>
        )}
      </div>

      <RefreshLoader Loading={isLoading} />

      <Popup
        Visible={showLogin}
        Close={() => setShowLogin(false)}
        Title="Login"
        Content={
          <Login SubmitValues={(formData: any) => loginUser(formData)} />
        }
      />
    </div>
  );
};

export default Header;
