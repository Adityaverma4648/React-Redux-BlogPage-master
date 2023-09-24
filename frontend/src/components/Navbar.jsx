/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";

//  importing redux
import {useDispatch} from "react-redux";
import {setShowSignInModal , setShowSignUpModal} from "../redux/AppSlice";

const Navbar = () => {

  const dispatch = useDispatch();

  return (
  
      <nav className="Navbar bg-white top-0 left-0 right-0 position-fixed container-fluid d-flex flex-row justify-content-between px-4 py-2 align-items-center shadow-sm">
        <div className="h-100 col-md-3 col-sm-4 d-none d-sm-flex align-items-center justify-content-center">
          <img src={logo} className="h-50" alt="logo" />
        </div>
        <div className="col-sm-3 navbarChild d-none d-sm-block d-flex flex-row justify-content-center align-items-center">
          <div
            className="container bg-light rounded-5 form-group d-flex flex-row justify-content-start align-items-center"
            style={{ height: 42 }}
          >
            <label
              htmlFor="search"
              className="me-3 h-100 d-flex justify-content-center align-items-center"
              style={{ width: "30px" }}
            >
              <FaSearch color="7A7A7A" />
            </label>
            <input
              type="text"
              className="bg-transparent border-0 flex-grow-1"
              name="search"
              id="search"
              aria-describedby="helpSearch"
              placeholder="Search for your favourite groups in ATG"
            />
          </div>
        </div>
        <div className="col-sm-3 navbarChild d-flex justify-content-sm-center justify-content-end align-items-center">
          <div className="dropdown">
            <button
              type="button"
              className="btn bg-transparent dropdown-toggle border-0"
              style={{ outline: "none" }}
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Create account.
              <span className="fw-bold text-primary">It's Free!</span>
            </button>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={(e)=>{
                    e.preventDefault();
                    dispatch(setShowSignInModal(true))
                  }}
                >
                  SignIn
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={(e)=>{
                    e.preventDefault();
                    dispatch(setShowSignUpModal(true))
                  }}
                >
                  SignUp
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
  );
};

export default Navbar;
