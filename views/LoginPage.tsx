
import React, { useState } from 'react';
import { User, UserRole } from '../types';

interface LoginPageProps {
  onLogin: (user: User) => void;
  onBackToLanding: () => void;
}

const MOCK_ADMIN: User = {
  id: '1',
  email: 'admin@astiportal.org',
  role: UserRole.ADMIN,
  fullName: 'Administrator'
};

const MOCK_ALUMNI: User = {
  id: '2',
  email: 'zulkifli@alumni.org',
  role: UserRole.ALUMNI,
  fullName: 'Zulkifli Amin'
};

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onBackToLanding }) => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.ALUMNI);
  const [email, setEmail] = useState(MOCK_ALUMNI.email);
  const [isLoading, setIsLoading] = useState(false);

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setEmail(role === UserRole.ADMIN ? MOCK_ADMIN.email : MOCK_ALUMNI.email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API delay
    setTimeout(() => {
      onLogin(selectedRole === UserRole.ADMIN ? MOCK_ADMIN : MOCK_ALUMNI);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 animate-fadeIn">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl shadow-xl shadow-indigo-100 mb-6 group cursor-pointer" onClick={onBackToLanding}>
            <span className="text-white text-3xl font-black">A</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Welcome Back</h2>
          <p className="text-slate-500 mt-2">Access the ASTI professional ecosystem</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="flex border-b border-slate-50">
            <button 
              onClick={() => handleRoleSelect(UserRole.ALUMNI)}
              className={`flex-1 py-5 text-sm font-bold transition-all ${selectedRole === UserRole.ALUMNI ? 'text-indigo-600 bg-white' : 'text-slate-400 bg-slate-50/50 hover:text-slate-600'}`}
            >
              Alumni Login
            </button>
            <button 
              onClick={() => handleRoleSelect(UserRole.ADMIN)}
              className={`flex-1 py-5 text-sm font-bold transition-all ${selectedRole === UserRole.ADMIN ? 'text-indigo-600 bg-white' : 'text-slate-400 bg-slate-50/50 hover:text-slate-600'}`}
            >
              Admin Access
            </button>
          </div>

          <div className="p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
                  </span>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-sm font-medium"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2 ml-1">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Password</label>
                  <a href="#" className="text-[10px] font-bold text-indigo-600 hover:underline">Forgot?</a>
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </span>
                  <input 
                    type="password" 
                    defaultValue="password123"
                    className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-sm font-medium"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 px-1">
                <input type="checkbox" id="remember" className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500" defaultChecked />
                <label htmlFor="remember" className="text-xs text-slate-500 font-medium">Keep me signed in</label>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full py-4 ${isLoading ? 'bg-slate-800' : 'bg-slate-900 hover:bg-slate-800'} text-white font-black rounded-2xl transition-all shadow-xl shadow-slate-200 transform active:scale-95 flex items-center justify-center space-x-2`}
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <span>Sign In</span>
                )}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-50">
              <div className="bg-indigo-50/50 rounded-2xl p-4 mb-6 border border-indigo-100">
                <h4 className="text-[10px] font-black text-indigo-900 uppercase tracking-widest mb-3 flex items-center">
                  <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Demo Credentials
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-indigo-700 font-bold">Admin:</span>
                    <code className="bg-white px-2 py-0.5 rounded border border-indigo-100 text-indigo-900">admin@astiportal.org</code>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-indigo-700 font-bold">Alumni:</span>
                    <code className="bg-white px-2 py-0.5 rounded border border-indigo-100 text-indigo-900">zulkifli@alumni.org</code>
                  </div>
                  <div className="flex justify-between items-center text-[11px] pt-1 border-t border-indigo-100/50">
                    <span className="text-indigo-700 font-bold">Password:</span>
                    <code className="bg-white px-2 py-0.5 rounded border border-indigo-100 text-indigo-900">password123</code>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-slate-400 font-medium text-center">
                New to the platform? <a href="#" className="text-indigo-600 font-bold hover:underline">Request Access</a>
              </p>
            </div>
          </div>
        </div>

        <button 
          onClick={onBackToLanding}
          className="mt-8 text-slate-400 hover:text-slate-600 text-xs font-bold transition-colors flex items-center justify-center space-x-2 w-full"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          <span>Back to Landing Page</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
