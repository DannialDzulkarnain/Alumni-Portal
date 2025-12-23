
import React from 'react';
import { DonationCategory } from '../types';

interface DonationPortalProps {
  isAdmin: boolean;
}

const DonationPortal: React.FC<DonationPortalProps> = ({ isAdmin }) => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'ASTI General Fund', count: '$12,405', goal: '$20,000', icon: '🏛️', color: 'indigo' },
          { title: 'ASTI KASIH', count: '$8,900', goal: '$10,000', icon: '💖', color: 'rose' },
          { title: 'IHY’ Project', count: '$22,500', goal: '$30,000', icon: '🌙', color: 'emerald' },
        ].map((fund, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="flex justify-between items-start relative z-10">
              <span className="text-3xl">{fund.icon}</span>
              <button className="text-xs font-bold text-slate-400 hover:text-indigo-600">Details</button>
            </div>
            <h4 className="text-lg font-bold text-slate-800 mt-4 mb-2">{fund.title}</h4>
            <div className="mt-4">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-500">Raised: {fund.count}</span>
                <span className="text-slate-400">Goal: {fund.goal}</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-${fund.color}-500 transition-all duration-1000`} 
                  style={{ width: `${(parseInt(fund.count.replace('$', '').replace(',', '')) / parseInt(fund.goal.replace('$', '').replace(',', ''))) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h4 className="text-xl font-bold text-slate-900 mb-6">Make a Contribution</h4>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Donation Category</label>
            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500">
              <option value={DonationCategory.ASTI}>ASTI General Fund</option>
              <option value={DonationCategory.ASTI_KASIH}>ASTI KASIH</option>
              <option value={DonationCategory.IHY}>IHY’ Project</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Amount ($)</label>
            <input 
              type="number" 
              placeholder="0.00"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="md:col-span-2">
            <button className="w-full py-4 bg-indigo-600 text-white font-extrabold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 transform active:scale-[0.98]">
              Proceed to Secure Payment
            </button>
          </div>
        </form>
      </div>

      {isAdmin && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <h4 className="text-lg font-bold text-slate-800">Global Donation Log (Admin)</h4>
            <div className="flex space-x-2">
               <button className="px-3 py-1 bg-white border border-slate-200 text-[11px] font-bold rounded-md hover:bg-slate-50 uppercase tracking-tighter">Quarterly Export</button>
               <button className="px-3 py-1 bg-white border border-slate-200 text-[11px] font-bold rounded-md hover:bg-slate-50 uppercase tracking-tighter">Yearly Summary</button>
            </div>
          </div>
          <div className="divide-y divide-slate-100">
             {[
               { donor: 'Zulkifli Amin', date: 'Oct 12, 2023', category: 'IHY', amount: '$1,000' },
               { donor: 'Sarah Latif', date: 'Oct 10, 2023', category: 'ASTI KASIH', amount: '$500' },
               { donor: 'Anonymous', date: 'Oct 08, 2023', category: 'ASTI', amount: '$5,000' },
               { donor: 'Batch 2012 Group', date: 'Oct 05, 2023', category: 'ASTI KASIH', amount: '$2,500' },
             ].map((log, i) => (
               <div key={i} className="px-8 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                 <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-xs">{log.donor[0]}</div>
                    <div>
                      <p className="font-bold text-slate-900">{log.donor}</p>
                      <p className="text-xs text-slate-400">{log.date}</p>
                    </div>
                 </div>
                 <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">{log.amount}</p>
                    <span className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full uppercase font-black">{log.category}</span>
                 </div>
               </div>
             ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationPortal;
