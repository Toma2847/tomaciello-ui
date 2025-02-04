import { Link } from 'react-router-dom';


export function NavbarPage() {
  return (
    <nav className="bg-gradient-to-r from-yellow-700 to-yellow-600 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Tomaciello-Ui</Link>
        <div className="space-x-6">
          <Link to="/header" className="hover:underline">Header</Link>
          <Link to="/button" className="hover:underline">Button</Link>
          <Link to="/form" className="hover:underline">Form</Link>
          <Link to="/grid" className="hover:underline">Grid</Link>
          <Link to="/searchbar" className="hover:underline">Searchbar</Link>
          <Link to="/footer" className="hover:underline">Footer</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavbarPage;
