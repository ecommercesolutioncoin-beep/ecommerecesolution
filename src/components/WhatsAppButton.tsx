import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '919179468237'; // WhatsApp number without +91
  const message = 'Hi! I am interested in your Amazon & JioMart seller services. Please provide more details.';

  const handleWhatsAppClick = () => {
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

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
      
      {/* WhatsApp text bubble */}
      <div className="absolute bottom-16 right-0 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg border border-gray-200 whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300">
        <span className="text-sm font-medium">Chat with us!</span>
        <div className="absolute bottom-0 right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
      </div>
    </div>
  );
}
