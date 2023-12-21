import { useState } from "react";
import { Link } from "react-router-dom";

// Import components
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div class="flex gap-6 bg-black pt-5 ps-8 shadow-xl text-sm text-gray-600 tracking-widest rounded">
      <Link to="/" className="hover:text-white">Homepage</Link> /
      <Link to="/projects" className="hover:text-white">Projects</Link> /
      <Link to="/about" className="hover:text-white">About</Link> 
    </div>
    // <div className="group relative cursor-pointer p-6 w-fit">
    //   <i class="fa-solid fa-bars text-xl"></i>

    //   <div class="invisible absolute z-50 flex flex-col gap-6 bg-black p-4 shadow-xl group-hover:visible text-sm tracking-widest rounded">
    //     <Link to="/">Homepage</Link>
    //     <Link to="/projects">Projects</Link>
    //     <Link to="/about">About</Link>
    //   </div>
    // </div>
  );
};

export default Navbar;
