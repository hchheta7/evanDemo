import React, { useEffect, useState } from "react";
import ProfileData from "../Data/data.json";
import Profile from "./Profile";
import { NavLink } from "react-router-dom";
import Header from "../Navbar/Header";

const Home = () => {
  const [profiles, setprofiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let userData = [
    {
      name: "Portrait of a Lady on Fire",
      categories: "Gujrati",
      imdbID: "1",
      age: "22",
      image: "images/p1.jpg",
    },
    {
      name: "Portrait of a Lady on Fire",
      categories: "Marathi",
      imdbID: "2",
      age: "23",
      image: "images/p2.jpg",
    },
    {
      name: "Portrait of a Lady on Fire",
      categories: "jain",
      imdbID: "3",
      age: "22",
      image: "images/p3.jpg",
    },
    {
      name: "Portrait of a Lady on Fire",
      categories: "Sikh",
      imdbID: "4",
      age: "20",
      image: "images/p4.jpg",
    },
    {
      name: "Portrait of a Lady on Fire",
      categories: "Muslim",
      imdbID: "5",
      age: "23",
      image: "images/p5.jpg",
    },
    {
      name: "Portrait of a Lady on Fire",
      categories: "Gujrati",
      imdbID: "6",
      age: "29",
      image: "images/p6.jpg",
    },
    {
      name: "Portrait of a Lady on Fire",
      categories: "Muslim",
      imdbID: "7",
      age: "25",
      image: "images/p7.jpg",
    },
    {
      name: "Portrait of a Lady on Fire",
      categories: "Punjabi",
      imdbID: "8",
      age: "23",
      image: "images/p8.jpg",
    },
    {
      name: "Portrait of a Lady on Fire",
      categories: "Sikh",
      imdbID: "9",
      age: "28",
      image: "images/p9.jpg",
    },
    {
      name: "Portrait of a Lady on Fire",
      categories: "Jain",
      imdbID: "10",
      age: "26",
      image: "images/p10.jpg",
    },
    {
      name: "Portrait of a Lady on Fire",
      categories: "marathi",
      imdbID: "11",
      age: "20",
      image: "images/p11.jpg",
    },
    {
      name: "Portrait of a Lady on Fire",
      categories: "Parsi",
      imdbID: "12",
      age: "28",
      image: "images/p12.jpg",
    },
    {
      name: "Portrait of a Lady on Fire",
      categories: "Gujrati",
      imdbID: "13",
      age: "33",
      image: "images/p13.jpg",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        // if (!response.ok) {
        //     throw new Error('failed to fetch data');
        // }

        const data = userData;

        setprofiles(data);
        setLoading(false);
      } catch (error) {
        console.error("fetching error", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data</p>;
  }

  return (
    <>
      <div className="home-container">
        <div className="slider">
          <div className="slider-top">
            <div className="left-title">
              <h3>categories of girls </h3>
            </div>

            <div className="more">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
          </div>

          <div className="slider-top">
            <div className="left-title">
              <h3>select Region </h3>
            </div>

            <div className="more">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
          </div>

          <div className="slider-top">
            <div className="left-title">
              <h3>Height of girls </h3>
            </div>

            <div className="more">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
          </div>

          <div className="slider-top">
            <div className="left-title">
              <h3>Weight of girls </h3>
            </div>

            <div className="more">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="top-div">
            {/* <div className='heading-home'>
                            <h1> </h1>
                        </div> */}

            <div className="search">
              <input type="text" placeholder="Search here..." />
              <select>
                <option value="newest">Newly added</option>
                <option value="best">Best matches</option>
                <option value="trending">Trending</option>
                <option value="recommended">Recommended</option>
              </select>
            </div>
          </div>

          <div className="profile-grid">
            {/* <NavLink to={`details/id`} > */}
            {profiles.map((profile) => (
              <Profile key={profile.imdbID} profile={profile} />
            ))}
            {/* </NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
