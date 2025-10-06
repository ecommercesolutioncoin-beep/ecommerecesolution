import { Package, ShoppingBag, Star, Award } from 'lucide-react';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc3ueYLL0p1YzeQ_5-CAPSzt56soRAmE-Auyjj1QI6J6UvHgg/viewform?usp=dialog';
function openLeadForm() {
  window.open(FORM_URL, '_blank');
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            📦 Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive solutions for Amazon and JioMart marketplace success
          </p>
        </div>

        {/* Amazon Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Amazon Seller Account Management</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 1-Month Starter Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">1-Month Starter Plan</h4>
                <div className="text-3xl font-bold text-blue-600 mt-2">₹4,500</div>
                <p className="text-gray-600 mt-2">Perfect for testing our services</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">50 SEO-optimized product listings</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Amazon listing optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Order & return management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Product image enhancement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Weekly performance reports</span>
                </li>
              </ul>
              <button onClick={openLeadForm} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* 3-Month Growth Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">3-Month Growth Plan</h4>
                <div className="text-3xl font-bold text-blue-600 mt-2">₹13,500</div>
                <p className="text-gray-600 mt-2">Best for consistent growth</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Everything from 1-Month Plan ✔</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Advanced keyword optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Inventory management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">PPC ad campaigns setup</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Account health monitoring</span>
                </li>
              </ul>
              <button onClick={openLeadForm} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Choose Growth Plan
              </button>
            </div>

            {/* Amazon Growth Combo */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-orange-200">
              <div className="text-center mb-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">🔥 Amazon Growth Combo</h4>
                <div className="text-3xl font-bold text-orange-600 mt-2">₹22,500</div>
                <p className="text-green-600 font-semibold">Save ₹7,500</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">All 3-Month Plan services ✔</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Amazon Brand Registry support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Brand Store design & setup</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">10 A+ listings + Enhanced Content</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Complete launch strategy</span>
                </li>
              </ul>
              <button onClick={openLeadForm} className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Get Combo Deal
              </button>
            </div>
          </div>
        </div>

        {/* JioMart Services */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">🛍 JioMart Seller Services</h3>
            <p className="text-lg text-gray-600">Expand your reach with JioMart marketplace</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">📌 Account Creation</h4>
              <div className="text-2xl font-bold text-blue-600 mb-3">₹2,250</div>
              <p className="text-gray-600">Professional setup with GST, PAN & compliance checks</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">📌 Product Listing</h4>
              <div className="text-2xl font-bold text-blue-600 mb-3">₹2,250</div>
              <p className="text-gray-600">50 SEO-optimized products with keyword mapping</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">📌 Monthly Handling</h4>
              <div className="text-2xl font-bold text-blue-600 mb-3">₹4,500</div>
              <p className="text-gray-600">Complete account management & support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}