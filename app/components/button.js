export function Button({ type = "button", children, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-gray-800 hover:bg-gray-700 text-white font-semibold p-3 rounded-md shadow-md transition-colors"
    >
      {children}
    </button>
  );
}