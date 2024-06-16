import { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

import "./App.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/about/About" //this is index.js in pages path
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Proj from "./pages/proj/Proj";

import { Helmet } from 'react-helmet'

const App = () => {
  const [route, setRoute] = useState("");

  useEffect(() => {

    const pathToRouteName: {[key: string]: string} = {
      "/": "About",
      "/contact": "Contact",
      "/blog": "Blog",
      "/proj": "Project"
    };
    
    setRoute(pathToRouteName[location.pathname]);
  }
  , []);

  // const updateRoute = (r : string) : void => {
  //   setRoute(r);
  // }

  return (
    <div className="relative flex flex-col bg-blue-900 max-w-screen min-h-screen">

      <Helmet>
        <title>{route} | byk</title>
      </Helmet>
      
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/proj" element={<Proj />} />
        </Routes>
      </Router>

      <Footer />

    </div>
  );
}
 
export default App;