/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
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
          <div
            className="btn btn-transparent border-0 dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <button
              className="btn btn-transparent border-0 dropdown-toggle fw-bolder"
              type="button"
              data-toggle="dropdown"
            >
              Create account.
              <span className="fw-bold text-primary">It's Free!</span>
            </button>
            <ul
              className="dropdown-menu border-0 shadow-sm d-flex flex-column justify-content-center align-items-center"
              aria-labelledby="dropdownMenuButton1"
              style={{ height: "80px" }}
            >
              <Link
                to="/signUp"
                className="d-flex justify-content-center h-50 w-100 border-bottom border-secondary border-opacity-50"
              >
                SignUp
              </Link>

              <Link
                to="/login"
                className="d-flex justify-content-center h-50 w-100 border-bottom border-secondary border-opacity-50"
              >
                Login
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
