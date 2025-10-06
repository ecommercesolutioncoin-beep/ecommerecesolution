import { CheckCircle, Target, Settings, BarChart, Shield } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Target,
      title: "India-Focused Expertise",
      description: "We know Indian marketplaces, tax & compliance, and consumer trends inside-out."
    },
    {
      icon: Settings,
      title: "Tailored Growth Plans",
      description: "No one-size-fits-all, we build strategies specific to your products and market."
    },
    {
      icon: CheckCircle,
      title: "End-to-End Management",
      description: "From account setup to brand building & PPC ads, everything handled for you."
    },
    {
      icon: BarChart,
      title: "Proven ROI",
      description: "Our Amazon SEO services and JioMart listing optimization directly boost sales."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Weekly reports, clear communication, and dedicated account managers."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 Why Choose E-commerce Solution?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're your trusted partner for scaling on Amazon India and JioMart Marketplace with proven strategies and dedicated support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-all group">
              <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}