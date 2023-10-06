import { useState } from "react";

export default function Form({ onAddItems }) {
  // adding state
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // listining for the HTML form submit and what to do after.
  function handleSubmit(e) {
    // stops HTML bug
    e.preventDefault();

    // gaurd clause (if desc. is empty);
    if (!description) return;

    // new item object, when button is clicked
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    // setting it back to its initial state
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 🤷🏽‍♂️</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* This makes an array from 1 to 20 */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
