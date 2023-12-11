import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../store/feature/userSlice.js";
import { DELETE_TODO_URL, UPDATE_TODO_URL } from "../utils/constants.js";
import { ToastContainer, toast } from "react-toastify";

function TodoCard({ todo }) {
  const dateDiff = (new Date() - new Date(todo.createdAt)) / (1000 * 60 * 60);
  const user = JSON.parse(useSelector((state) => state.user));
  const dispatch = useDispatch();

  const [isUpdate, setIsUpdate] = useState(false);
  const [updateValue, setUpdateValue] = useState(todo.description);

  const handleDeleteTodo = async (id) => {
    try {
      const headers = { auth: user.token };

      const data = { todo_id: id };

      await axios.post(DELETE_TODO_URL, data, { headers });
      toast.success("Todo deleted successfully");
      dispatch(loginAction(localStorage.getItem("user")));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleUpdateTodo = async (id) => {
    try {
      const headers = { auth: user.token };
      const data = { todo_id: id, description: updateValue };
      await axios.post(UPDATE_TODO_URL, data, { headers });
      toast.success("Todo updated successfully");
      setIsUpdate(!isUpdate);
      dispatch(loginAction(localStorage.getItem("user")));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-black shadow-md rounded-md p-4 w-[1/3] m-4 h-72">
      {isUpdate ? (
        <textarea
          value={updateValue}
          onChange={(e) => setUpdateValue(e.target.value)}
          className="w-full h-24 text-black p-2 rounded-sm"
        />
      ) : (
        <h2 className="text-lg font-semibold mb-2 h-24">{updateValue}</h2>
      )}

      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox rounded text-blue-500 mr-2"
        />
        <span className="text-gray-700 text-md">Completed</span>
      </label>

      {/* <!-- Created At Date --> */}
      <p className="text-sm text-gray-500 mt-2 mb-4 p-2">
        Created
        {dateDiff < 24
          ? ` ${dateDiff.toFixed(2)} hours ago`
          : ` ${(dateDiff / 24).toFixed(2)} days ago`}
      </p>

      {/* <!-- Buttons --> */}
      <div className="flex justify-between items-center">
        {isUpdate ? (
          <>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={() => handleUpdateTodo(todo._id)}
            >
              Update
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
              onClick={() => {
                setIsUpdate(!isUpdate);

                setUpdateValue(todo.description);
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={() => setIsUpdate(!isUpdate)}
            >
              Update
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
              onClick={() => handleDeleteTodo(todo._id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

TodoCard.propTypes = {
  todo: PropTypes.object.isRequired,
};
export default TodoCard;
