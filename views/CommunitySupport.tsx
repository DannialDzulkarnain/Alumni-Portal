
import React from 'react';

const CommunitySupport: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-indigo-600 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl shadow-indigo-200/50">
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-3xl font-black mb-4">Alumni Care & Support</h3>
          <p className="text-indigo-100 text-lg leading-relaxed">
            Giving back to those who built our foundation. Find former teachers, 
            request assistance for fellow alumni, or join community outreach programs.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Former Teachers Section */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
            <h4 className="text-lg font-bold text-slate-900">Former Teachers Legacy</h4>
            <button className="text-indigo-600 text-sm font-bold">Search Database</button>
          </div>
          <div className="p-6 space-y-4">
            {[
              { name: 'Dr. Ahmad Ibrahim', role: 'Mathematics (1990-2015)', status: 'Retired', image: 'https://i.pravatar.cc/100?u=teach1' },
              { name: 'Ms. Siti Fatimah', role: 'English Literature (1985-2010)', status: 'Active Support', image: 'https://i.pravatar.cc/100?u=teach2' },
              { name: 'Mr. Johnathan Lee', role: 'Physics (2000-Present)', status: 'Still Teaching', image: 'https://i.pravatar.cc/100?u=teach3' },
            ].map((teacher, i) => (
              <div key={i} className="flex items-center p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group">
                <img src={teacher.image} alt="" className="w-12 h-12 rounded-full border-2 border-white shadow-sm mr-4" />
                <div className="flex-1">
                  <h5 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{teacher.name}</h5>
                  <p className="text-xs text-slate-500">{teacher.role}</p>
                </div>
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${
                  teacher.status === 'Retired' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                }`}>
                  {teacher.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Assistance Requests Section */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="px-8 py-6 border-b border-slate-100">
            <h4 className="text-lg font-bold text-slate-900">Request Community Assistance</h4>
          </div>
          <div className="p-8 flex-1 space-y-6">
            <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl">
               <p className="text-xs text-rose-700 font-medium">
                 Use this form to flag cases where an alumnus or former staff member needs urgent support (financial, medical, or professional).
               </p>
            </div>
            <div className="space-y-4">
               <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase mb-2 block">Nature of Request</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Medical Support</option>
                    <option>Career Transition Help</option>
                    <option>ASTI KASIH Grant Application</option>
                    <option>Emergency Hardship</option>
                  </select>
               </div>
               <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase mb-2 block">Brief Situation Description</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-sm" placeholder="Please provide non-sensitive details here..."></textarea>
               </div>
               <button className="w-full py-4 bg-slate-900 text-white font-extrabold rounded-xl hover:bg-slate-800 transition-all">Submit Case for Review</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySupport;
