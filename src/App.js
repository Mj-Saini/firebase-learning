import "./App.css";
import Auth from "./components/Auth";
import GetData from "./components/GetData";
import AgainGetData from "./components/AgainGetData";
import SingleData from "./components/SingleData";
import UserCard from "./components/UserCard";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import PersonsData from "./components/PersonsData";
import People from "./components/People";
import "react-toastify/dist/ReactToastify.css";
import CreateUser from "./components/new-firebase/CreateUser";
import GetUser from "./components/new-firebase/GetUser";
import UserAllData from "./components/new-firebase/UserAllData";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignIn";
import Authentication from "./components/auth/Authentication";
import WriteData from "./components/Realtime-database/WriteData";

function App() {
  return (
    <>
      {/* <Auth /> */}
      {/* <GetData /> */}
      {/* <AgainGetData /> */}
      {/* <SingleData /> */}
      <WriteData/>

      <Routes>
        {/* <Route path="/" element={<Authentication />} /> */}

        {/* <Route path="/" element={<GetUser />} />
        <Route path="/user-details/:id" element={<UserAllData />} />
        <Route path="/user-update/:id" element={<CreateUser />} /> */}
        {/* <Route path="/" element={<PersonsData />} /> */}
        {/* <Route path="/person-details/:id" element={<People />} /> */}
      </Routes>
    </>
  );
}

export default App;
