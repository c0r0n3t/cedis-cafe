import CafeInfo from "../models/CafeInfo";
import Feature from "../models/Feature";
import NavLink from "../models/NavLink";
import CreditGroup from "../models/CreditGroup";

const cafeInfo = new CafeInfo({
  name: "Cedi's Cafe",
  tagline: "Your cozy corner for coffee and pastries",
  hours: "Open daily, 8:00 AM - 8:00 PM",
  logo: "/logo.png",
  logoAlt: "Cedi's Cafe logo",
  heroBackground: "/cafe-bg.jpg",
  heroTitle: "Brewed fresh, served with care",
  heroSubtitle: "Hot or iced, there's a cup waiting for you.",
  featuresTitle: "Why you'll love us",
  footerText: "© 2026 Cedi's Cafe. All rights reserved.",
  menuTitle: "Our Menu",
  menuImage: "/menu-banner.jpg",
  menuImageAlt: "Iced coffee being poured over ice, shown in five stages",
  allLabel: "All",
  viewMenuLabel: "View Menu",
  searchPlaceholder: "Search the menu...",
  noResultsText: "No items found.",
  backLabel: "← Back to menu",
  notFoundText: "Item not found.",
  categoryLabel: "Category",
  creditsTitle: "Credits",
  creditsIntro: "This website was made as a midterm practical project.",
  creditsImage: "/credits-photo.jpg",
  creditsImageAlt: "Baristas preparing drinks at the counter",
  features: [
    new Feature(1, "Fresh Coffee", "Every cup is brewed to order."),
    new Feature(2, "Hot or Iced", "Your favorite drinks, served either way."),
    new Feature(3, "Baked Daily", "Brownies, bars, and pastries made fresh."),
  ],
  navLinks: [
    new NavLink("Home", "/"),
    new NavLink("Menu", "/menu"),
    new NavLink("Credits", "/credits"),
  ],
  creditsGroups: [
    new CreditGroup(1, "Developer", ["Cedrick June Castro", "Section G11"]),
    new CreditGroup(2, "Built With", ["React.js", "Tailwind CSS", "React Router", "Vite"]),
    new CreditGroup(3, "Design", ["Figma (UI/UX design)", "draw.io (class diagram)"]),
  ],
});

export default cafeInfo;