
import React from 'react';

interface IdeaBoxProps {
  isAdmin: boolean;
}

const IdeaBox: React.FC<IdeaBoxProps> = ({ isAdmin }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">Idea Box</h3>
          <p className="text-slate-500">Shape the future of the ASTI community with your suggestions.</p>
        </div>
        {!isAdmin && (
          <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
            Submit New Idea
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Digital Mentorship Program', votes: 142, status: 'In Review', author: 'Ahmad Faiz', category: 'Events' },
          { title: 'Quarterly Industry Hubs', votes: 89, status: 'Approved', author: 'Siti Nur', category: 'Professional' },
          { title: 'Alumni Scholarship Fund', votes: 204, status: 'Planned', author: 'Zulkifli Amin', category: 'Donation' },
        ].map((idea, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[9px] font-black uppercase rounded border border-indigo-100/50">{idea.category}</span>
                <span className={`text-[9px] font-black uppercase ${
                  idea.status === 'Approved' ? 'text-emerald-600' : 'text-amber-600'
                }`}>{idea.status}</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{idea.title}</h4>
              <p className="text-xs text-slate-400 mb-4">Proposed by {idea.author}</p>
            </div>
            
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-50">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
                </div>
                <span className="text-sm font-bold text-slate-700">{idea.votes}</span>
              </div>
              <button className="text-xs font-bold text-slate-400 hover:text-indigo-600">Comment</button>
            </div>
          </div>
        ))}
      </div>

      {isAdmin && (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
             <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
             Admin Strategy Review
          </h4>
          <p className="text-sm text-slate-500 mb-6">You are viewing all ideas including those marked as private or sensitive. Review and escalate high-impact ideas to the ASTI board.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
               <thead>
                 <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                   <th className="py-4 px-2">Recent Ideas</th>
                   <th className="py-4 px-2">Status</th>
                   <th className="py-4 px-2">Sentiment</th>
                   <th className="py-4 px-2 text-right">Action</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                 <tr>
                   <td className="py-4 px-2 font-medium">New Batch Reunion Hub</td>
                   <td className="py-4 px-2"><span className="text-amber-600 font-bold">New</span></td>
                   <td className="py-4 px-2 text-emerald-600 font-bold">+82%</td>
                   <td className="py-4 px-2 text-right"><button className="text-indigo-600 font-bold hover:underline">Review</button></td>
                 </tr>
               </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default IdeaBox;
