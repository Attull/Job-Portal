import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJob } from "../../../redux/Posted/postedJobSlice";
import { useNavigate } from "react-router-dom";

const AddJob = (props) => {
  // const { show, onHide } = props;
  let id;
const navigator = useNavigate()
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [salary, setSalary] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [lastDate, setLastDate] = useState("");


  const jobs = useSelector((state) => state.jobs.filteredJobs);

  // const initialState=[{
  //   companyName:"",
  //   title:"",
  //   text:"",
  //   salary:"",
    
  // }]
  // const [data , setData] = useState(initialState)

  const handleJobAdd = () => {
    const newJob = {
      title,
      text,
      salary,
      companyName,
      lastDate,
      id:id?(jobs[jobs.length-1].id+1):0,
    };
    dispatch(addJob(newJob));
    navigator('/admin_dashborad/latest')
    setTitle("");
    setText("");
    setLastDate("")
    // onHide();
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSalary = (event) => {
    setSalary(event.target.value);
  };
  const handleCompanyName = (event) => {
    setCompanyName(event.target.value);
  };
  const handleDateChange = (event) => {
    setLastDate(event.target.value);
  };
  return (
    <>
      {/* {`modal ${show ? 'd-block' : 'd-none'}`} */}
      <div className="" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Job</h5>
            </div>
            <div className="modal-body">
              <form>
              <div className="form-group mb-2">
                  <label htmlFor="Company">Company Name</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    id="Company"
                    value={companyName}
                    onChange={handleCompanyName}
                    autoFocus
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    id="title"
                    value={title}
                    onChange={handleTitleChange}
                    autoFocus
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control mt-1"
                    id="description"
                    rows="3"
                    value={text}
                    onChange={handleTextChange}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-between">
                <div className="form-group mb-2 w-50">
                <label htmlFor="salary">salary</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    id="salary"
                    value={salary}
                    onChange={handleSalary}
                    autoFocus
                  />
                </div>
                <div className="form-group mb-2 w-50">
                  <label htmlFor="lastDate">Last Date To Apply</label>
                  <input
                    type="date"
                    className="form-control mt-1"
                    id="lastDate"
                    value={lastDate}
                    onChange={handleDateChange}
                    autoFocus
                  />
                </div>
                </div>
              </form>
            </div>
            <div className="modal-footer mt-2">
            {/* onClick={onHide} */}
              {/* <button type="button" className="btn btn-dark" >
                Close
              </button> */}
              <button
                type="button"
                className="btn btn-primary text-light"
                onClick={handleJobAdd}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddJob;
