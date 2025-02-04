import { BackButton } from "./BackButton";


export function ButtonPage() {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-100 shadow-lg rounded-xl mt-6">
      <BackButton />
      <h1 className="text-4xl font-bold text-gray-800">Button Component</h1>
      <p className="mt-4 text-gray-600 text-lg">
        Example of two different button styles using Tailwind CSS.
      </p>

      {/* Primo pulsante e codice */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
         Button
        </button>
        <div className="relative bg-gray-900 text-white p-5 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold">Primary Button Code</span>
            <button 
              onClick={() => navigator.clipboard.writeText(primaryButtonCode)} 
              className="bg-gray-700 text-white px-3 py-1 rounded text-xs hover:bg-gray-600"
            >
              Copy Code
            </button>
          </div>
          <pre className="overflow-x-auto text-sm font-mono">
{`<button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
  Primary Button
</button>`}
          </pre>
        </div>
      </div>

      {/* Secondo pulsante e codice */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-center">
        <button className="border border-gray-600 text-gray-700 px-6 py-2 rounded-lg shadow-md hover:bg-gray-200">
          Button
        </button>
        <div className="relative bg-gray-900 text-white p-5 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold">Secondary Button Code</span>
            <button 
              onClick={() => navigator.clipboard.writeText(secondaryButtonCode)} 
              className="bg-gray-700 text-white px-3 py-1 rounded text-xs hover:bg-gray-600"
            >
              Copy Code
            </button>
          </div>
          <pre className="overflow-x-auto text-sm font-mono">
{`<button className="border border-gray-600 text-gray-700 px-6 py-2 rounded-lg shadow-md hover:bg-gray-200">
  Secondary Button
</button>`}
          </pre>
        </div>
      </div>
    </div>
  );
}

const primaryButtonCode = `<button className=\"bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700\">\n  Primary Button\n</button>`;

const secondaryButtonCode = `<button className=\"border border-gray-600 text-gray-700 px-6 py-2 rounded-lg shadow-md hover:bg-gray-200\">\n  Secondary Button\n</button>`;

export default ButtonPage;
