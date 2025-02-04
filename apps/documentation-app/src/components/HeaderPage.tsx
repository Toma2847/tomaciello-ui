import { BackButton } from "./BackButton";


export function HeaderPage() {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-100 shadow-lg rounded-xl mt-6">
      <BackButton />
      <h1 className="text-4xl font-bold text-gray-800">Header Component</h1>
      <p className="mt-4 text-gray-600 text-lg">
        Example of a responsive header with a navigation bar.
      </p>

      {/* Demo del componente */}
      <header className="bg-gradient-to-r from-yellow-700 to-yellow-600 text-white p-5 rounded-lg shadow-md flex justify-between items-center mt-6">
        <h2 className="text-xl font-semibold">My Website</h2>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Codice del componente */}
      <div className="relative bg-gray-900 text-white p-5 rounded-lg shadow-md mt-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold">JSX Code</span>
          <button 
            onClick={() => navigator.clipboard.writeText(headerCode)} 
            className="bg-gray-700 text-white px-3 py-1 rounded text-xs hover:bg-gray-600"
          >
            Copy Code
          </button>
        </div>
        <pre className="overflow-x-auto text-sm font-mono">
{`export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-5 rounded-lg shadow-md flex justify-between items-center">
      <h2 className="text-xl font-semibold">My Website</h2>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;`}
        </pre>
      </div>
    </div>
  );
}

const headerCode = `export const Header = () => {
  return (
    <header className=\"bg-gradient-to-r from-blue-600 to-blue-500 text-white p-5 rounded-lg shadow-md flex justify-between items-center\">
      <h2 className=\"text-xl font-semibold\">My Website</h2>
      <nav>
        <ul className=\"flex space-x-4\">
          <li><a href=\"#\" className=\"hover:underline\">Home</a></li>
          <li><a href=\"#\" className=\"hover:underline\">About</a></li>
          <li><a href=\"#\" className=\"hover:underline\">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;`;

export default HeaderPage;
