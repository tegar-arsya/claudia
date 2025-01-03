import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Menu, X, Bell, User } from "lucide-react";
import logo from "../assets/logo/NONTON-YUK.png";

const Navbar = () => {
  const { userData, isLoggedIn } = useSelector((state: RootState) => state.login);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="TIX ID" className="h-8 w-auto md:h-10" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/my-ticket" className="nav-link">My Tickets</Link>
            <Link to="/news" className="nav-link">NONTON YUK News</Link>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>
            
            {!isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/signup"
                  className="text-gray-900 hover:text-gray-600 font-medium"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="bg-royal-blue text-sunshine-yellow px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                >
                  Login
                </Link>
              </div>
            ) : (
              <Link
                to="/account"
                className="flex items-center space-x-2 bg-royal-blue text-sunshine-yellow px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                <User className="h-5 w-5" />
                <span>{userData.name}</span>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              Home
            </Link>
            <Link
              to="/my-ticket"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              My Tickets
            </Link>
            <Link
              to="/news"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              NONTON YUK News
            </Link>
            
            {!isLoggedIn ? (
              <div className="space-y-2 pt-4">
                <Link
                  to="/login"
                  className="block w-full text-center bg-royal-blue text-sunshine-yellow px-4 py-2 rounded-md font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block w-full text-center border border-gray-300 text-gray-900 px-4 py-2 rounded-md font-medium"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <Link
                to="/account"
                className="block w-full text-center bg-royal-blue text-sunshine-yellow px-4 py-2 rounded-md font-medium mt-4"
              >
                {userData.name}
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;