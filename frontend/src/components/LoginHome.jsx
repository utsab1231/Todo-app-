import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoMethod from "./TodoMethod.jsx";
import { ADD_TODO_URL } from "../utils/constants.js";
import { toast, ToastContainer } from "react-toastify";
import { loginAction } from "../store/feature/userSlice.js";

import axios from "axios";

function LoginHome() {
  const user = JSON.parse(useSelector((state) => state.user));
  const dispatch = useDispatch();
  const handleAddTodo = async () => {
    try {
      const headers = { auth: user.token };
      const data = { description: input };
      console.log(data);
      await axios.post(ADD_TODO_URL, data, { headers });
      setInput("");
      toast.success("Todo added successfully");
      dispatch(loginAction(localStorage.getItem("user")));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const [input, setInput] = useState("");
  return (
    <div className="bg-[#051923] w-full min-h-screen">
      <div className="flex justify-center gap-2 p-3 ">
        <input
          className="border-2 border-[#899878] rounded-lg px-2 py-1 w-[50%]"
          type="text"
          placeholder="Todo desription "
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className="text-white border border-white px-2 py-3 rounded-xl hover:bg-blue-600 font-bold"
          onClick={handleAddTodo}
        >
          Add todo
        </button>
      </div>
      <ToastContainer />
      <TodoMethod />
    </div>
  );
}

export default LoginHome;
