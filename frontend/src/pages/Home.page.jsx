import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../store/feature/userSlice.js";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginAction(localStorage.getItem("user")));
  }, [dispatch]);
  const user = useSelector((state) => state.user);

  return user ? (
    <button>Welcome. Click Here</button>
  ) : (
    <div className="w-full h-screen bg-[#051923] text-white overflow-hidden ">
      <section className="flex flex-col items-center pt-24 w-[98%]">
        <h1 className="text-9xl ">
          <span className="text-red-400 font-poppins font-semibold">TO</span>-
          <span className="text-blue-300 font-poppins font-semibold">DO</span>
        </h1>
        <p className="text-lg text-[#899878]">WHERE TODOS ARE CREATED</p>
      </section>
      <section className="flex justify-center pt-24 gap-16">
        <Link
          to="/login"
          className="border-2 rounded-full px-4 py-2 text-2xl text-center hover:shadow-lg hover:shadow-white"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="border-2 rounded-full px-4 py-2 text-2xl text-center hover:shadow-lg hover:shadow-white"
        >
          Register
        </Link>
      </section>
    </div>
  );
}

export default Home;
