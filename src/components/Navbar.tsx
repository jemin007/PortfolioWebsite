import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  useEffect(() => {
    document.title = 'Jemin | Data Engineer';
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white flex items-center" onClick={e => { e.preventDefault(); navigate('/'); }}>
            <span className="text-blue-600 dark:text-blue-400">Jemin</span>&nbsp;Shrestha
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 mx-auto">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#blog" className="nav-link">Blog</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Resume
            </a>
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 mr-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ background: 'rgba(17,24,39,0.95)' }}>
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md" />
        <div className="container-custom py-20 relative z-10">
          <div className="flex flex-col space-y-6 text-center text-lg">
            <a href="#about" className="nav-link py-2" onClick={() => setIsOpen(false)}>About</a>
            <a href="#skills" className="nav-link py-2" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#projects" className="nav-link py-2" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#blog" className="nav-link py-2" onClick={() => setIsOpen(false)}>Blog</a>
            <a href="#contact" className="nav-link py-2" onClick={() => setIsOpen(false)}>Contact</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary" onClick={() => setIsOpen(false)}>
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;