import { configureStore } from "@reduxjs/toolkit";
import postedJobSlice from "./Posted/postedJobSlice";

const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('jobs', JSON.stringify(getState()));
    return result;
  };
};

const jobsStore = () => {
  if (localStorage.getItem('jobs') !== null) {
    return JSON.parse(localStorage.getItem("jobs"))
  }
};

const store = configureStore({
  reducer: {
    jobs: postedJobSlice,
  },
  preloadedState: jobsStore(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
