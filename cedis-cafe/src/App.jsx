import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import ItemDetails from "./pages/ItemDetails";
import Credits from "./pages/Credits";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-night text-silver">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<ItemDetails />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}