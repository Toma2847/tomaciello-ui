// BackButton.jsx
import { useNavigate } from 'react-router-dom';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate('/')} 
      className="bg-black text-white py-2 px-4 rounded hover:bg-yellow-700 mb-12"
    >
      Indietro
    </button>
  );
}
