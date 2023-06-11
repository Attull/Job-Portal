import React, { useRef, useState } from "react";
import Navbar from "./navbar/Navbar";
import "./Home.css";
import { useNavigate } from "react-router-dom";

import Piyush from "../assests/images/Piyush-Saini-400x516.webp";
import Peddireddy_Harshavardhan_Reddy from "../assests/images/Peddireddy_Harshavardhan_Reddy-400x516.webp";
import ADITI from "../assests/images/ADITI-1-400x516.webp";
import RAMYA from "../assests/images/RAMYA-1-400x516.webp";
import Sai_Ravi_Shankar_Sighakolli from "../assests/images/Sai_Ravi_Shankar_Sighakolli-400x516.webp";
import Shahper from "../assests/images/Shahper-Ali-khan-400x516.webp";
import Tarun from "../assests/images/Tarun-Reddy-400x516.webp";
import Thirukkovela from "../assests/images/Thirukkovela-Srija-1-400x516.webp";
import Hema from "../assests/images/Hema-singani-400x516.webp";
import Maliha from "../assests/images/Maliha-Almas-Patel-Flyer-1-400x516.webp";
import CHOKKAKULA_NAGA_SUNDAR from "../assests/images/CHOKKAKULA_NAGA_SUNDAR-400x516.webp";
import Swapnika_Surve from "../assests/images/Swapnika_Surve-400x516.webp";


import { useEffect } from "react";
import BatchesProgress from "../ChartJS/BatchesProgress";
import { BatchesData } from "../ChartJS/AllData";
import StudentsPlaced from "../ChartJS/StudentsPlaced";
import Footer from "./Footer/Footer";

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [batchData, setBatchData] = useState({
    labels: BatchesData.map((data) => data.year),
    datasets: [
      {
        label: "Batches Growth",
        data: BatchesData.map((data) => data.batchNo),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });


  const [studentPlacedData, setStudentPlacedData] = useState({
    labels: BatchesData.map((data) => data.year),
    datasets: [
      {
        label: "Students Placed",
        data: BatchesData.map((data) => data.placedStudents),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const submitJobSearch = () => {
    navigate("/JobVacancy");
  };

  return (
    <div className="container">
      <Navbar />
      <div className="header_cont row">
        <div className="col-sm-12 col-md-6 col-lg-6 left">
          <h2>
            Innomatics Research Labs <br /> were you can upgrade
          </h2>
          <div className="home_input d-flex mt-4">
            <div className="job_serach_input d-flex align-items-center">
              <i class="fa-solid fa-magnifying-glass fa-lg"></i>
              <input
                type="text"
                placeholder="serach for job"
                onChange={(e) => setSearch(e.traget.value)}
              />
            </div>

            <button
              className="button1"
              onClick={submitJobSearch}
              style={{ backgroundColor: "#ff641a" }}
            >
              {" "}
              Get Hired
            </button>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 robot"></div>
      </div>
      {/* end of serach bar & get hired */}

      <div className="placed_students_carousel m-5">
        <div>
          <h1 className="text-center">Latest Job acheived by Innomatics</h1>
        </div>
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active row">
              <img
                src={Thirukkovela}
                className="col-sm-12 col-md-3"
                alt="..."
              />
              <img
                src={Maliha}
                className="d-md-inline d-sm-none col-md-3"
                alt="..."
              />
              <img
                src={Sai_Ravi_Shankar_Sighakolli}
                className="d-md-inline d-sm-none col-md-3 "
                alt="..."
              />
              <img
                src={Swapnika_Surve}
                className="d-md-inline d-sm-none col-md-3 "
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={Tarun}
                className="d-sm-none d-md-inline col-md-3 "
                alt="..."
              />
              <img src={Shahper} class=" col-sm-12 col-md-3" alt="..." />
              <img
                src={ADITI}
                className="d-sm-none d-md-inline col-md-3 "
                alt="..."
              />
              <img
                src={CHOKKAKULA_NAGA_SUNDAR}
                className="d-sm-none d-md-inline col-md-3 "
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={RAMYA}
                className="d-sm-none d-md-inline col-md-3 "
                alt="..."
              />
              <img
                src={Peddireddy_Harshavardhan_Reddy}
                className="d-sm-none d-md-inline col-md-3 "
                alt="..."
              />
              <img
                src={Hema}
                className="d-sm-none d-md-inline col-md-3 "
                alt="..."
              />
              <img
                src={Piyush}
                className="d-inline col-sm-12 col-md-3"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>

      {/* batches charts start */}

      <div className="row mt-5 border rounded">

        <div className="col-sm-12 col-md-6">
        <BatchesProgress chartData={batchData} />
        </div>
        <div className="col-sm-12 col-md-6 align-">
        <h1> content about how growth of the innomatics and batches</h1>
        </div>
      </div>

{/* Students placed charts start */}

<div className="row mt-5 border rounded">


<div className="col-sm-12 col-md-6 align-">
<h1> content about how many students placed by innmonatics throughout the carrer</h1>
</div>

<div className="col-sm-12 col-md-6">
<StudentsPlaced chartData={studentPlacedData}/>
</div>
</div>

<Footer/>

    </div>
  );
};

export default Home;
