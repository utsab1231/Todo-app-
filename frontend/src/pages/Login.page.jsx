import { useState } from "react";
import axios from "axios";
import { LOGIN_URL } from "../services/apiConstant.js";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = (user, setUser) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(LOGIN_URL, form)
      .then((res) => {
        toast.success("Login Success");
        localStorage.setItem("user", JSON.stringify(res.data.data));

        setTimeout(() => {
          navigate("/");
        }, 2000);
        return;
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  // const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  return (
    <div className="h-screen flex bg-[#051923]">
      <div className="w-full max-w-md m-auto bg-[#051922] rounded-lg border border-primaryBorder shadow-default py-10 px-16 text-white">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to your account 🔐
        </h1>

        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className={`w-full p-2 text-black border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="username"
              placeholder="Your Username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`w-full p-2 text-black border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              placeholder="Your Password"
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              className={`bg-blue py-2 px-4 text-sm text-white rounded border hover:bg-blue-600`}
              onClick={handleFormSubmit}
            >
              Login
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
