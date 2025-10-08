import { Menu, X, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const handleWhatsAppClick = () => {
  const phoneNumber = '919179468237';
  const message = 'Hi! I am interested in your Amazon & JioMart seller services. Please provide more details.';
  
  // Detect if it's mobile or desktop
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // For mobile devices, use WhatsApp app
    window.open(`whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
  } else {
    // For desktop, use WhatsApp Web
    window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
  }
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">

            </div>
           <img src="/logo-verticle.png" alt="E-commerce Solution" className="w-200 h-12" />
            </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Pricing</a>
            <a href="#locations" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Locations</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-2 space-y-2">
            <a href="#services" className="block py-2 text-gray-600 hover:text-blue-600">Services</a>
            <a href="#pricing" className="block py-2 text-gray-600 hover:text-blue-600">Pricing</a>
            <a href="#locations" className="block py-2 text-gray-600 hover:text-blue-600">Locations</a>
            <a href="#contact" className="block py-2 text-gray-600 hover:text-blue-600">Contact</a>
            <button 
              onClick={handleWhatsAppClick}
              className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors mt-2"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}