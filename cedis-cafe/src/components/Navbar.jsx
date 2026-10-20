import { Link } from "react-router-dom";
import cafeInfo from "../data/cafeInfo";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-battleship bg-vandyke px-6 py-4 text-silver">
      <h1 className="text-xl font-bold text-seasalt">{cafeInfo.name}</h1>
      <div className="flex gap-4">
        {cafeInfo.navLinks.map((link) => (
          <Link key={link.path} to={link.path} className="hover:text-seasalt">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}