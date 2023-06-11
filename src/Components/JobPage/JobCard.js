import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

// import Footer from "../../components/Footer";
const JobCard = () => {
  const { Id } = useParams();
  const [dataJob, setDatajob] = useState(null);
  const [show, setShow] = useState(false);
  const [agree, setAgree] =useState(false);
  const ApplyEvent = () => setShow(true);
  const checkboxHandler = () => setAgree(!agree);
  const RouteToApply = () => setShow(false);

  useEffect(() => {
    if (Id !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${Id}`)
        .then((res) => {
          console.log(res);
          setDatajob(res.data);
        });
    }
  }, []);

  if (dataJob === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-16" style={{backgroundColor:"#272043"}}>
      <div className="d-flex flex-col  items-start bg-white border rounded-lg shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="img-thumbnail rounded w-25 h-25"
          src={dataJob.company_image_url}
        />
        <div className="d-flex flex-column  text-left m-4 p-2 ">
          <h2 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white text-xl">
            {dataJob.title + " (" + dataJob.job_tenure + ")"}
          </h2>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {dataJob.company_name + " - " + dataJob.job_type}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {dataJob.company_city}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {dataJob.job_status == 1
              ? "Actively Recruiting"
              : "Stop Recruiting"}
          </p>
          <hr />
          <p className="mb-3 mt-3 font-bold text-gray-700 dark:text-gray-400 text-lg">
            Description
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {dataJob.job_description}
          </p>
          <hr />
          <p className="mb-3 mt-3 font-bold text-gray-700 dark:text-gray-400 text-lg">
            Qualification
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {dataJob.job_qualification}
          </p>
          <hr />
          <p className="mb-3 mt-3 font-bold text-lg">
            Salary
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {"Rp." + dataJob.salary_min + " - Rp." + dataJob.salary_max}
          </p>
          <div className="d-flex">
            <button className="button-7 w-20 p-2 text-white"  onClick={ApplyEvent}>
              Apply
            </button>

          <a href="/JobVacancy">
            <button className="button1 w-20 p-2 text-white bg-[#ff641a] hover:bg-[#d7180e] rounded-lg ">
              Back
            </button>
          </a>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={ApplyEvent}>
        <Modal.Header closeButton>
          <Modal.Title>Job GuideLines</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>you need a correct resume format</li>
            <li>all the details which are in the resume are true</li>
            <li>
              please bring the certificates which shows your education
              qualification{" "}
            </li>
            <li>go to the interview in the formal way</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <input type="checkbox" id="agree" onChange={checkboxHandler} />
          <label htmlFor="agree">
            {" "}
            I agree to <b>terms and conditions</b>
          </label>
          <Button variant="secondary" disabled={!agree} onClick={RouteToApply}>
            <Link to={`/apply`}>Agree</Link>
            
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <Footer /> */}
      
    </div>
  );
};

export default JobCard;
