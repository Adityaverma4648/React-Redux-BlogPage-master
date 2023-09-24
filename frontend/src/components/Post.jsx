/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../redux/postSlice";

import PostCard from "./PostCard";
import PostHeader from "./PostHeader";
import RightPost from "./RightPost";

const intialState = {
  title: "",
  description: "",
  image: "",
  postType: "",
  website: "",
};

const Post = () => {
  const [alter, setAlter] = useState(true);
  const [location, setLocation] = useState("");
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState(intialState);
  const { title, desc, image, postType, website } = formValue;

//   const { loading, posts } = useSelector((state) => state.posts);

  //filter Buttons functions - filter setter function
  const handleFilterButtons = (value) => {
    setFilter(value);
  };

  const posts = [
    {
      id: 1,
      postType: "Article",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      image : "",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      userData: { userName: "", profile: "", location: "" },
      views: "1400",
      created_on: "",
      website_link: "",
    },
    {
      id: 2,
      postType: "Education",
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
        image : "",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      userData: { userName: "", profile: "", location: "" },
      views: "1400",
      created_on: "",
      website_link: "",
    },
    {
      id: 3,
      postType: "Meetup",
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      image : "",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      userData: { userName: "", profile: "", location: "" },
      views: "1400",
      created_on: "",
      website_link: "",
    },
    {
      id: 4,
      postType: "Job",
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      image : "",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      userData: { userName: "", profile: "", location: "" },
      views: "1400",
      created_on: "",
      website_link: "",
    },
  ];

  return (
    <>
      {/*  modals */}

      {/* <div className="modal fade" id="createPost"  aria-labelledby="createPost" aria-hidden="true">
  <div className="modal-dialog  modal-md modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="container-fluid d-flex p-1 justify-content-end align-items-center">
            <FaTimesCircle color='white' />
          </div>
          <form method='post' action='http://localhost:7000/blog/create' className="bg-white container-fluid d-flex flex-column justify-content-center align-items-center p-2">
          
              <div className='container-fluid d-flex justify-content-start px-2 h5 align-items-center fw-normal' >
                  Write a post!
              </div>
              
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
             <input type="text" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' name='title' placeholder='Enter post title'  required />
             </div>
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
             <input type="text" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' name='description' placeholder='Enter post description' required />
             </div>
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
             <div className='container-fluid d-flex text-secondary opacity-50' >
                Please Ensure File Type To Be: JPG ,PNG. 
             </div>
             <input type="file" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' name='image' placeholder='Enter image'  required />
             </div>
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
             <div className='container-fluid d-flex text-secondary opacity-50' >
                Select post type :
             </div>
             <select className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' name='postType'  required>
                <option value="article" className='py-2' >article</option>
                <option value="education" className='py-2' >education</option>
                <option value="job" className='py-2' >job</option>
                <option value="event" className='py-2' >event</option>
             </select>
             </div>
             {postType==="event" &&
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
             <div className='container-fluid d-flex text-secondary opacity-50' >
                Example: https://linkName.com
             </div>
             <input type="text" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' name="eventAdditionalLink" placeholder='Enter Website Link'  required />
             </div>
             }
             {postType==="job" &&
             <div className='container-fluid d-flex flex-column justify-content-center align-items-center mb-1 py-1'>
             <div className='container-fluid d-flex text-secondary opacity-50' >
                Example: https://linkName.com
             </div>
             <input type="text" className='border border-secondary border-opacity-50 container-fluid bg-transparent p-2' placeholder='Enter Website Link to apply for jobs at' name='jobAdiitionalLink'  required />
             </div>
             }
             <div className="container-fluid">
               <input type="submit" className='btn btn-primary' />
             </div>
          </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
      </div> */}

      {/*  modal ends here */}
      <div
        className="container-fluid-md w-100 flex flex-col justify-content-center align-items-center py-md-5 bg-white"
        style={{ height: "120vh" }}
      >
        <PostHeader handleFilterButtons={handleFilterButtons} filter={filter} />

        <div className="container-lg w-100 h-100 d-flex justify-content-between align-items-start">
          <div className="col-md-8  h-100 d-flex flex-column justify-content-start align-items-center py-2 overflow-scroll"
             id="postsScroll"
          >
            {posts.map((d, index) => {
              return (
                <PostCard
                  className="container-fluid d-flex flex-column justify-content-center align-items-center"
                  key={index}
                  id={d.id}
                  title={d.title}
                  description={d.description}
                  image={d.image}
                  postType={d.postType}
                  created_on={d.created_on}
                  userData={d.userData}
                  views={d.views} 
                  website_link = {d.website_link}
                />
              );
            })}
          </div>

          <RightPost />
        </div>
      </div>
    </>
  );
};

export default Post;
