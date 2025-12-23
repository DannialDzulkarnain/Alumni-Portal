
import React from 'react';

const mockBusinesses = [
  { id: '1', name: 'TechVibe Solutions', industry: 'Software Engineering', owner: 'Ahmad Faiz', website: 'techvibe.io', description: 'Enterprise-grade cloud solutions and mobile development services.' },
  { id: '2', name: 'GreenLeaf Café', industry: 'F&B', owner: 'Sarah Tan', website: 'greenleaf.com', description: 'Organic farm-to-table dining experience in the heart of the city.' },
  { id: '3', name: 'FitFlow Studio', industry: 'Health & Wellness', owner: 'Zulkifli Amin', website: 'fitflow.my', description: 'Premium yoga and meditation sanctuary for working professionals.' },
];

const BusinessDirectory: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">ASTInaga Directory</h3>
          <p className="text-slate-500">Support alumni-owned businesses and explore collaborations.</p>
        </div>
        <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
          Register Business
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockBusinesses.map((biz) => (
          <div key={biz.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all group">
            <div className="h-32 bg-slate-100 flex items-center justify-center border-b border-slate-100">
               <span className="text-4xl font-black text-slate-300 group-hover:text-indigo-200 transition-colors uppercase">{biz.name[0]}</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-lg uppercase tracking-wider">{biz.industry}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{biz.name}</h4>
              <p className="text-slate-500 text-sm mb-4 line-clamp-2">{biz.description}</p>
              
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Founder</p>
                  <p className="text-sm font-semibold text-slate-700">{biz.owner}</p>
                </div>
                <a 
                  href={`https://${biz.website}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessDirectory;
