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
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h2 className="text-3xl font-light tracking-wide text-seasalt">
        {cafeInfo.menuTitle}
      </h2>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setSelected(c)}
            className={
              c === selected
                ? "border-b border-seasalt pb-1 text-seasalt"
                : "pb-1 text-battleship hover:text-silver"
            }
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-8">
        {shownItems.map((item) => (
          <li
            key={item.id}
            className="flex items-baseline justify-between gap-6 border-b border-vandyke py-4"
          >
            <div>
              <h3 className="text-seasalt">{item.name}</h3>
              <p className="text-sm text-battleship">{item.description}</p>
            </div>
            <span className="text-silver">₱{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}