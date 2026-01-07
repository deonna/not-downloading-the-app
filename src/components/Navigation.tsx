import { Link, useLocation } from 'react-router-dom';
import { Link2, HelpCircle, Home, MessageSquare } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b-4 border-black z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-black hover:text-[#FF2B51] transition-colors">
            <div className="w-10 h-10 border-3 border-black flex items-center justify-center bg-white">
              <Link2 className="w-6 h-6" strokeWidth={3} />
            </div>
            <span className="font-display font-bold text-lg hidden sm:inline uppercase tracking-tight">not installing that</span>
          </Link>

          <div className="flex items-center gap-2">
            {!isHomePage && (
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2 text-black hover:bg-[#FF2B51] hover:text-white border-2 border-transparent hover:border-black transition-all font-bold uppercase text-sm tracking-wide"
              >
                <Home className="w-4 h-4" strokeWidth={3} />
                <span className="hidden sm:inline">Home</span>
              </Link>
            )}
            <Link
              to="/faq"
              className="flex items-center gap-2 px-4 py-2 text-black hover:bg-[#FF2B51] hover:text-white border-2 border-transparent hover:border-black transition-all font-bold uppercase text-sm tracking-wide"
            >
              <MessageSquare className="w-4 h-4" strokeWidth={3} />
              <span className="hidden sm:inline">FAQ</span>
            </Link>
            <Link
              to="/help"
              className="flex items-center gap-2 px-4 py-2 text-black hover:bg-[#FF2B51] hover:text-white border-2 border-transparent hover:border-black transition-all font-bold uppercase text-sm tracking-wide"
            >
              <HelpCircle className="w-4 h-4" strokeWidth={3} />
              <span className="hidden sm:inline">Help</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
