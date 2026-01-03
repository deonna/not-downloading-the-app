import { useState } from 'react';
import { Link2, AlertCircle } from 'lucide-react';

interface ValidationResult {
  success: boolean;
  url?: URL;
  error?: string;
}

function validateAndNormalizeUrl(input: string): ValidationResult {
  if (!input || input.trim() === '') {
    return {
      success: false,
      error: 'Please enter a URL'
    };
  }

  let urlString = input.trim();

  if (!urlString.startsWith('http://') && !urlString.startsWith('https://')) {
    urlString = 'https://' + urlString;
  }

  try {
    const url = new URL(urlString);
    return {
      success: true,
      url: url
    };
  } catch (error) {
    return {
      success: false,
      error: 'Invalid URL format. Please enter a valid web address.'
    };
  }
}

function App() {
  const [linkInput, setLinkInput] = useState('');
  const [normalizedUrl, setNormalizedUrl] = useState<URL | null>(null);
  const [error, setError] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkInput(e.target.value);
    setError('');
    setNormalizedUrl(null);
  };

  const handleButtonClick = () => {
    const result = validateAndNormalizeUrl(linkInput);

    if (result.success && result.url) {
      setNormalizedUrl(result.url);
      setError('');
    } else {
      setError(result.error || 'An error occurred');
      setNormalizedUrl(null);
    }
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
                onChange={handleInputChange}
                placeholder="Paste your Instagram, Reddit, or TikTok link here..."
                className="w-full px-6 py-4 text-lg border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              />
              {error && (
                <div className="mt-3 flex items-start gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg border border-red-200">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{error}</span>
                </div>
              )}
            </div>

            <button
              onClick={handleButtonClick}
              disabled={!linkInput.trim()}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold text-lg py-4 px-6 rounded-xl transition-colors shadow-md hover:shadow-lg disabled:shadow-none"
            >
              Unwrap Link
            </button>
          </div>

          {normalizedUrl && (
            <div className="mt-6 p-6 bg-green-50 rounded-xl border-2 border-green-200">
              <p className="text-sm text-slate-900 break-all font-mono bg-white px-4 py-3 rounded border border-green-200">
                {normalizedUrl.href}
              </p>
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
