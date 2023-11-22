import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import ProjectsIndex from "./pages/projects/Index";
import ProjectsShow from "./pages/projects/Show";

// Import Components
import Navbar from "./components/Navbar";
import NavigateExample from "./pages/NavigateExample";
import Footer from "./components/Footer";
import { Flowbite, DarkThemeToggle } from "flowbite-react";

const App = () => {
  return (
    <Router>
      <Flowbite>
      <div className="flex flex-row">
        <Navbar />
        <div className="mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<ProjectsIndex />} />
            <Route path="/nav-example" element={<NavigateExample />} />
            <Route path="/projects/:slug" element={<ProjectsShow />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
      </Flowbite>
    </Router>
  );
};

export default App;
