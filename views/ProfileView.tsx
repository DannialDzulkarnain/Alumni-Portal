
import React, { useState } from 'react';
import { UserRole } from '../types';

interface ProfileViewProps {
  userId: string;
  userRole: UserRole;
  userName: string;
}

const ProfileView: React.FC<ProfileViewProps> = ({ userId, userRole, userName }) => {
  const [activeTab, setActiveTab] = useState('INFO');

  const isAdmin = userRole === UserRole.ADMIN;

  return (
    <div className="max-w-5xl mx-auto animate-fadeIn pb-10">
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className={`h-32 sm:h-40 bg-gradient-to-r ${isAdmin ? 'from-indigo-600 to-indigo-900' : 'from-emerald-600 to-emerald-900'} relative`}>
          <button className="absolute bottom-3 right-4 sm:bottom-4 sm:right-8 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold rounded-lg border border-white/30 transition-all">
            Update Cover
          </button>
        </div>
        <div className="px-6 sm:px-12 pb-8 sm:pb-12 relative">
          <div className="flex flex-col md:flex-row md:items-end -mt-12 sm:-mt-16 space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative group w-32 sm:w-40 h-32 sm:h-40 mx-auto md:mx-0">
              <img 
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&size=200&background=${isAdmin ? '6366f1' : '10b981'}&color=fff`} 
                alt="Profile" 
                className="w-full h-full rounded-2xl sm:rounded-3xl border-4 border-white shadow-xl object-cover bg-white"
              />
              <button className="absolute inset-0 bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl sm:rounded-3xl flex items-center justify-center font-bold text-xs sm:text-sm">
                Change
              </button>
            </div>
            <div className="flex-1 pb-2 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{userName}</h2>
              <p className="text-sm sm:text-base text-slate-500 font-medium">
                {isAdmin ? 'System Architect' : 'Senior Cloud Engineer'} • Batch 2012
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[9px] sm:text-[10px] font-black uppercase rounded-full border border-emerald-100">Active Member</span>
                {!isAdmin && <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-[9px] sm:text-[10px] font-black uppercase rounded-full border border-indigo-100">Duta Batch</span>}
              </div>
            </div>
            <div className="flex space-x-3 pb-2 pt-4 md:pt-0">
               <button className={`w-full md:w-auto px-6 py-3 ${isAdmin ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-emerald-600 hover:bg-emerald-700'} text-white font-bold rounded-xl transition-all shadow-lg text-sm`}>
                 Save Profile
               </button>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 flex border-b border-slate-100 space-x-4 sm:space-x-8 overflow-x-auto scrollbar-hide">
            {['INFO', 'SECURITY', 'MEMBERSHIP', 'ACTIVITY'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-xs sm:text-sm font-bold transition-all border-b-2 whitespace-nowrap ${
                  activeTab === tab ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="py-6 sm:py-10">
            {activeTab === 'INFO' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Full Name</label>
                    <input type="text" defaultValue={userName} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 text-sm" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Current Profession</label>
                    <input type="text" defaultValue={isAdmin ? 'System Architect' : 'Senior Cloud Engineer'} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 text-sm" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Location</label>
                    <input type="text" defaultValue="Cyberjaya, Malaysia" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 text-sm" />
                  </div>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Bio / Summary</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-sm" defaultValue="Passionate alumnus dedicated to bridging technology and community support."></textarea>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Profile Visibility</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 text-sm">
                       <option value="PUBLIC">Public</option>
                       <option value="ALUMNI_ONLY">Alumni Only</option>
                       <option value="PRIVATE">Private</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'MEMBERSHIP' && (
               <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                 <div>
                    <h5 className="text-lg sm:text-xl font-bold text-slate-900">Life Membership</h5>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">Next due payment: Dec 31, 2024</p>
                    <div className="mt-4 flex items-center space-x-2">
                       <span className={`text-xl sm:text-2xl font-black ${isAdmin ? 'text-indigo-600' : 'text-emerald-600'}`}>{isAdmin ? '$1,000' : '$500'}</span>
                       <span className="text-slate-400 text-xs sm:text-sm">/ $1,000 total</span>
                    </div>
                 </div>
                 <button className={`w-full sm:w-auto px-6 py-3 ${isAdmin ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-emerald-600 hover:bg-emerald-700'} text-white font-bold rounded-xl transition-all text-sm shadow-md`}>
                   {isAdmin ? 'Payment Complete' : 'Complete Payment'}
                 </button>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
