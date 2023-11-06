import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import ProjectsIndex from './pages/projects/Index'


import Navbar from './components/Navbar'
import NavigateExample from './pages/NavigateExample';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className=' mx-auto'>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectsIndex />} />
        <Route path="/nav-example" element={<NavigateExample />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>


      </div>
      <Footer />
    </Router>
  );
}

export default App;
