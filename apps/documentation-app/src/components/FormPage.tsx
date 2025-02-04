import { BackButton } from "./BackButton";


export function FormPage() {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-100 shadow-lg rounded-xl mt-6">
      <BackButton />
      <h1 className="text-4xl font-bold text-gray-800">Form Component</h1>
      <p className="mt-4 text-gray-600 text-lg">
        Example of a more advanced form with styled input fields and buttons.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Demo del componente */}
        <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="example@email.com" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" rows={4} placeholder="Your message..."></textarea>
          </div>
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">Send Message</button>
        </form>

        {/* Codice del componente */}
        <div className="relative bg-gray-900 text-white p-5 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold">JSX Code</span>
            <button 
              onClick={() => navigator.clipboard.writeText(formCode)} 
              className="bg-gray-700 text-white px-3 py-1 rounded text-xs hover:bg-gray-600"
            >
              Copy Code
            </button>
          </div>
          <pre className="overflow-x-auto text-sm font-mono">
{`export const Form = () => {
  return (
    <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <div>
        <label className="block text-gray-700 font-medium mb-2">Full Name</label>
        <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Email Address</label>
        <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="example@email.com" />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Message</label>
        <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" rows={4} placeholder="Your message..."></textarea>
      </div>
      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">Send Message</button>
    </form>
  );
};

export default Form;`}
          </pre>
        </div>
      </div>
    </div>
  );
}

const formCode = `export const Form = () => {
  return (
    <form className=\"bg-white p-6 rounded-lg shadow-md space-y-4\">
      <div>
        <label className=\"block text-gray-700 font-medium mb-2\">Full Name</label>
        <input type=\"text\" className=\"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500\" placeholder=\"John Doe\" />
      </div>
      <div>
        <label className=\"block text-gray-700 font-medium mb-2\">Email Address</label>
        <input type=\"email\" className=\"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500\" placeholder=\"example@email.com\" />
      </div>
      <div>
        <label className=\"block text-gray-700 font-medium mb-2\">Message</label>
        <textarea className=\"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500\" rows={4} placeholder=\"Your message...\"></textarea>
      </div>
      <button className=\"w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition\">Send Message</button>
    </form>
  );
};

export default Form;`;

export default FormPage;
