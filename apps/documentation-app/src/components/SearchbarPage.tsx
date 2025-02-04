import { BackButton } from "./BackButton";


export function SearchBarPage() {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-100 shadow-lg rounded-xl mt-6">
      <BackButton />
      <h1 className="text-4xl font-bold text-gray-800">Search Bar Component</h1>
      <p className="mt-4 text-gray-600 text-lg">
        Example of a stylish search bar with a modern design and animation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Demo del componente */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">
            Search
          </button>
        </div>

        {/* Codice del componente */}
        <div className="relative bg-gray-900 text-white p-5 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold">JSX Code</span>
            <button 
              onClick={() => navigator.clipboard.writeText(searchBarCode)} 
              className="bg-gray-700 text-white px-3 py-1 rounded text-xs hover:bg-gray-600"
            >
              Copy Code
            </button>
          </div>
          <pre className="overflow-x-auto text-sm font-mono">
{`export const SearchBar = () => {
  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-md space-x-4">
      <input 
        type="text" 
        placeholder="Search..." 
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">
        Search
      </button>
    </div>
  );
};

export default SearchBar;`}
          </pre>
        </div>
      </div>
    </div>
  );
}

const searchBarCode = `export const SearchBar = () => {
  return (
    <div className=\"flex items-center bg-white p-4 rounded-lg shadow-md space-x-4\">
      <input 
        type=\"text\" 
        placeholder=\"Search...\" 
        className=\"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition\"
      />
      <button className=\"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition\">
        Search
      </button>
    </div>
  );
};

export default SearchBar;`;

export default SearchBarPage;
