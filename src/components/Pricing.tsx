import { Crown, Zap } from 'lucide-react';

const handleWhatsAppClick = (serviceName?: string) => {
  const phoneNumber = '919179468237';
  const message = serviceName 
    ? `Hi! I am interested in the ${serviceName} service. Please provide more details.`
    : 'Hi! I am interested in your Amazon & JioMart seller services. Please provide more details.';
  
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

export default function Pricing() {
  const individualServices = [
    { 
      name: "Amazon Brand Registry", 
      price: "₹2,250",
      description: "Protect your brand with Amazon Brand Registry services and increase seller authority. Enhance Amazon product visibility with trademark-backed brand protection."
    },
    { 
      name: "Amazon Brand Store Setup", 
      price: "₹5,250",
      description: "Build a professional Amazon Brand Storefront that boosts customer trust. Drive more sales with a custom design for your Amazon store to maximize brand visibility."
    },
    { 
      name: "A+ Listing (10 Listings)", 
      price: "₹4,500",
      description: "Optimize listings with Amazon A+ Content services for better conversions. Improve SEO ranking with keyword-rich Amazon product descriptions."
    },
    { 
      name: "Product Ratings (10)", 
      price: "₹2,250",
      description: "Boost credibility with genuine Amazon product reviews and ratings. Improve sales performance with positive seller feedback optimization."
    },
    { 
      name: "Premium A+ Content", 
      price: "₹1,125 per listing",
      description: "Create Premium Amazon A+ Content with engaging visuals and copywriting. Enhance customer trust with SEO-friendly enhanced brand content (EBC)."
    },
    { 
      name: "Account Creation", 
      price: "₹2,250",
      description: "Services for new sellers to create an Amazon seller account without any hassle. Get started quickly with verified marketplace account setup support."
    },
    { 
      name: "Product Listing (50 Products)", 
      price: "₹2,250",
      description: "Bulk Amazon product listing services for 50 products with optimized titles. Improve visibility with keyword-optimized eCommerce product listings."
    },
    { 
      name: "Monthly Handling", 
      price: "₹3,750",
      description: "Complete Amazon account management services for sellers. End-to-end eCommerce store handling & growth solutions to scale sales."
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            📊 Individual Services & Premium Support
          </h2>
        </div>

        {/* Individual Services */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Individual Services</h3>
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              25% Off on All Services
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {individualServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                <div className="text-xl font-bold text-blue-600 mb-3">{service.price}</div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <button 
                  onClick={() => handleWhatsAppClick(service.name)}
                  className="w-full bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
                >
                  Get This Service
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Account Manager */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Crown className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">🌟 Premium Account Manager</h3>
            <div className="text-4xl font-bold text-purple-600 mb-2">₹11,250/Month</div>
            <p className="text-lg text-gray-600 mb-8">For sellers aiming at scaling aggressively</p>

            <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Dedicated 1-on-1 expert support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Personalized growth strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Daily monitoring & guidance</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Sales & performance tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Custom launch strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Brand growth assistance</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-100 border border-yellow-200 rounded-xl p-6 mb-8">
              <h4 className="text-xl font-bold text-yellow-800 mb-2">🎁 Special Offer</h4>
              <p className="text-yellow-700">Get 3 Months Premium at just <span className="font-bold text-2xl">₹33,750!</span></p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleWhatsAppClick('Premium Account Manager')}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Get Premium Support
              </button>
              <button 
                onClick={() => handleWhatsAppClick('Premium Account Manager - Special Offer')}
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
              >
                Special Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}