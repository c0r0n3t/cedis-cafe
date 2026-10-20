import { Link } from "react-router-dom";
import cafeInfo from "../data/cafeInfo";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-2 text-silver">
      <Link to="/">
        <img src={cafeInfo.logo} alt={cafeInfo.logoAlt} className="h-28 w-28" />
      </Link>
      <div className="flex gap-6 text-sm uppercase tracking-widest">
        {cafeInfo.navLinks.map((link) => (
          <Link key={link.path} to={link.path} className="text-silver hover:text-seasalt">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}