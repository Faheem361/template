import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Footer from "../components/Footer/Footer";
import RoadMap from "../pages/roadMap";
import Navbar from "../pages/header"
const PublicRoutes = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/roadmap" element={<RoadMap/>}></Route>
      {/* <Route path="/roadmap" element={<roadMap/>}></Route> */}
      </Routes>
      <Footer />
    </Router>
  );
};
export default PublicRoutes;
