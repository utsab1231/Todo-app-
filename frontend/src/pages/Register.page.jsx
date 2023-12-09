import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { REGISTER_URL } from "../services/apiConstant.js";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(REGISTER_URL, formData)
      .then((res) => {
        toast.success(
          `User ${res.data.data.username}  registered Successfully`
        );
        localStorage.setItem("user", JSON.stringify(res.data.data));
        setTimeout(() => {
          navigate("/");
        }, 2000);
        return;
      })
      .catch((err) => {
        toast(err.response.data.message);
        return;
      });
  };

  return (
    <div className="h-screen flex bg-[#051923]">
      <div className="w-full max-w-md m-auto bg-[#051922] rounded-lg border border-primaryBorder shadow-default py-10 px-16 text-white">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Register your account 🔐
        </h1>

        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className={`w-full p-2 text-black border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="name"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className={`w-full p-2 text-black border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="username"
              placeholder="Your Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={`w-full p-2 text-black border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              className={`bg-blue py-2 px-4 text-sm text-white rounded border hover:bg-blue-600`}
              onClick={handleFormSubmit}
            >
              Register
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
