const Input = ({ handleChange }) => {
  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Type something..."
      className="border px-4 py-2 rounded"
    />
  );
};

export default Input;