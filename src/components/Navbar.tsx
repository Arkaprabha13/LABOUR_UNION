
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-4',
        isScrolled
          ? 'bg-white/80 dark:bg-union-black/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-xl md:text-2xl font-medium text-foreground"
        >
          <span className="text-union-red">Labour Union</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#constituency">Find Candidates</NavLink>
          <NavLink href="#join">Get Involved</NavLink>
          <NavLink href="#contact" isButton>
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-union-black shadow-md animate-fadeIn">
          <nav className="flex flex-col py-4 px-4 space-y-4">
            <MobileNavLink
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </MobileNavLink>
            <MobileNavLink
              href="#constituency"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Find Candidates
            </MobileNavLink>
            <MobileNavLink
              href="#join"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Involved
            </MobileNavLink>
            <MobileNavLink
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              isButton
            >
              Contact Us
            </MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isButton?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isButton }) => {
  if (isButton) {
    return (
      <a
        href={href}
        className="inline-flex items-center justify-center h-10 px-6 py-2 text-sm font-medium text-white bg-union-red rounded-md shadow-sm hover:bg-union-darkred transition-colors duration-200 button-hover"
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className="text-foreground hover:text-union-red transition-colors duration-200 text-sm font-medium"
    >
      {children}
    </a>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  href,
  children,
  isButton,
  onClick,
}) => {
  if (isButton) {
    return (
      <a
        href={href}
        onClick={onClick}
        className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-white bg-union-red rounded-md shadow-sm hover:bg-union-darkred transition-colors duration-200"
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className="text-foreground hover:text-union-red transition-colors duration-200 text-sm font-medium py-2 px-4"
    >
      {children}
    </a>
  );
};

export default Navbar;
