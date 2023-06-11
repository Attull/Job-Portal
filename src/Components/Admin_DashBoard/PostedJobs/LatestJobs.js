import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "./NotFound";
import JobCard from "./JobCard";

const LatestJobs = () => {
//   const [modalShow, setModalShow] = useState(false);
//   const dispatch = useDispatch();

  const jobs = useSelector((state) => state.jobs.filteredJobs);

  return (
    <>
      <div className="row">
        {jobs && jobs.length !== 0 ? (
          jobs.map((job) => <JobCard key={job.id} {...job} />)
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
};

export default LatestJobs;
