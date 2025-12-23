
import React, { useState } from 'react';

interface LandingPageProps {
  onEnterPortal: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterPortal }) => {
  const [activeFlow, setActiveFlow] = useState<'ALUMNI' | 'ADMIN'>('ALUMNI');

  const alumniSteps = [
    { title: 'Secure Onboarding', desc: 'Register with institutional credentials and undergo automated batch verification.', icon: '🔐' },
    { title: 'Professional Identity', desc: 'Curate your profile, toggle visibility, and list your business in the ASTInaga directory.', icon: '👔' },
    { title: 'Network & Grow', desc: 'Find mentors, RSVP to exclusive events, and collaborate on professional opportunities.', icon: '🌐' },
    { title: 'Social Impact', desc: 'Contribute to ASTI KASIH funds and support community-driven initiatives.', icon: '🌟' },
  ];

  const adminSteps = [
    { title: 'Membership Control', desc: 'Verify new registrations, manage Duta Batch statuses, and track membership dues.', icon: '👮' },
    { title: 'Event Orchestration', desc: 'Create and manage ASTI events, track participation, and send notifications.', icon: '📅' },
    { title: 'Ecosystem Growth', desc: 'Moderate business listings and review community-submitted ideas for organizational growth.', icon: '🚀' },
    { title: 'Data Intelligence', desc: 'Generate real-time reports on batch distribution, donation summaries, and demographics.', icon: '📊' },
  ];

  const steps = activeFlow === 'ALUMNI' ? alumniSteps : adminSteps;

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-xl text-white shadow-lg group-hover:bg-indigo-500 transition-colors">A</div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">ASTI Portal</span>
        </div>
        <button 
          onClick={onEnterPortal}
          className="px-6 py-2.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-md text-sm active:scale-95"
        >
          Enter Portal
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2 space-y-8 animate-fadeIn">
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight">
              Empowering the <span className="text-indigo-600">ASTI</span> Alumni Legacy.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A professional digital ecosystem designed for alumni networking, business growth, 
              event management, and social impact. Secure, scalable, and built for the future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button 
                onClick={onEnterPortal}
                className="px-10 py-4 bg-indigo-600 text-white font-extrabold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 transform hover:-translate-y-1 active:scale-95"
              >
                Access Alumni Portal
              </button>
              <a href="#flow" className="px-10 py-4 bg-slate-100 text-slate-900 font-extrabold rounded-2xl hover:bg-slate-200 transition-all flex items-center justify-center">
                System Flow
              </a>
            </div>
            <div className="pt-6 flex items-center justify-center lg:justify-start space-x-6 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
               <span>✓ 100% Secure</span>
               <span>✓ PDPA Compliant</span>
               <span>✓ Cloud Scale</span>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2 mt-12 lg:mt-0 relative">
             <div className="relative z-10 bg-white p-4 rounded-[3rem] shadow-2xl border border-slate-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" className="rounded-2xl" alt="Collaboration" />
             </div>
             <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10"></div>
             <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-50 -z-10"></div>
          </div>
        </div>
      </header>

      {/* Feature Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Core Platform Capabilities</h2>
            <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Membership', desc: 'Secure registration and flexible fee management (Partial/Full payments).', icon: '👤' },
              { title: 'ASTInaga', desc: 'Comprehensive business directory for alumni-owned enterprises.', icon: '🏢' },
              { title: 'Impact', desc: 'Dedicated donation channels for ASTI, ASTI KASIH, and IHY’ projects.', icon: '🤝' },
              { title: 'Analytics', desc: 'Real-time demographic and financial reporting for administrators.', icon: '📈' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group hover:-translate-y-2">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Flow Section */}
      <section id="flow" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">System Integration Workflows</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">See how the ASTI Portal serves different stakeholders in the organization.</p>
          </div>

          <div className="flex justify-center mb-16">
            <div className="bg-slate-100 p-1.5 rounded-2xl flex">
              <button 
                onClick={() => setActiveFlow('ALUMNI')}
                className={`px-8 py-3 rounded-xl font-bold transition-all text-sm ${activeFlow === 'ALUMNI' ? 'bg-white text-indigo-600 shadow-md scale-105' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Alumni Experience
              </button>
              <button 
                onClick={() => setActiveFlow('ADMIN')}
                className={`px-8 py-3 rounded-xl font-bold transition-all text-sm ${activeFlow === 'ADMIN' ? 'bg-white text-emerald-600 shadow-md scale-105' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Administrative Ops
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center group bg-white lg:bg-transparent p-8 lg:p-0 rounded-3xl border border-slate-100 lg:border-none shadow-sm lg:shadow-none hover:shadow-lg lg:hover:shadow-none transition-shadow">
                  <div className={`w-20 h-20 rounded-3xl ${activeFlow === 'ALUMNI' ? 'bg-indigo-600' : 'bg-emerald-600'} text-white flex flex-col items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform relative`}>
                    <span className="text-3xl">{step.icon}</span>
                    <span className="absolute -bottom-2 -right-2 w-7 h-7 bg-white text-slate-900 rounded-full flex items-center justify-center text-[10px] font-black border-2 border-slate-50">0{i+1}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-xs">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-4xl lg:text-5xl font-black mb-2">4.2k+</div>
            <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Verified Alumni</p>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-black mb-2">$52k</div>
            <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Donations YTD</p>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-black mb-2">140+</div>
            <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Alumni Businesses</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-indigo-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-indigo-600 opacity-10 pointer-events-none"></div>
           <div className="relative z-10">
             <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">Ready to join the network?</h2>
             <p className="text-indigo-200 text-lg sm:text-xl mb-12 max-w-2xl mx-auto">
               Reconnect with your roots, build your business, and help us build a stronger ASTI community together.
             </p>
             <button 
               onClick={onEnterPortal}
               className="px-12 py-5 bg-white text-indigo-900 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-xl text-lg transform hover:-translate-y-1 active:scale-95"
             >
               Launch ASTI Portal
             </button>
           </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm">
        <p>&copy; 2024 ASTI Portal. All rights reserved. Designed for professional excellence.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
