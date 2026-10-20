import cafeInfo from "../data/cafeInfo";

export default function Credits() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <div className="mx-auto h-64 w-64 overflow-hidden rounded-full border border-battleship md:h-72 md:w-72">
        <img
          src={cafeInfo.creditsImage}
          alt={cafeInfo.creditsImageAlt}
          className="h-full w-full object-cover"
        />
      </div>

      <h2 className="mt-10 text-center text-3xl font-light tracking-wide text-seasalt">
        {cafeInfo.creditsTitle}
      </h2>
      <p className="mt-3 text-center text-silver">{cafeInfo.creditsIntro}</p>

      <div className="mt-10 space-y-8">
        {cafeInfo.creditsGroups.map((group) => (
          <section key={group.id} className="border-t border-vandyke pt-6">
            <h3 className="text-sm uppercase tracking-widest text-battleship">
              {group.heading}
            </h3>
            <ul className="mt-3 space-y-1">
              {group.items.map((item) => (
                <li key={item} className="text-seasalt">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}