
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-union-black text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo and info */}
          <div>
            <Link to="/" className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="CLW Labour Union Logo" 
                className="h-16 w-16 mr-3"
              />
              <span className="text-2xl font-medium">
                <span className="text-union-red">Labour</span>Union
              </span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Dedicated to protecting worker rights, promoting fair labor practices, 
              and building a dignified future for all working people.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialIcon icon={<Facebook className="h-5 w-5" />} />
              <SocialIcon icon={<Twitter className="h-5 w-5" />} />
              <SocialIcon icon={<Instagram className="h-5 w-5" />} />
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#constituency">Find Candidates</FooterLink>
              <FooterLink href="#join">Get Involved</FooterLink>
              <FooterLink href="#">News & Updates</FooterLink>
              <FooterLink href="#">Resources</FooterLink>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="text-lg font-medium mb-6">Contact Us</h4>
            <div className="space-y-4">
              <ContactItem icon={<Mail className="h-5 w-5" />}>
                contact@labourunion.org
              </ContactItem>
              <ContactItem icon={<Phone className="h-5 w-5" />}>
                +91 999999999
              </ContactItem>
              <p className="text-gray-400 mt-6">
                123 Labor Street, Constituency District<br />
                State, Country 12345
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} C.L.W. Labour Union. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <FooterLegalLink href="#">Privacy Policy</FooterLegalLink>
            <FooterLegalLink href="#">Terms of Service</FooterLegalLink>
            <FooterLegalLink href="#">Accessibility</FooterLegalLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper components
const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a 
    href="#" 
    className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-union-red transition-colors duration-200"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-400 hover:text-union-red transition-colors duration-200"
    >
      {children}
    </a>
  </li>
);

const ContactItem = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <div className="flex items-center">
    <div className="text-union-red mr-3">{icon}</div>
    <span className="text-gray-300">{children}</span>
  </div>
);

const FooterLegalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
  >
    {children}
  </a>
);

export default Footer;
