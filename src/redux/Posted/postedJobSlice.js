import { createSlice } from "@reduxjs/toolkit";
import Moment from "moment";

export const postedJobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    students:[],
    searchValue: "",
    filteredJobs: [],
    filteredStudents:[],
  },
  reducers: {
    addJob: (state, action) => {
    state.jobs = [...state.jobs, { ...action.payload, createdAt: Moment().format("DD/MM/YYYY") }];
    state.filteredJobs = [...state.jobs];
    
    },
    deleteJob: (state, action) => {
      console.log("Hi delete the job")
      state.jobs = state.jobs.filter((job) => job.id !== action.payload);
      state.filteredJobs = state.jobs;
      console.log(state.jobs)
    },
    editJob: (state, action) => {
      const { id, companyName, title, text, salary  } = action.payload;
      const index = state.jobs.findIndex(job => job.id === id);
      state.jobs[index].title = title;
      state.jobs[index].text = text;
      state.jobs[index].salary = salary;
      state.jobs[index].companyName = companyName;
      state.filteredJobs = state.jobs;
    },
    search: (state, action) => {
      state.searchValue = action.payload;
      if (state.searchValue !== '') {
        state.filteredJobs = state.jobs.filter((job) =>
          job.text.toLowerCase().indexOf(state.searchValue.toLowerCase()) !== -1 
        );
      } else {
        state.filteredJobs = state.jobs;
      }    
    },
    addStudent: (state, action) => {
      state.students = [...state.students, { ...action.payload, createdAt: Moment().format("DD/MM/YYYY") }];
      state.filteredStudents = [...state.students];
      
      },
  },
});

export const { addJob, deleteJob, editJob, search ,addStudent } = postedJobSlice.actions;

export default postedJobSlice.reducer;
