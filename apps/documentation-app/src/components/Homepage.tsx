import { Link } from "react-router-dom";

export function HomePage() {
  const components = [
    { name: "Header", path: "/header", color: "bg-gradient-to-r from-gray-600 to-gray-500" },
    { name: "Button", path: "/button", color: "bg-gradient-to-r from-blue-600 to-blue-500" },
    { name: "Form", path: "/form", color: "bg-gradient-to-r from-red-600 to-red-500" },
    { name: "Grid", path: "/grid", color: "bg-gradient-to-r from-green-600 to-green-500" },
    { name: "SearchBar", path: "/searchbar", color: "bg-gradient-to-r from-purple-600 to-purple-500" },
    { name: "Footer", path: "/footer", color: "bg-gradient-to-r from-teal-500 to-cyan-400" }
  ];

  return (
    <div className="bg-gray-100 min-h-screen max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Component Documentation</h1>
      <p className="text-gray-600 text-lg mb-6">Click on a component to view its documentation.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {components.map((component) => (
          <Link to={component.path} key={component.name}>
            <div className={`${component.color} p-10 h-40 flex items-center justify-center text-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl`}>
              <h2 className="text-2xl font-semibold">{component.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
