import { useState } from "react";
import cafeInfo from "../data/cafeInfo";
import menuItems from "../data/menuItems";

export default function Menu() {
  const [selected, setSelected] = useState(cafeInfo.allLabel);

  // gets each category once, with "All" first
  const categories = [
    cafeInfo.allLabel,
    ...new Set(menuItems.map((item) => item.category)),
  ];

  // keeps only the items that match the selected category
  const shownItems =
    selected === cafeInfo.allLabel
      ? menuItems
      : menuItems.filter((item) => item.category === selected);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-amber-800">{cafeInfo.menuTitle}</h2>

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="mt-4 rounded border p-2"
      >
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {shownItems.map((item) => (
          <div key={item.id} className="rounded border p-4 shadow">
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="mt-2 font-semibold">₱{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}