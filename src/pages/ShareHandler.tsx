import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

export function ShareHandler() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const urlParam = searchParams.get('url');
    const textParam = searchParams.get('text');

    let url = urlParam;
    if (!url && textParam) {
      // Extract URL from text (handles cases like "check this out https://... lol")
      const urlMatch = textParam.match(/https?:\/\/[^\s]+/);
      url = urlMatch ? urlMatch[0] : textParam;
    }

    if (url) {
      navigate(`/?url=${encodeURIComponent(url)}`, { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
        <p className="text-lg text-slate-600">Processing shared link...</p>
      </div>
    </div>
  );
}
