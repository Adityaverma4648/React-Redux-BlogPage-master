/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../redux/postSlice";

import PostCard from "./PostCard";
import PostHeader from "./PostHeader";
import RightPost from "./RightPost";

import mountain from "../assets/mountain.png";
import wall from "../assets/wall.png";
import car from "../assets/car.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";

const intialState = {
  title: "",
  description: "",
  image: "",
  postType: "",
  website: "",
};

const Post = () => {
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState(intialState);
  const { title, desc, image, postType, website } = formValue;
  const [filteredArray, setFilteredArray] = useState([]);

  //   const { loading, posts } = useSelector((state) => state.posts);

  //filter Buttons functions - filter setter function
  const handleFilterButtons = (value) => {
    setFilter(value);
  };

  const posts = useMemo(() => {
    const data = [
      {
        id: 1,
        postType: "Article",
        value : "article",
        title: "What if famous brands had regular fonts? Meet RegulaBrands!",
        image: mountain,
        description:
          "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        userData: { userName: "Sarthak Kamra", profile: profile1 },
        location: "",
        views: "1400",
        created_on: "",
        website_link: "",
      },
      {
        id: 2,
        postType: "Education",
        value : "education",
        title:
          "Tax Benefits for Investment under National Pension Scheme launched by Government",
        image: wall,
        description:
          "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        userData: { userName: "Sarah West", profile: profile2 },
        location: "",
        views: "1400",
        created_on: "",
        website_link: "#",
      },
      {
        id: 3,
        postType: "Meetup",
        value : "meetup",
        title: "Finance & Investment Elite Social Mixer @Lujiazui",
        image: car,
        description:
          "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        userData: { userName: "Ronal Jones", profile: profile3 },
        location: "",
        views: "1400",
        created_on: "",
        website_link: "#",
      },
      {
        id: 4,
        postType: "Job",
        value : "job",
        title: "Finance & Investment Elite Social Mixer @Lujiazui",
        image: null,
        description:
          "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        userData: { userName: "Joseph Gray", profile: profile4 },
        location: "Noida, India",
        views: "1400",
        created_on: "",
        website_link: "#",
      },
    ];
    return data;
  },[]);

  useEffect(() => {
    if (filter === "all") {
      setFilteredArray(posts);
    } else {
      const data = posts.filter((item) => {
        return item.value === filter;
      });
      setFilteredArray(data);
    }
  }, [filter, posts]);

  return (
    <>
      
      <div
        className="container-fluid-md w-100 flex flex-col justify-content-center align-items-center py-md-5 bg-white"
        style={{ height: "120vh" }}
      >
        <PostHeader
          length={posts.length}
          handleFilterButtons={handleFilterButtons}
          filter={filter}
        />
          
          {/*  post card containers - map through card */}
        <div className="container-lg w-100 h-100 d-flex justify-content-between align-items-start">
          <div
            className="col-md-8  h-100 d-flex flex-column justify-content-start align-items-center py-2 overflow-scroll"
            id="postsScroll"
          >
            {filteredArray?.map((d, index) => {
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
                  website_link={d.website_link}
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
