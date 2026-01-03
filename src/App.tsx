import { useState } from 'react';
import { Link2 } from 'lucide-react';

function App() {
  const [linkInput, setLinkInput] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const handleButtonClick = () => {
    setDisplayedText(linkInput);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
            <Link2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Link Unwrapper
          </h1>
          <p className="text-lg text-slate-600">
            Watch social media content in your browser without logging in
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="space-y-4">
            <div>
              <input
                type="text"
                value={linkInput}
                onChange={(e) => setLinkInput(e.target.value)}
                placeholder="Paste your Instagram, Reddit, or TikTok link here..."
                className="w-full px-6 py-4 text-lg border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            <button
              onClick={handleButtonClick}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-4 px-6 rounded-xl transition-colors shadow-md hover:shadow-lg"
            >
              Unwrap Link
            </button>
          </div>

          {displayedText && (
            <div className="mt-6 p-6 bg-slate-50 rounded-xl border-2 border-slate-200">
              <p className="text-sm font-semibold text-slate-600 mb-2">Your input:</p>
              <p className="text-slate-900 break-all">{displayedText}</p>
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-sm text-slate-500">
          Supports Instagram Reels, Reddit posts, and TikTok videos
        </div>
      </div>
    </div>
  );
}

export default App;
