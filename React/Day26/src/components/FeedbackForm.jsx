import { useRef } from "react";

const FeedbackForm = () => {
  const nameRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const message = messageRef.current.value;

    alert(`Name: ${name}\nMessage: ${message}`);

    // ✅ Clear inputs manually
    nameRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-3 mt-6"
    >
      <h2 className="text-xl font-bold">Feedback Form</h2>

      <input
        ref={nameRef}
        type="text"
        placeholder="Enter your name"
        className="border px-4 py-2 rounded"
      />

      <textarea
        ref={messageRef}
        placeholder="Enter your message"
        className="border px-4 py-2 rounded"
      ></textarea>

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;