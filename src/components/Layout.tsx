
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-union-black to-union-brown text-white relative">
      {/* Background logo watermark */}
      <div className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden">
        <div className="w-[120vh] h-[120vh] opacity-[0.03] animate-slow-spin">
          <img 
            src="/images/logo.png" 
            alt="CLW Labour Union Logo" 
            className="w-full h-full"
          />
        </div>
      </div>
      
      <Navbar />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
