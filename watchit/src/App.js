import React from "react";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import TopCharts from "./Components/TopCharts";
import Movies from "./Components/Movies";
import TVShows from "./Components/TVShows";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

const AppContent = () => {
  const location = useLocation();
  return ( 
    <>
      <Header />      
      {location.pathname === "/" && <Banner />}        
      <Routes>
        <Route path="/" element = {<TopCharts />} />
        <Route path="/movies" element = {<Movies />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;