import cafeInfo from "../data/cafeInfo";

export default function Credits() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <h2 className="text-3xl font-light tracking-wide text-seasalt">
        {cafeInfo.creditsTitle}
      </h2>
      <p className="mt-3 text-silver">{cafeInfo.creditsIntro}</p>

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