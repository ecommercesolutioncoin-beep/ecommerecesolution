import { TrendingUp, Users, Award, Globe } from 'lucide-react';

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

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            <span> Amazon & JioMart E-Commerce Growth Services in India</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Scale Your Business on<br />
            <span className="text-blue-600">Amazon</span> & <span className="text-orange-600">JioMart</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            👉 Empower your brand with ROI-driven strategies, SEO-optimized product listings, and end-to-end account management that deliver measurable results across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={handleWhatsAppClick}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Growing Today
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all"
            >
              View Our Services
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Proven ROI</h3>
            <p className="text-gray-600 text-sm">Direct sales boost through optimized listings</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-gray-600 text-sm">Dedicated account managers for your success</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">India Focused</h3>
            <p className="text-gray-600 text-sm">Deep understanding of Indian marketplaces</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Pan India</h3>
            <p className="text-gray-600 text-sm">Serving sellers across all major cities</p>
          </div>
        </div>
      </div>
    </section>
  );
}