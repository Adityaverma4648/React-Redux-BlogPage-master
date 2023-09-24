/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaEllipsisH, FaEye, FaShareAlt } from "react-icons/fa";

import article from "../assets/image 8.png";
import education from "../assets/image 9.png";
import job from "../assets/image 10.png";
import meetup from "../assets/image 11.png";

const PostCard = (props) => {
  const [postType, setPostType] = useState();

  const handlePostType = (post) => {
    setPostType(post);
  };

  useEffect(() => {
    handlePostType(props.postType);
  }, [props.postType]);

  return (
    <div
      className="w-100 mb-3 d-flex flex-column justify-content-start align-items-center bg-white border border-secondary border-opacity-50 bg-danger rounded-2" style={{minHeight : "55vh"}}
    >
      <div className={`w-100 h-50 ${props.image === null ? "d-none" : "d-flex"  } justify-content-start align-items-center bg-light overflow-hidden`}>
        <img src={props.image} alt="imageLink"  className="w-100 h-100" />
      </div>
      <div className="container-fluid mt-2 h-50 d-flex flex-column justify-content-between align-items-center p-3" >
        <div className="w-100 d-flex flex-column justify-content-start align-items-center">
          <div className="w-100 fw-bolder my-1 px-2 d-flex justify-content-start align-items-center">
            {props.postType === "Article" && (
              <img
                src={article}
                className="mx-1"
                style={{ width: "20px" }}
                alt="icon"
              />
            )}
            {props.postType === "Education" && (
              <img
                src={education}
                className="mx-1"
                style={{ width: "20px" }}
                alt="icon"
              />
            )}
            {props.postType === "Meetup" && (
              <img
                src={meetup}
                className="mx-1"
                style={{ width: "20px" }}
                alt="icon"
              />
            )}
            {props.postType === "Job" && (
              <img
                src={job}
                className="mx-1"
                style={{ width: "20px" }}
                alt="icon"
              />
            )}

            {props.postType}
          </div>
          <div className="container-fluid d-flex justify-content-between align-items-center fs-5 fw-bold">
            <div className="d-flex">{props.title}</div>

            <div className="dropdown">
              <button
                className="btn btn-light"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
              >
                <FaEllipsisH color="#000" />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="void(0)">
                    edit
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="void(0)">
                    Report
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="void(0)">
                    option 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="container-fluid fw-light text-secondary"
            style={{ fontSize: "15px" }}
          >
            {props.description}
          </div>
          {props.postType === "Job" && (
            <div className="container-fluid py-2 ">
              <button
                type="button"
                className="btn bg-transparent btn-outline-secondary text-danger container-fluid fw-bolder"
              >
                Apply on Timesjobs
              </button>
            </div>
          )}

          {props.postType === "Event" || props.postType === "Meetup" && (
            <div className="container-fluid py-2 ">
              <button
                type="button"
                className="btn bg-transparent btn-outline-secondary text-success container-fluid fw-bolder"
              >
                Visit Website
              </button>
            </div>
          )}
        </div>

        <div className="w-100 d-flex flex-row justify-content-between align-items-center">

          {/*  userData */}
          <div className="flex-grow-1 d-flex flex-sm-column flex-column justify-content-between align-items-center">
            <div className="w-100 d-flex justify-content-between align-items-center">
            <div
              className="d-flex flex-row justify-content-between align-items-center ms-3"
              id="avatar"
            >
              <img
                src={props.userData.profile}
                className="bg-danger rounded-5 me-1"
                style={{ height: "40px", width: "40px" }}
                alt="userAvatar"
              />
            </div>

           {/*  views  */}
            <div className="flex-grow-1 h-100 mx-1 d-flex flex-md-row flex-column justify-content-md-between justify-content-start align-items-md-center align-tems-center"> 
                 <div className="fw-bolder postTitletext"  >
                {props.userData.userName || "userName"}
                </div>
                <div>
                <FaEye className="w-20 h-20 mx-1 postDescriptionText"  />
                1.4K Views
                </div>
              </div>

            </div>
            
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <div className="w-100 d-flex flex-row justify-content-between justify-content-sm-end align-items-center">

              <div className="mx-2">
                <button
                  type="buttton"
                  className="btn btn-light rounded-1 d-flex justify-content-center align-items-center overflow-hidden"
                >
                  <FaShareAlt className="" color="#000" />
                  <div className="d-block d-sm-none">Share</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
