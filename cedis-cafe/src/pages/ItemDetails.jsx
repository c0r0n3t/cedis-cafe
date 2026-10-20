import { Link, useParams } from "react-router-dom";
import cafeInfo from "../data/cafeInfo";
import menuItems from "../data/menuItems";

export default function ItemDetails() {
  const { id } = useParams();
  const item = menuItems.find((m) => m.id === Number(id));

  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <Link to="/menu" className="text-sm text-battleship hover:text-seasalt">
        {cafeInfo.backLabel}
      </Link>

      {item ? (
        <div className="mt-8">
          <p className="text-sm uppercase tracking-widest text-battleship">
            {cafeInfo.categoryLabel}: {item.category}
          </p>
          <h2 className="mt-2 text-4xl font-light tracking-wide text-seasalt">
            {item.name}
          </h2>
          <p className="mt-4 text-silver">{item.description}</p>
          <p className="mt-6 text-2xl text-seasalt">{item.getFormattedPrice()}</p>
        </div>
      ) : (
        <p className="mt-8 text-silver">{cafeInfo.notFoundText}</p>
      )}
    </div>
  );
}