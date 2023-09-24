/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaCaretDown } from "react-icons/fa";

// importng icons
import addUser from "../assets/baseline-group_add-24px.png";
import leaveIcon from "../assets/leaveIcon.png";
import { useState } from "react";

const PostHeader = ({ handleFilterButtons, filter , length }) => {
  const headerElement = [
    {
      id: 1,
      name: "All Posts",
      value : "all"
    },
    {
      id: 2,
      name: "Article",
      value : "article"
    },
    {
      id: 3,
      name: "Event",
      value : "event"
    },
    {
      id: 4,
      name: "Education",
      value : "education"
    },
    {
      id: 5,
      name: "Job",
      value: "job"
    },
  ];

  const [groupJoined, setGroupJoined] = useState(false);

  return (
    <>
      {/*  Post header */}
      <div className="container-lg container-fluid d-flex flex-row justify-content-between align-items-center py-2">
        <div className="col-sm-8 d-md-block d-none d-flex flex-row justify-content-start align-items-end">
          <div className="d-flex flex-row justify-content-start align-items-end text-secondary">
            {headerElement?.map((d, index)=>{
                return <li key={index} id={d.name} className={`h-100 mx-2 `}>
                <button
                  type="button"
                  onClick={() => handleFilterButtons(d.value)}
                  className={`h-100 border-end-0 border-top-0 border-start-0 bg-transparent rounded-0 p-2  ${filter === d.value ? "border-3 border-bottom border-black text-black" : "border-bottom-0 text-secondary"}`}
                >
                   {d.name}
                   {d.value === "all" && <span className="mx-1">({length})</span>}
                </button>
                </li>
            })}
          </div>
        </div>
        <div className="col-sm-4 d-md-block d-none justify-content-center align-items-center">
          <div className="container-fluid d-flex justify-content-end align-items-center">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#createPost"
              className="w-50 p-2 btn btn-light border-0 me-1 fw-normal fs-6 rounded-1 d-flex justify-content-center align-items-center overflow-hidden"
            >
              Write a Post <FaCaretDown className="mx-2" />
            </button>
            <button
              type="button"
              className={`w-50 p-2 ${groupJoined ? "border border-2 border-secondary border-opacity-50 bg-white text-secondary" : "bg-primary text-white border-0"}    ms-1 fw-normal fs-6 rounded-1 d-flex justify-content-center align-items-center overflow-hidden`}
              onClick={(e)=>{
                 setGroupJoined(!groupJoined);
              }}
            >
              {groupJoined ? <div className="d-flex justify-content-center align-items-center">
                <img src={leaveIcon} className="mx-2" alt="addUser" style={{width : "20px"}} />
              LeaveGroup
              </div>: <div>
              <img src={addUser} className="mx-2" alt="addUser" />
              Join Group
              </div>  }
            </button>
          </div>
        </div>
      </div>
      {/*  Post header responsive  */}
      <div className="container d-flex justify-content-between align-items-center border-bottom border-secondary border-opacity-50 d-md-none d-block">
        <div className="col-md-6 d-flex flex-row justify-content-start align-items-center childPostHidden fs-5 fw-bolder">
          Posts : ({length}) 
        </div>
        <div className="col-md-6 d-flex justify-content-end align-items-center py-2">
          <div className="d-flex justify-content-center align-items-center bg-light p-2 fw-bolder" >
            Filter:
          <select
            className="bg-transparent text-black border-0 fw-semibold"
            onChange={(e)=>{handleFilterButtons(e.target.value)}}
            name="filterOptions"
            style={{outline : "none"}}
          >  
            {headerElement?.map((d,index)=>{
              return <option key={index} value={d.value}>
                {d.name}
              </option>
            })}
          </select>
          </div>
        </div>
      </div>
      {/*  post header responsive ends here */}
    </>
  );
};

export default PostHeader;
