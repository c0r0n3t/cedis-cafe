import { Link } from "react-router-dom";
import cafeInfo from "../data/cafeInfo";

export default function Home() {
  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center bg-night bg-cover bg-center px-6 text-center"
      style={{ backgroundImage: `url(${cafeInfo.heroBackground})` }}
    >
      <div className="absolute inset-0 bg-night/70" />
      <div className="relative mx-auto max-w-2xl">
        <h2 className="text-4xl font-light tracking-wide text-seasalt md:text-5xl">
          {cafeInfo.heroTitle}
        </h2>
        <p className="mt-4 text-silver">{cafeInfo.heroSubtitle}</p>
        <p className="mt-2 text-sm text-silver">{cafeInfo.hours}</p>
        <Link
          to="/menu"
          className="mt-10 inline-block border-b border-silver pb-1 text-sm uppercase tracking-widest text-silver hover:border-seasalt hover:text-seasalt"
        >
          {cafeInfo.viewMenuLabel}
        </Link>
      </div>
    </section>
  );
}