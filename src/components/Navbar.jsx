import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-green-400">🪙 CryptoVerse</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/search" className="hover:underline">Search</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
