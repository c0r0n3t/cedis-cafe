import { useState } from "react";
import { Link } from "react-router-dom";
import cafeInfo from "../data/cafeInfo";
import menuItems from "../data/menuItems";

export default function Menu() {
  const [selected, setSelected] = useState(cafeInfo.allLabel);
  const [search, setSearch] = useState("");

  const categories = [
    cafeInfo.allLabel,
    ...new Set(menuItems.map((item) => item.category)),
  ];

  const shownItems = menuItems
    .filter((item) => selected === cafeInfo.allLabel || item.category === selected)
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="relative h-56 w-full overflow-hidden md:h-72">
        <img
          src={cafeInfo.menuImage}
          alt={cafeInfo.menuImageAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10">
        <h2 className="text-3xl font-light tracking-wide text-seasalt">
          {cafeInfo.menuTitle}
        </h2>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={cafeInfo.searchPlaceholder}
          className="mt-6 w-full border-b border-battleship bg-transparent py-2 text-seasalt placeholder-battleship outline-none focus:border-seasalt"
        />

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
            <li key={item.id} className="border-b border-vandyke">
              <Link
                to={`/menu/${item.id}`}
                className="flex items-baseline justify-between gap-6 py-4 hover:text-seasalt"
              >
                <div>
                  <h3 className="text-seasalt">{item.name}</h3>
                  <p className="text-sm text-battleship">{item.description}</p>
                </div>
                <span className="text-silver">{item.getFormattedPrice()}</span>
              </Link>
            </li>
          ))}
        </ul>

        {shownItems.length === 0 && (
          <p className="mt-8 text-battleship">{cafeInfo.noResultsText}</p>
        )}
      </div>
    </div>
  );
}