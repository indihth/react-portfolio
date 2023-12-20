import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import ProjectsIndex from "./pages/projects/Index";
import ProjectsShow from "./pages/projects/Show";
// import ProjectsDemo from "./pages/projects/Demo";

// Import Components
import Navbar from "./components/Navbar";
import NavigateExample from "./pages/NavigateExample";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-row bg-white dark:bg-slate-800">
        <Navbar />
        <div className="mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsIndex />} />
            <Route path="/projects/:slug" element={<ProjectsShow />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/projects/:slug/demo" element={<ProjectsDemo />} /> */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
