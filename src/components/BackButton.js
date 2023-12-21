import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

// Accepts additional className and Button variant types
const BackButton = ({ className = "", variant = "text", text = null }) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)} // Uses naviagte history to bring user back one page
      variant={variant}
      size="sm"
      className={`flex items-center gap-3 text-white ${className}`} // Only adds if className props were included
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        dataSlot="icon"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
          clipRule="evenodd"
        />
      </svg>

      {text ? <p>Back</p> : ""}
    </Button>
  );
};

export default BackButton;
