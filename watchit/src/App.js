import React from "react";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import TopCharts from "./Components/TopCharts";
import Movies from "./Components/Movies";

const AppContent = () => {
  const location = useLocation();
  return ( 
    <>
      <Header />      
      {location.pathname === "/" && <Banner />}        
      <Routes>
        <Route path="/" element = {<TopCharts />} />
        <Route path="/movies" element = {<Movies />} />
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