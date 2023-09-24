//  import Navbar from "./Navbar.jsx";

import { FaArrowLeft } from "react-icons/fa";

const Header = () => {
  return (
    <header className="container-fluid d-flex flex-col justify-content-center align-items-center Header bg-danger">
      <div className="h-100 position-relative d-flex justify-content-start align-items-end" >
             <div className="container-fluid py-4 position-absolute top-0 d-block d-sm-none d-flex justify-content-between align-items-center" style={{marginTop:"5rem"}}>
                 <div>
                    <button type="button" className="border-0 bg-transparent" >
                      <FaArrowLeft color="#fff" />
                    </button>
                 </div>
                 <div>
                    <button type="button" className="btn bg-transparent fw-bolder text-white border border-white py-2" >
                      Join Group
                    </button>
                 </div>
             </div>


            <div className="h-100 row flex justify-content-start align-items-center" id="BackgroundImage" >
            </div>
            <div className="container-fluid position-absolute text-white"  style={{marginBottom : "9rem"}}  >
                <div className="container" >
                  <h1 className="fw-bold pageHeaderText" >
                    Computer Engineers
                  </h1>
                  <span className="regulartext fw-regular" >
                    142,765 Computer Engineers follow this
                  </span>
                </div>
           </div>
      </div>

    </header>
  );
};
export default Header;
