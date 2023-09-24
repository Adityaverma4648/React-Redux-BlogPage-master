/* eslint-disable no-unused-vars */
import {useSelector} from "react-redux";

import Header from "../components/Header";
import Post from "../components/Post";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const Home = () => {

  const { signInModal , signUpModal } = useSelector((state)=>state.app)

  return (
    <>

      {signInModal && <Login /> }
      {signUpModal && <SignUp /> }
      

      <div
        className="d-flex flex-column justify-content-start align-items-center bg-white"
        style={{ height: "200vh" }}
      >
        <Header />
        <Post />
      </div>
    </>
  );
};

export default Home;
