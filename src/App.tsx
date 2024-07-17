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
import NotFound from "./pages/notfound/NotFound";
import LoadBlog from "./pages/blog/load_blog/loadBlog";

import { Helmet } from 'react-helmet'

const App = () => {
  const [route, setRoute] = useState("");

  useEffect(() => {

    const pathToRouteName: {[key: string]: string} = {
      "/": "About",
      "/contact": "Contact",
      "/blog": "Blog",
      "/proj": "Project",
      "/blog/blog": "Blog"
    };
    // pathToRouteName[location.pathname]
    setRoute(pathToRouteName[window.location.pathname] || "404");
  }
  , []);

  return (
    <Router>
      <div className="relative flex flex-col bg-blue-950 max-w-screen min-h-screen">

        <Helmet>
          <title>{route} | byk</title>
        </Helmet>

        <Navbar />

        <Routes>
          
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/proj" element={<Proj />} />
          <Route path="/blog/blog" element={<LoadBlog />} /> {/* Corrected component name */}
          <Route path="*" element={<NotFound />} />
 
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
 
export default App;