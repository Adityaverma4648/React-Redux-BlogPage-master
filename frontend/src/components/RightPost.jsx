import { useState } from "react";

//  components
import GroupCard from "./GroupCard";

import edit from "../assets/image 2.png";
import mapIcon from "../assets/image 4.png";
import cross from "../assets/image 3.png";
import exclamation from "../assets/image 6.png";
import thumbsUp from "../assets/image 5.png";

import profile3 from "../assets/rectangle 7.png"
import profile2 from "../assets/rectangle 8.png"
import profile1 from "../assets/rectangle 6.png"
import profile4 from "../assets/rectangle 9.png"



const RightPost = () => {
  const groupData = [
    {
      id: 1,
      profile: profile1,
      name: "Abomination",
    },
    {
      id: 2,
      profile: profile2,
      name: "Superman",
    },
    {
      id: 3,
      profile: profile3,
      name: "Tony Stark",
    },
    {
      id: 4,
      profile: profile4,
      name: "Wonder Woman",
    },
  ];

  const [query, setQuery] = useState("");

  // useEffect(()=>{

  // },[])

  return (
    <div className="col-sm-4 justify-content-end align-items-center py-4 px-2 d-md-flex d-none">
      <div className="col-xl-9 col-sm-10 col-md-11 col-sm-12 d-flex flex-column justify-content-center align-items-center"  >
        <form className="container py-1 d-flex flex-row justify-content-between align-items-center border-bottom">
          <div className="w-100 d-flex justify-content-center align-items-center">
            <label className="mx-1" htmlFor="location">
              <img src={mapIcon} alt="mapIcon" style={{ width: "20px" }} />
            </label>
            <input
              type="text"
              className="py-2 border-0 text-black flex-grow-1 bg-transparent"
              placeholder="Eg. Noida ,India"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button
              type="button"
              className="border-0 bg-transparent"
              onClick={() => {
                setQuery("");
              }}
            >
              {query === undefined || query === "" ? (
                <img src={edit} alt="editIcon" style={{ width: "20px" }} />
              ) : (
                <img src={cross} style={{ width: "20px" }} alt="reset" />
              )}
            </button>
          </div>
        </form>

        {/*  note|message gray block  */}
        <div className="container py-1 d-flex flex-row justify-content-between align-items-start text-secondary py-3">
          <div className="mx-1">
            {/* <FaInfoCircle /> */}
            <img
              src={exclamation}
              alt="exclamation"
              style={{ width: "20px" }}
            />
          </div>
          <small className="text-right">
            Your location will help us serve better and extend a personalised
            experience.
          </small>
        </div>
        <div className="w-100 py-1 d-flex flex-column justify-content-between align-items-start text-secondary py-5">
          <div className="container d-flex justify-content-start align-items-center">
            {/* thunb icon */}
            <img
              src={thumbsUp}
              className="me-2"
              alt="thumbsUp"
              style={{ width: "20px" }}
            />

            <div className="fw-bold text-black">RECOMMENDED GROUPS</div>
          </div>
          <div className="container d-flex flex-column justify-content-center align-items-center py-5">
            {groupData.map((d , index) => {
              return (
                 <GroupCard key={index} id={d.id} image={d.profile} name={d.name} />
              );
            })}
          </div>
          <div className="container d-flex justify-content-end align-items-center">
            <button
              type="button"
              className="btn border-0 text-primary bg-transparent"
            >
              See More..
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPost;
