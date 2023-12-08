import { useState } from "react";
import axios from "axios";
import { LOGIN_URL } from "../services/apiConstant.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);

    axios
      .post(LOGIN_URL, form)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.data));
        navigate("/");
      })
      .catch((err) => {
        setErrors(err.response.data.message);
        console.log(errors);
      });
  };

  const [form, setForm] = useState({
    username: "",
    password: "",
  });
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
