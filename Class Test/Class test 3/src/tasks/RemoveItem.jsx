import { useState } from "react";

function RemoveItem() {
  const [items, setItems] = useState(["A", "B", "C"]);

  const removeItem = () => {
    setItems(items.slice(0, -1));
  };

  return (
    <div>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <button onClick={removeItem}>
        Remove Last
      </button>
    </div>
  );
}

export default RemoveItem