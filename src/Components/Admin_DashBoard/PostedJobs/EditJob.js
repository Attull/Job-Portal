import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editJob } from "../../../redux/Posted/postedJobSlice";

const EditJob = (props) => {
  const { show, onHide, jobToEdit } = props;

  const dispatch = useDispatch();
  const [title, setTitle] = useState(jobToEdit ? jobToEdit.title : "");
  const [text, setText] = useState(jobToEdit ? jobToEdit.text : "");
  const [salary, setSalary] = useState(jobToEdit ? jobToEdit.salary : "");
  const [companyName, setCompanyName] = useState(
    jobToEdit ? jobToEdit.companyName : ""
  );

  const handleJobEdit = () => {
    const editedJob = {
      title,
      text,
      salary,
      companyName,
      id: jobToEdit.id,
    };
    dispatch(editJob(editedJob));
    onHide();
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

  return (
    <>
      
      <div className={`modal ${show ? 'd-block' : 'd-none'} mt-0`} tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Note</h5>
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
                <div className="form-group mb-2">
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
              </form>
            </div>
            <div className="modal-footer mt-2">
             
              <button type="button"  onClick={onHide} className="btn btn-dark" >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary text-light"
                onClick={handleJobEdit}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditJob;
