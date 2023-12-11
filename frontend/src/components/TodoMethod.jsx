import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { GET_TODO_URL } from "../utils/constants.js";
import TodoCard from "./TodoCard.jsx";

function TodoMethod() {
  const user = JSON.parse(useSelector((state) => state.user));
  const [userData, setuserData] = useState();

  useEffect(() => {
    const headers = { auth: user.token };

    axios.get(GET_TODO_URL, { headers }).then((res) => {
      setuserData(res.data.data);
    });
  }, [user.token]);

  return (
    <>
      <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-8 justify-center">
        {userData &&
          userData.map((todo) => <TodoCard key={todo._id} todo={todo} />)}
      </div>
    </>
  );
}
export default TodoMethod;
