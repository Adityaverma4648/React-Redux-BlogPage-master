/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import eyeIcon from "../assets/eye.png";
import closeIcon from "../assets/image 3.png"
import bgIllustration from "../assets/atg_illustration.png";
import google from "../assets/search.png";
import facebook from "../assets/f_logo_RGB-Blue_1024.png";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setShowSignInModal, setShowSignUpModal } from "../redux/AppSlice";

const intialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formValue, setFormValue] = useState(intialState);
  const { email, password } = formValue;
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  useEffect(() => {
    var passwordLogin = document.getElementById("passwordInputLogin");

    if (visibility) {
      passwordLogin.setAttribute("type", "text");
    } else {
      passwordLogin.setAttribute("type", "password");
    }
  }, [visibility]);

  return (
    <div
      className="w-100 d-flex justify-content-center  align-items-end align-items-md-center top-0 position-fixed"
      id="signIn"
      style={{ height: "100vh", zIndex: "10000" }}
    >
      <div
        className="col-md-6 col-sm-12  d-flex bg-danger position-relative d-flex flex-column justify-content-start align-items-center rounded-3 overflow-hidden"
        style={{ height: "60vh", zIndex: "10001" }}
      >
        <div
          className="text-center text-success container-fluid d-flex justify-content-center align-items-center py-2"
          style={{ backgroundColor: "#EFFFF4", fontSize: "16px" }}
        >
          Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </div>

        <div className="container-fluid d-flex flex-grow-1 justify-content-center align-items-center bg-white">
          <div className="h-100 col-md-6 container-fluid d-flex flex-column justify-content-center align-items-center">
            <form
              method="post"
              action="http://localhost:7000/auth/login"
              className="container-fluid h-25 d-flex flex-column justify-content-center align-items-center"
            >
              <div className="container-fluid d-flex justify-content-md-start justify-content-between
               p-2 h4 align-items-center fw-bolder">
                Sign In

                <span className="bg-secondary text-white rounded-5 d-flex justify-content-center align-items-center text-white d-md-none"  style={{height : "20px", width : "20px"}} >
                  <img src={closeIcon} alt="closeIcon" style={{width : "15px"}} />
                </span>
              </div>
              <div className="container-lg container-fluid d-flex flex-column justify-content-center align-items-center py-1 border-top border-start border-end border-secondary border-opacity-50 bg-light">
                <input
                  type="email"
                  className=" container-fluid bg-transparent p-2 border-0"
                  placeholder="Enter email"
                  name="userEmail"
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="container-fluid d-flex justify-content-center align-items-center mb-1 py-1 border border-secondary border-opacity-50 bg-light">
                <input
                  type="password"
                  className="container-md container-fluid p-2 border-0 bg-transparent"
                  placeholder="Enter password"
                  id="passwordInputLogin"
                  name="password"
                  onChange={(e) => onInputChange(e)}
                  autoComplete="on"
                  required
                />
                <img
                  src={eyeIcon}
                  alt="visibility"
                  className="w-20"
                  onClick={(e) => {
                    setVisibility(!visibility);
                  }}
                />
              </div>

              <input
                type="submit"
                className="btn btn-primary container-fluid rounded-5 my-4"
              />
            </form>

            <div className="container-fluid d-flex flex-column justify-content-center align-items-center mt-5">
              <div className="container-lg container-fluid d-flex flex-column justify-content-center align-items-center py-1 border-top border-start border-end border-secondary border-opacity-50 bg-light">
                <button
                  type="button"
                  className="container-fluid d-flex justify-content-center align-items-center bg-transparent text-black border-0" 
                  style={{outline : "none"}}
                >
                  <img
                    src={facebook}
                    alt="thirdPartyLogin"
                    className="me-2"
                    style={{ height: "20px" }}
                  />
                  Sign in with Facebook
                </button>
              </div>
              <div className="container-fluid d-flex justify-content-center align-items-center mb-1 py-1 border border-secondary border-opacity-50 bg-light">
                <button
                  type="button"
                  className="container-fluid d-flex justify-content-center align-items-center bg-transparent text-black border-0" 
                  style={{outline : "none"}}
                >
                  <img
                    src={google}
                    alt="thirdPartyLogin"
                    className="me-2"
                    style={{ height: "20px" }}
                  />
                  Sign in with Google
                </button>
              </div>

              <div className="container-fluid d-flex justify-content-center align-items-center mb-1 py-1">
                <button
                  type="button"
                  className="container-fluid d-flex justify-content-center align-items-center bg-transparent text-black border-0" 
                  style={{outline : "none"}}
                >
                  Forgot password?
                </button>
              </div>
            </div>
          </div>

          <div className="w-50 d-md-flex d-none justify-content-center align-items-center position-relative" style={{height : "82.5%"}}>
            <span className="top-0 position-absolute " >
            Don’t have an account yet? Create new for free!
            </span>
            <img src={bgIllustration} alt="bgIllustration" />
          </div>
        </div>
      </div>

      <div
        className="w-100 h-100 position-absolute bg-black opacity-50"
        onClick={(e) => {
          e.preventDefault();
          dispatch(setShowSignInModal(false));
        }}
      ></div>
    </div>
  );
};

export default Login;
