import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Hiring from "../../assests/images/Hiring.svg";
import { GlobalContext } from "../../context/GlobalProvider";
import NavForUser from "../navbar/NavForUser";

export const AllJobs = () => {
  const { state, handleFunction } = useContext(GlobalContext);

  const {
    dataJob,
    setDatajob,
    fetchStatus,
    setFetchStatus,
    filterStateJobType,
    setFilterStateJobType,
    filterStateCity,
    setFilterStateCity,
    search,
  } = state;

  const {
    handleSearchInput,
    handleSearchSubmit,
    handleChangeFilter,
    handleFilterSubmit,
  } = handleFunction;

  useEffect(() => {
    let removeDuplicateJobType = (param) => {
      let tmp = [];

      for (let i of param) {
        if (tmp.indexOf(i.job_type) === -1) {
          tmp.push(i.job_type);
        }
      }

      return tmp;
    };
    let insertFilterStateJobType = (param) => {
      let tmp = [];
      param.map((res) => {
        tmp.push({ job_type: res.job_type });
      });
      return tmp;
    };
    let removeDuplicateCity = (param) => {
      let tmp = [];

      for (let i of param) {
        if (tmp.indexOf(i.company_city) === -1) {
          tmp.push(i.company_city);
        }
      }

      return tmp;
    };
    let insertFilterStateCity = (param) => {
      let tmp = [];
      param.map((res) => {
        tmp.push({ company_city: res.company_city });
      });
      return tmp;
    };

    if (fetchStatus) {
      axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
            console.log(res.data.data)
          setDatajob(res.data.data);
          let data = res.data.data;
          let temp1 = insertFilterStateJobType(data);
          let temp2 = removeDuplicateJobType(temp1);
          setFilterStateJobType(temp2);
          temp1 = insertFilterStateCity(data);
          temp2 = removeDuplicateCity(temp1);
          setFilterStateCity(temp2);
        });
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  return (
    <div className="container-fluid">
        <NavForUser />
      <section className=" p-3">
        <div className="JobPage_header row">
          <div className="col-sm-12 col-md-8 col-lg-7 ">
            {/* Search Data */}
            <form onSubmit={handleSearchSubmit} className="w-100">
              <label htmlFor="default-search" className="mb-2 text-white">
                Search
              </label>
              <div className="position-relative d-flex align-items-center ">
                <div className="position-absolute  left-0 ">
                  <i class="fa-solid fa-magnifying-glass fa-lg"></i>
                </div>
                <input
                  onChange={handleSearchInput}
                  value={search}
                  type="search"
                  id="default-search"
                  className="w-100 p-2 ps-5 text-sm text-gray"
                  placeholder="Search Job location, position..."
                />
                <button
                  type="submit"
                  className="button1 position-absolute  end-0 "
                  style={{backgroundColor:"#ff641a"}}
                >
                  Search
                </button>
              </div>
            </form>

            {/* Filter DAta */}
            <form className="mt-3 text-left " onSubmit={handleFilterSubmit}>
              <div className="mt-2">
                <label htmlFor="job_type" className="mb-2 text-white">
                  Job Type
                </label>
                <select
                  name="job_type"
                  id="Job_type"
                  onChange={handleChangeFilter}
                  className="w-100 p-1 text-sm text-gray "
                >
                  <option value="Job Type">Job Type...</option>
                  {filterStateJobType !== null && (
                    <>
                      {filterStateJobType.map((res) => {
                        return (
                          <>
                            <option defaultValue={`${res}`}>{res}</option>
                          </>
                        );
                      })}
                    </>
                  )}
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor="job_type" className="mb-2 text-white">
                  City
                </label>
                <select
                  name="company_city"
                  id="company_city"
                  onChange={handleChangeFilter}
                  className="w-100 p-1 text-sm text-gray "
                >
                  <option value="Job Type">Job City...</option>
                  {filterStateCity !== null && (
                    <>
                      {filterStateCity.map((res) => {
                        return (
                          <>
                            <option defaultValue={`${res}`}>{res}</option>
                          </>
                        );
                      })}
                    </>
                  )}
                </select>
              </div>

              <button
                type="submit"
                className="button1 mt-4 px-5 py-2"
                style={{backgroundColor:"#ff641a"}}
              >
                Filter
              </button>
            </form>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-5">
            <img src={Hiring} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="py-8 px-4 mx-auto  py-lg-16 px-lg-6 ">
          <div className="row mb-5  mb-lg-16 " >
           
          {dataJob !== null &&
            dataJob.map((res) => {
              return (
                <div className="col-sm-12 col-md-6" sm={2}>
                <Link
                  to={`/JobVacancy/${res.id}`}
                  key={res.id}
                  className="row bg-white border rounded m-4"
                >
                  <img
                    className="img-fluid rounded col-sm-12 col-md-4 p-3"
                    src={res.company_image_url}
                    alt=""
                    width="150vw"
                  />
                  <div className="d-flex flex-column justify-content-between  p-4 col-sm-12 col-md-8">
                    <h5 className="mb-2 font-bold ">
                      {res.title + " (" + res.job_tenure + ")"}
                    </h5>
                    <p className="mb-3 font-normal ">
                      {res.company_name}
                    </p>
                    <p className="mb-3 font-normal">
                      {res.company_city + "," + res.job_type}
                    </p>
                  </div>
                </Link>
                </div>
              );
            })}
        </div>

        </div>

       
      </section>
    </div>
  );
};
