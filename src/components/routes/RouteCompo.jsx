import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "../styles/Loading.css";
// import VideoTut from './components/VideoTutorialComp/VideoTut'
import Navbar from "../Header $ Footer/Navbar.jsx";
// import Bird from '../components/assets/bird.png';
import  "../../App.css";
const HomePanel = lazy(()=>import("./../pages/Home/HomePanel"))
const MockTest = lazy(()=> import('./../pages/Mock/MockTest'));
const MasterCompetitiveHome = lazy(()=> import("./../pages/MasterCompitative/MasterCompitative"));
const FullStack  = lazy(()=>import('./../pages/FullStack/FullStack'));
const ElevationAcademy = lazy(()=>import('./../pages/ElevationAcademy/ElevationAcademy'));
const SignupLogin = lazy(()=>import('./../auth/SignUpLogin.jsx'))
const Dashboard = lazy(()=>import("./../pages/DashBoard/DashBoard"));
const Project = lazy(()=>import('./../pages/Projects/Projects'));
const VideoTut =lazy(()=> import('./../pages/Video/VideoTut'));

function RouteCompo() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="route-lazy-parent h-screen flex justify-center items-center">
            <img
              src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/logo.webp"
              alt="imglazy"
            />
          </div>
        }
      >
        <Navbar/>
        <Routes>
        <Route path='/' element={<HomePanel />} />
          <Route path='/mock-test' element={<MockTest />} />
          <Route path='/preparation-videos' element={<VideoTut />} />
          <Route path='/online-full-stack-developer-mern-certification-program' element={<FullStack />} />
        <Route path='/elevation-academy-mern' element={<ElevationAcademy />} /> 
        <Route path='/master-competitive-programming' element={<MasterCompetitiveHome />} />
          <Route path='/login' element={<SignupLogin />} />
          <Route path='/signup' element={<SignupLogin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/project' element={<Project />} />
       </Routes>
        {/* <ChatBot/> */}
      </Suspense>
    </BrowserRouter>
  );
}

export default RouteCompo;
