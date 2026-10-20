import { Link } from "react-router-dom";
import cafeInfo from "../data/cafeInfo";

export default function Home() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold text-amber-800">{cafeInfo.name}</h2>
      <p className="mt-2 text-gray-600">{cafeInfo.tagline}</p>
      <p className="mt-2">{cafeInfo.hours}</p>
      <Link
        to="/menu"
        className="mt-6 inline-block rounded bg-amber-700 px-4 py-2 text-white"
      >
        {cafeInfo.viewMenuLabel}
      </Link>
    </div>
  );
}