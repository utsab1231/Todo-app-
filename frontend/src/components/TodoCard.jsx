import PropTypes from "prop-types";

function TodoCard({ todo }) {
  const dateDiff = (new Date() - new Date(todo.createdAt)) / (1000 * 60 * 60);

  return (
    <div className="bg-black shadow-md rounded-md p-4 w-[1/3] m-4 h-72">
      <h2 className="text-lg font-semibold mb-2 h-24">{todo.description}</h2>

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
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          Update
        </button>

        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300">
          Delete
        </button>
      </div>
    </div>
  );
}

TodoCard.propTypes = {
  todo: PropTypes.object.isRequired,
};
export default TodoCard;
