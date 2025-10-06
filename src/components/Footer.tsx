import { ShoppingCart, Mail, Phone, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">E-commerce Solution</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for Amazon and JioMart marketplace success across India.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:ecommercesolution.co.in@gmail.com"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-colors"
                title="Send us an email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+919179468237"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-colors"
                title="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="https://www.ecommercesolution.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-colors"
                title="Visit our website"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Amazon Account Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">JioMart Seller Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Product Listing Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Brand Store Setup</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PPC Campaign Management</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Locations</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Delhi & Mumbai</li>
              <li>Bangalore & Hyderabad</li>
              <li>Pune & Chennai</li>
              <li>Indore & Ahmedabad</li>
              <li>Pan-India Coverage</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:ecommercesolution.co.in@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  ecommercesolution.co.in@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <a 
                  href="https://www.ecommercesolution.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  www.ecommercesolution.co.in
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a 
                  href="tel:+919179468237"
                  className="hover:text-white transition-colors"
                >
                  +91 91794 68237
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 E-commerce Solution. All rights reserved. Empowering Indian sellers on Amazon & JioMart marketplaces.</p>
        </div>
      </div>
    </footer>
  );
}