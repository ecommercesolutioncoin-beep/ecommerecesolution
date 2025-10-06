import { MapPin, Users, Building } from 'lucide-react';

export default function Locations() {
  const cities = [
    "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune",
    "Indore", "Surat", "Chennai", "Kolkata", "Ahmedabad"
  ];

  const services = [
    { icon: Users, title: "Small Businesses" },
    { icon: Building, title: "Manufacturers" },
    { icon: MapPin, title: "Wholesalers" }
  ];

  return (
    <section id="locations" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            📍 Service Locations
          </h2>
          <p className="text-xl text-gray-600">
            We proudly serve sellers across India with dedicated support
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Major Cities We Serve</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {cities.map((city, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900">{city}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-100 rounded-lg p-6">
              <h4 className="font-bold text-blue-900 mb-2">Complete Pan-India Coverage</h4>
              <p className="text-blue-700">Amazon & JioMart seller services available across all states and union territories of India</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Who We Serve</h3>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                      <p className="text-gray-600">Specialized services for your business type</p>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-6 border border-orange-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2">D2C Brands</h4>
                <p className="text-gray-700">Direct-to-consumer brands looking to expand their marketplace presence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}