
import React from 'react';
import { User, UserRole } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

interface DashboardProps {
  user: User;
}

const batchData = [
  { name: '2015', alumni: 120, active: 80 },
  { name: '2016', alumni: 150, active: 110 },
  { name: '2017', alumni: 200, active: 140 },
  { name: '2018', alumni: 180, active: 130 },
  { name: '2019', alumni: 250, active: 190 },
  { name: '2020', alumni: 300, active: 220 },
];

const professionData = [
  { name: 'Engineering', value: 35 },
  { name: 'Medical', value: 20 },
  { name: 'Business', value: 25 },
  { name: 'Education', value: 10 },
  { name: 'Creative', value: 10 },
];

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: 'Total Alumni', value: '4,281', change: '+12%', color: 'indigo' },
          { label: 'Active Members', value: '2,910', change: '+5%', color: 'emerald' },
          { label: 'ASTInaga Businesses', value: '142', change: '+18%', color: 'amber' },
          { label: 'Total Donations (YTD)', value: '$52,400', change: '+22%', color: 'rose' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <p className="text-xs sm:text-sm font-medium text-slate-500">{stat.label}</p>
            <div className="flex items-baseline mt-2 justify-between">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{stat.value}</h3>
              <span className={`text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full bg-${stat.color}-50 text-${stat.color}-600`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Batch Distribution Chart */}
        <div className="bg-white p-4 sm:p-8 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-6 flex items-center">
            <span className="w-1 h-6 bg-indigo-500 rounded-full mr-3"></span>
            Alumni Distribution by Batch
          </h4>
          <div className="h-[250px] sm:h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={batchData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  cursor={{ fill: '#f8fafc' }}
                />
                <Bar dataKey="alumni" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="active" fill="#c7d2fe" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Profession Segmentation */}
        <div className="bg-white p-4 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-6 flex items-center">
            <span className="w-1 h-6 bg-indigo-500 rounded-full mr-3"></span>
            Profession Segmentation
          </h4>
          <div className="h-[250px] sm:h-[300px] flex items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={professionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {professionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend 
                  layout="horizontal" 
                  align="center" 
                  verticalAlign="bottom" 
                  iconType="circle"
                  wrapperStyle={{ fontSize: '10px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity / Reporting */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 sm:px-8 py-5 sm:py-6 border-b border-slate-100 flex justify-between items-center">
          <h4 className="text-base sm:text-lg font-bold text-slate-800">Recent Member Submissions</h4>
          <button className="text-indigo-600 text-xs sm:text-sm font-bold hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <th className="px-6 sm:px-8 py-4">Name</th>
                <th className="px-6 sm:px-8 py-4">Batch</th>
                <th className="px-6 sm:px-8 py-4">Status</th>
                <th className="px-6 sm:px-8 py-4">Profession</th>
                <th className="px-6 sm:px-8 py-4 text-right">Payment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: 'Ahmad Faiz', batch: '2018', status: 'ACTIVE', job: 'Senior Architect', paid: '$500' },
                { name: 'Siti Nurhaliza', batch: '2015', status: 'PARTIAL', job: 'Medical Doctor', paid: '$250' },
                { name: 'John Doe', batch: '2020', status: 'ACTIVE', job: 'Tech Lead', paid: '$500' },
                { name: 'Sarah Connor', batch: '2019', status: 'PENDING', job: 'Cybersecurity Analyst', paid: '$0' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 sm:px-8 py-4 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-[10px] mr-3 flex-shrink-0">
                      {row.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors text-sm truncate max-w-[120px]">{row.name}</span>
                  </td>
                  <td className="px-6 sm:px-8 py-4 text-slate-600 text-sm">{row.batch}</td>
                  <td className="px-6 sm:px-8 py-4">
                    <span className={`px-2 py-1 rounded-full text-[9px] sm:text-[10px] font-bold ${
                      row.status === 'ACTIVE' ? 'bg-emerald-100 text-emerald-700' : 
                      row.status === 'PARTIAL' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 sm:px-8 py-4 text-slate-500 text-xs italic truncate max-w-[150px]">{row.job}</td>
                  <td className="px-6 sm:px-8 py-4 text-right font-mono font-semibold text-slate-700 text-sm">{row.paid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
