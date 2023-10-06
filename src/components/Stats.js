export default function Stats({ items }) {
  // if there are no items
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  // getting the number of items
  const numItems = items.length;
  // getting the number of items packed
  const numPacked = items.filter((item) => item.packed).length;
  // getting the percentage of items packed
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
