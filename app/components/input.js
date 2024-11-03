export function Input({ type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-gray-300 p-3 rounded-md w-full"
    />
  );
}
