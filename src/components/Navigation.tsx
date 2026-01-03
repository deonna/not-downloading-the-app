import { Link, useLocation } from 'react-router-dom';
import { Link2, HelpCircle, Home } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Link2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-lg hidden sm:inline">not downloading this</span>
          </Link>

          <div className="flex items-center gap-4">
            {!isHomePage && (
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Home className="w-5 h-5" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            )}
            <Link
              to="/help"
              className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <HelpCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Help</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
