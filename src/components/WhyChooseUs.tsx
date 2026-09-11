import React from 'react';
import { 
  Building2, 
  CheckCircle, 
  Zap, 
  UserCheck, 
  Lock, 
  Heart,
  ShieldCheck,
  Award
} from 'lucide-react';

const WHY_CARDS = [
  {
    icon: Building2,
    badge: 'Local Community',
    title: '🏥 Trusted Local Pharmacy',
    description: 'Serving customers in Nambiyur and nearby areas with dedicated neighborhood healthcare access.',
    accent: 'border-emerald-200 bg-emerald-50/40 text-emerald-800'
  },
  {
    icon: ShieldCheck,
    badge: '100% Genuine',
    title: '💯 Quality Healthcare Products',
    description: 'Focus on genuine medicines and healthcare essentials sourced strictly through authorized pharma distributors.',
    accent: 'border-teal-200 bg-teal-50/40 text-teal-800'
  },
  {
    icon: Zap,
    badge: 'Responsive',
    title: '⚡ Quick Service',
    description: 'Easy ordering and responsive customer support over phone, WhatsApp, and at our physical counter.',
    accent: 'border-amber-200 bg-amber-50/40 text-amber-800'
  },
  {
    icon: UserCheck,
    badge: 'Qualified Team',
    title: '👨‍⚕️ Pharmacist Assistance',
    description: 'Get assistance from our pharmacy team when needed for dosage clarification and medicine availability.',
    accent: 'border-blue-200 bg-blue-50/40 text-blue-800'
  },
  {
    icon: Lock,
    badge: 'Confidential',
    title: '🔒 Privacy & Care',
    description: 'Handle customer and prescription information responsibly with complete confidentiality.',
    accent: 'border-indigo-200 bg-indigo-50/40 text-indigo-800'
  },
  {
    icon: Heart,
    badge: 'Neighborhood Focus',
    title: '❤️ Customer First',
    description: 'Friendly, convenient, and reliable local pharmacy service committed to your family’s ongoing well-being.',
    accent: 'border-rose-200 bg-rose-50/40 text-rose-800'
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-section" className="py-16 sm:py-20 bg-slate-50/80 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>The Kutty Pharmacy Difference</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose KUTTY PHARMACY?
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            We combine the speed of modern pharmacy services with the warm, dependable care of your neighborhood medical shop.
          </p>
        </div>

        {/* 6 Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CARDS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-emerald-500/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Dedicated to Nambiyur</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
