import { useState } from "react";
import { Menu, X, Home, Store, Users, Phone, CreditCard, Download, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleDownloadClick = () => {
    if (user) {
      navigate('/download');
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/30">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Senu Cheat Official Community
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <button 
              onClick={handleDownloadClick}
              className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
            <Link to="/store" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
              <Store className="w-4 h-4" />
              <span>Store</span>
            </Link>
            <Link to="/guild" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
              <Users className="w-4 h-4" />
              <span>Guild</span>
            </Link>
            <Link to="/payment" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
              <CreditCard className="w-4 h-4" />
              <span>Payment</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span>Contact us</span>
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-green-400">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">{user.username}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/login" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg transition-all duration-300">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-gray-300 hover:text-purple-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-purple-500/30">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <button 
                onClick={handleDownloadClick}
                className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
              <Link to="/store" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
                <Store className="w-4 h-4" />
                <span>Store</span>
              </Link>
              <Link to="/guild" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
                <Users className="w-4 h-4" />
                <span>Guild</span>
              </Link>
              <Link to="/payment" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
                <CreditCard className="w-4 h-4" />
                <span>Payment</span>
              </Link>
              <Link to="/contact" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>Contact us</span>
              </Link>
              
              {user ? (
                <>
                  <div className="flex items-center space-x-2 text-green-400 pt-2 border-t border-purple-500/30">
                    <User className="w-4 h-4" />
                    <span className="text-sm font-medium">{user.username}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className="text-red-400 hover:text-red-300 hover:bg-red-500/10 justify-start"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <Link to="/login" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg transition-all duration-300 text-center">
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;