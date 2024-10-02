import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { AiOutlineWarning } from "react-icons/ai"; // Importing a warning icon

export const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full pt-60 bg-white gap-y-6">
      {/* Icon with subtle animation */}
      <AiOutlineWarning className="text-red-500 text-6xl animate-bounce" />
      
      {/* Error Message */}
      <h1 className="text-4xl md:text-5xl text-red-700 font-bold text-center animate-pulse">
        Oops! Page Not Found
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-lg text-center">
        Sorry, the page you're looking for doesn't exist. Please go back to the homepage.
      </p>

      {/* Go Back Button */}
      <Button 
        className="w-40 px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105"
        variant="destructive"
      >
        <Link to="/">Go Back</Link>
      </Button>
    </div>
  );
};
