import { Link } from "react-router-dom";
import cafeInfo from "../data/cafeInfo";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-amber-800 px-6 py-4 text-white">
      <h1 className="text-xl font-bold">{cafeInfo.name}</h1>
      <div className="flex gap-4">
        {cafeInfo.navLinks.map((link) => (
          <Link key={link.path} to={link.path} className="hover:underline">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}