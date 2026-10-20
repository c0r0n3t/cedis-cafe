import { Link } from "react-router-dom";
import cafeInfo from "../data/cafeInfo";

export default function Home() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold text-seasalt">{cafeInfo.name}</h2>
      <p className="mt-2 text-silver">{cafeInfo.tagline}</p>
      <p className="mt-2 text-battleship">{cafeInfo.hours}</p>
      <Link
        to="/menu"
        className="mt-6 inline-block rounded border border-silver px-4 py-2 text-silver hover:bg-silver hover:text-night"
      >
        {cafeInfo.viewMenuLabel}
      </Link>
    </div>
  );
}