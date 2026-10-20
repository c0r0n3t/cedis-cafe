import { useState } from "react";
import cafeInfo from "../data/cafeInfo";
import menuItems from "../data/menuItems";

export default function Menu() {
  const [selected, setSelected] = useState(cafeInfo.allLabel);

  const categories = [
    cafeInfo.allLabel,
    ...new Set(menuItems.map((item) => item.category)),
  ];

  const shownItems =
    selected === cafeInfo.allLabel
      ? menuItems
      : menuItems.filter((item) => item.category === selected);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-seasalt">{cafeInfo.menuTitle}</h2>

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="mt-4 rounded border border-battleship bg-vandyke p-2 text-silver"
      >
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {shownItems.map((item) => (
          <div key={item.id} className="rounded border border-battleship bg-vandyke p-4">
            <h3 className="font-bold text-seasalt">{item.name}</h3>
            <p className="text-sm text-battleship">{item.description}</p>
            <p className="mt-2 font-semibold text-silver">₱{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}