import cafeInfo from "../data/cafeInfo";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-xs text-battleship">
      <p>{cafeInfo.footerText}</p>
    </footer>
  );
}