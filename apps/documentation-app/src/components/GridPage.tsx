import { BackButton } from "./BackButton";


export function GridPage() {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-100 shadow-lg rounded-xl mt-6">
      <BackButton />
      <h1 className="text-4xl font-bold text-gray-800">Grid Component</h1>
      <p className="mt-4 text-gray-600 text-lg">
        Example of a responsive grid layout using Tailwind CSS.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Demo del componente */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-white rounded-lg shadow-md">
          <div className="bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center">1</div>
          <div className="bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center">2</div>
          <div className="bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center">3</div>
          <div className="bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center">4</div>
          <div className="bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center">5</div>
          <div className="bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center">6</div>
        </div>

        {/* Codice del componente */}
        <div className="relative bg-gray-900 text-white p-5 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold">JSX Code</span>
            <button 
              onClick={() => navigator.clipboard.writeText(gridCode)} 
              className="bg-gray-700 text-white px-3 py-1 rounded text-xs hover:bg-gray-600"
            >
              Copy Code
            </button>
          </div>
          <pre className="overflow-x-auto text-sm font-mono">
{`export const Grid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-white rounded-lg shadow-md">
      <div className="bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center">1</div>
      <div className="bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center">2</div>
      <div className="bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center">3</div>
      <div className="bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center">4</div>
      <div className="bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center">5</div>
      <div className="bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center">6</div>
    </div>
  );
};

export default Grid;`}
          </pre>
        </div>
      </div>
    </div>
  );
}

const gridCode = `export const Grid = () => {
  return (
    <div className=\"grid grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-white rounded-lg shadow-md\">
      <div className=\"bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center\">1</div>
      <div className=\"bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center\">2</div>
      <div className=\"bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center\">3</div>
      <div className=\"bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center\">4</div>
      <div className=\"bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center\">5</div>
      <div className=\"bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center\">6</div>
    </div>
  );
};

export default Grid;`;

export default GridPage;
