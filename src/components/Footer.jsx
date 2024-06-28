import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faPlus,
  faUser
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex justify-around items-center md:hidden">
      <div>
        <Link to="/home" className="text-gray-700 hover:text-black flex flex-col items-center">
          <FontAwesomeIcon icon={faHome} />
          <span className="text-xs">Home</span>
        </Link>
      </div>
      <div>
        <Link to="/search" className="text-gray-700 hover:text-black flex flex-col items-center">
          <FontAwesomeIcon icon={faSearch} />
          <span className="text-xs">Search</span>
        </Link>
      </div>
      <div>
        <Link to="/create" className="text-gray-700 hover:text-black flex flex-col items-center">
          <FontAwesomeIcon icon={faPlus} />
          <span className="text-xs">Add</span>
        </Link>
      </div>
      <div>
        <Link to="/profile" className="text-gray-700 hover:text-black flex flex-col items-center">
          <FontAwesomeIcon icon={faUser} />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
