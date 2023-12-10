import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../store/feature/userSlice.js";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    localStorage.removeItem("user");
    dispatch(logoutAction());
    navigate("/login");
  };
  return (
    <div className="navbar bg-[#3e5c76] shadow-lg ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <div className="logo text-3xl font-bold text-white">TO-DO</div>
          <div className="hidden md:flex items-center space-x-10">
            <div className="hover:text-white">
              <NavLink to="/" className="text-xl font-semibold">
                Home
              </NavLink>
            </div>
            <div className="hover:text-white text-xl font-semibold">
              <NavLink to="/about">About Us</NavLink>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <div className="">
              {user ? (
                <div className="flex">
                  <NavLink
                    className="text-xl font-semibold  px-2 py-1 rounded-xl mx-2 hover:text-white"
                    onClick={handleClick}
                  >
                    Logout
                  </NavLink>
                  <div className="hidden md:flex items-center space-x-10 ">
                    <input
                      className="form-input p-2 rounded-md"
                      type="text"
                      placeholder="Search..."
                    />
                  </div>
                </div>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="text-xl font-semibold  px-2 py-1 rounded-xl mx-1 hover:text-white"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="text-xl font-semibold  px-2 py-1 rounded-xl mx-2 hover:text-white"
                  >
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={toggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white fill-current"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden absolute w-full left-0 top-20 bg-white shadow-lg py-2 space-y-2">
            <NavLink
              to="/"
              className="block pl-4 pr-8 py-2 text-base font-medium text-gray-900 border-r-4 border-transparent hover:text-purple-700 hover:border-purple-500"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block pl-4 pr-8 py-2 text-base font-medium text-gray-900 border-r-4 border-transparent hover:text-purple-700 hover:border-purple-500"
            >
              About Us
            </NavLink>

            {user ? (
              <div>
                <NavLink
                  className="block pl-4 pr-8 py-2 text-base font-medium text-gray-900 border-r-4 border-transparent hover:text-purple-700 hover:border-purple-500"
                  onClick={handleClick}
                >
                  Logout
                </NavLink>
                <div className="flex items-center space-x-10 ">
                  <input
                    className="form-input p-2 rounded-md w-full mt-2 text-center"
                    type="text"
                    placeholder="Search..."
                  />
                </div>
              </div>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="block pl-4 pr-8 py-2 text-base font-medium text-gray-900 border-r-4 border-transparent hover:text-purple-700 hover:border-purple-500"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="block pl-4 pr-8 py-2 text-base font-medium text-gray-900 border-r-4 border-transparent hover:text-purple-700 hover:border-purple-500"
                >
                  Register
                </NavLink>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
