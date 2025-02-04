import { BackButton } from "./BackButton";


export function FooterPage() {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-100 shadow-lg rounded-xl mt-6">
      <BackButton />
      <h1 className="text-4xl font-bold text-gray-800">Footer Component</h1>
      <p className="mt-4 text-gray-600 text-lg">
        Example of a modern footer using Tailwind CSS.
      </p>

      {/* Demo del footer */}
      <footer className="bg-gradient-to-r from-yellow-700 to-yellow-600 text-white p-6 rounded-lg shadow-md mt-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2025 My Website. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </footer>

      {/* Codice del componente */}
      <div className="relative bg-gray-900 text-white p-5 rounded-lg shadow-md mt-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold">JSX Code</span>
          <button 
            onClick={() => navigator.clipboard.writeText(footerCode)} 
            className="bg-gray-700 text-white px-3 py-1 rounded text-xs hover:bg-gray-600"
          >
            Copy Code
          </button>
        </div>
        <pre className="overflow-x-auto text-sm font-mono">
{`export function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2025 My Website. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;`}
        </pre>
      </div>
    </div>
  );
}

const footerCode = `export function Footer() {
  return (
    <footer className=\"bg-gray-800 text-white p-6 rounded-lg shadow-md\">
      <div className=\"flex flex-col md:flex-row justify-between items-center\">
        <p className=\"text-sm\">&copy; 2025 My Website. All rights reserved.</p>
        <div className=\"flex space-x-4 mt-4 md:mt-0\">
          <a href=\"#\" className=\"hover:text-gray-400\">Privacy Policy</a>
          <a href=\"#\" className=\"hover:text-gray-400\">Terms of Service</a>
          <a href=\"#\" className=\"hover:text-gray-400\">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;`;

export default FooterPage;
