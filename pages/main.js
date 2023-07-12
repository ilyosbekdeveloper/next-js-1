import React from "react";
import Image from "next/image";
import SearchImage from "../assets/resource/search (1).svg";
import BellImage from "../assets/resource/bell.svg";
import PersonImage from "../assets/resource/unsplash_NohB3FJSY90.svg";
import ArrowIMage from "../assets/resource/arrow-drop-down-line (2) 1.svg";
import GraphImage from "../assets/resource/Graph.svg";
import GroupImage from "../assets/resource/group.svg";
import ProjectImage from "../assets/resource/project1.png";
import UlImage1 from "../assets/resource/ul_img_1.svg";
import UlImage2 from "../assets/resource/ul_img_2.svg";
import UlImage3 from "../assets/resource/ul_img_3.svg";
import UlImage4 from "../assets/resource/ul_img_4.svg";
import UlImage5 from "../assets/resource/ul_img_5.svg";
import Layout from "../src/components/Layout";

const Main = ({ isHide, setIsHide }) => {
  const contentLists = [
    {
      span: "Inactive",
      p: "254",
    },
    {
      span: "Active",
      p: "3000",
    },
    {
      span: "Total",
      p: "3254",
    },
  ];

  const rightLists = [
    {
      h4: "Top 10",
      span: "Position in dribbble",
      p: "20% Increase from Last Week",
    },
    {
      h4: "Top 10",
      span: "Position in dribbble",
      p: "20% Increase from Last Week",
    },
    {
      h4: "Top 10",
      span: "Position in dribbble",
      p: "20% Increase from Last Week",
    },
  ];

  const notifications = [
    {
      img: UlImage1,
      title: "Ellie joined team developers",
      p: "04 April, 2021 | 04:00 PM",
    },
    {
      img: UlImage2,
      title: "Jenny joined team HR",
      p: "04 April, 2021 | 04:00 PM",
    },
    {
      img: UlImage3,
      title: "Adam got employee of the month",
      p: "03 April, 2021 | 02:00 PM",
    },
    {
      img: UlImage4,
      title: "Robert joined team design",
      p: "02 April, 2021 | 02:00 PM",
    },
    {
      img: UlImage5,
      title: "Jack joined team design",
      p: "01 April, 2021 | 03:00 PM",
    },
  ];

  return (
    <Layout>
      <div className="mainDiv">
        <div className="container">
          <div className="main_title">
            <div>
              <h1 className="title">
                Good Morning Anima
                <button className="close" onClick={setIsHide}>
                  Open
                </button>
              </h1>
              <span className="title_span">Hope you have a good day</span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0 35px" }}
            >
              <Image
                style={{ cursor: "pointer" }}
                src={SearchImage}
                width={22}
                height={22}
                alt="img"
              />
              <Image
                style={{ cursor: "pointer" }}
                src={BellImage}
                width={22}
                height={22}
                alt="imgBell"
              />
              <div
                className="account_image"
                style={{ display: "flex", alignItems: "center", gap: "0 4px" }}
              >
                <Image
                  style={{ cursor: "pointer" }}
                  src={PersonImage}
                  width={30}
                  alt="image"
                />
                <span>
                  <Image
                    style={{ cursor: "pointer" }}
                    src={ArrowIMage}
                    width={22}
                    alt="image"
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="main_contents">
            <div className="main_content_1 main_content">
              <h6 className="title">Teams Strength</h6>
              <Image src={GraphImage} alt="image" />
              <div className="main_content_datas">
                <div>
                  <span>a</span>
                  <p>Marketing</p>
                </div>
                <div>
                  <span>b</span>
                  <p>HR</p>
                </div>
                <div>
                  <span>c</span>
                  <p>Developers</p>
                </div>
                <div>
                  <span>d</span>
                  <p>Design</p>
                </div>
              </div>
            </div>
            <div className="main_content_2 main_content">
              <div className="title">
                <h6>Employees</h6>
                <span>Aug 25-Sept 25</span>
              </div>
              <div className="content">
                <ul>
                  {contentLists.map((i, index) => (
                    <li key={index}>
                      <span>{i.span}</span>
                      <p>{i.p}</p>
                    </li>
                  ))}
                </ul>

                <Image src={GroupImage} alt="img"/>
              </div>
            </div>

            <div className="main_content_3">
              <ul>
                {rightLists.map((i, index) => (
                  <li key={index}>
                    <h4 className="title">{i.h4}</h4>
                    <span>{i.span}</span>
                    <p>{i.p}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="content_4">
            <Image
              className="project_img"
              src={ProjectImage}
              width={741}
              height={407}
              alt="img"
            />
            <div className="right_content">
              <div className="title">
                <h4>Notifications</h4>
                <span>View All</span>
              </div>
              <ul>
                {notifications.map((i, index) => (
                  <li key={index}>
                    <Image src={i.img} alt="imgs" />
                    <div>
                      <h5>{i.title}</h5>
                      <p>{i.p}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Main;
