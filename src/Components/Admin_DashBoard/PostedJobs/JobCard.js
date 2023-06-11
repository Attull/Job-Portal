import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { deleteJob } from "../../../redux/Posted/postedJobSlice";
import EditJob from "./EditJob";

const JobCard = (props) => {

    const { id,companyName, title, text, salary,lastDate} = props;
    const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
    <div className="card h-100 border-0 shadow col-5 m-3" >
<div className="card-body d-flex flex-column align-items-start">
  <h4 className="card-title">{companyName}</h4>
  <h4 className="card-title">{title}</h4>
 
  <p className="card-text">{text}</p>
  <ul>
    <li>Salary : {salary}</li>
    <li>Last Date to Apply : {lastDate}</li>
  </ul>


</div>
<div className="card-footer bg-transparent d-flex justify-content-between pt-2">
  <div>
    <BsTrash
      size="1.3rem"
      className="icon"
      onClick={() => dispatch(deleteJob(id))}
    />
    <FiEdit
      size="1.3rem"
      className="icon"
      onClick={() =>setModalShow(true) }
    />
  </div>
</div>
</div>
<EditJob
show={modalShow}
onHide={() => setModalShow(false)}
jobToEdit={{id,title,companyName,salary,text}}
/>
</>
  )
}

export default JobCard