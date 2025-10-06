import { Phone, Mail, Globe, Clock, CreditCard } from 'lucide-react';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc3ueYLL0p1YzeQ_5-CAPSzt56soRAmE-Auyjj1QI6J6UvHgg/viewform?usp=dialog';
function openLeadForm() {
  window.open(FORM_URL, '_blank');
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">💳 Get Started in 24 Hours</h2>
          <p className="text-xl text-gray-300">Simple process to begin your marketplace success journey</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Start Process</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold mb-2">Choose your plan or service</h4>
                  <p className="text-gray-300">Select the perfect package for your business needs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold mb-2">Make payment via secure bank transfer</h4>
                  <p className="text-gray-300">Safe and secure payment process</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold mb-2">Onboarding starts within 24 hours</h4>
                  <p className="text-gray-300">Get assigned a dedicated account manager immediately</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-600/20 rounded-xl p-6 mt-8">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="w-6 h-6 text-blue-400" />
                <h4 className="text-lg font-bold">Fast Track Your Success</h4>
              </div>
              <p className="text-blue-100">Our proven process ensures you start seeing results from day one with dedicated support and expert guidance.</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">📞 Contact Information</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-blue-400 mb-2">Company Details</h4>
                <p className="text-xl font-semibold">E-commerce Solution</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+91 91794 68237, +91 96911 22734</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>ecommercesolution.co.in@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span>www.ecommercesolution.co.in</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mt-8">
              <h4 className="text-xl font-bold mb-3">👉 Ready to Grow?</h4>
              <p className="mb-4">Let's scale your brand on Amazon & JioMart marketplaces in India 🚀</p>
              <button onClick={openLeadForm} className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}