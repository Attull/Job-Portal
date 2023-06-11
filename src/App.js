import { Route, Routes } from "react-router-dom";
import "./App.css";
// import FetchData from './jobs/FetchData';
import Login from "./Login/Login";
import Home from "./Components/Home";
import { AllJobs } from "./Components/JobPage/AllJobs";
import { GlobalProvider } from "./context/GlobalProvider";
import JobCard from "./Components/JobPage/JobCard";
import { Profile } from "./Components/Profile_page/Profile";
import AdminLandingPage from "./Components/Admin_DashBoard/AdminLandingPage";
import AddJob from "./Components/Admin_DashBoard/AddJobModal/AddJob";
import LatestJobs from "./Components/Admin_DashBoard/PostedJobs/LatestJobs";
import AddStudents from "./Components/Admin_DashBoard/Students/AddStudents";
import Menu from "./Components/Admin_DashBoard/Menu/Menu";
import DSView from "./Components/Admin_DashBoard/Menu/DSView";
import FSDView from "./Components/Admin_DashBoard/Menu/FSDView";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/JobVacancy" element={<AllJobs />}></Route>
          <Route index path="/login" element={<Login />} />
          <Route path="/JobVacancy/:Id" element={<JobCard />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/admin_dashborad" element={<AdminLandingPage/>}>
            <Route path='menu' element={<Menu/>}>
              <Route path="dsview" element={<DSView/>}/>
              <Route path="fsdview" element={<FSDView/>}/>
            </Route>
            <Route  path="AddNewJob" element={<AddJob/>}/>
            <Route path='latest' element={<LatestJobs/>}/>
            <Route path='Add_student_details' element={<AddStudents/>}/>
          </Route>
        </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;
