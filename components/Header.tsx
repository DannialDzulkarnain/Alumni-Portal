
import React from 'react';
import { User, UserRole } from '../types';

interface HeaderProps {
  user: User;
  onProfileClick: () => void;
  onLogout: () => void;
  onToggleSidebar: () => void;
  onSwitchRole: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onProfileClick, onLogout, onToggleSidebar, onSwitchRole }) => {
  return (
    <header className="bg-white border-b border-slate-200 px-4 sm:px-8 py-4 flex items-center justify-between sticky top-0 z-30 shadow-sm">
      <div className="flex items-center">
        <button 
          onClick={onToggleSidebar}
          className="lg:hidden mr-4 p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div className="flex flex-col">
          <h2 className="text-lg sm:text-xl font-bold text-slate-800 truncate max-w-[150px] sm:max-w-none">
            Welcome, {user.fullName.split(' ')[0]}
          </h2>
          <span className="text-[10px] text-indigo-600 font-black uppercase tracking-widest leading-none mt-1">
            ASTI Portal System
          </span>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 sm:space-x-6">
        <button 
          onClick={onSwitchRole}
          className="hidden md:flex items-center space-x-2 px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-100 hover:text-indigo-600 transition-all text-[11px] font-bold"
          title="Toggle between Admin and Alumni for Demo"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <span>Switch Persona</span>
        </button>

        <button className="relative p-2 text-slate-500 hover:text-indigo-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1 right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">3</span>
        </button>

        <div className="h-8 w-[1px] bg-slate-200 hidden sm:block"></div>

        <div className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer" onClick={onProfileClick}>
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-none">{user.fullName}</p>
            <p className="text-[11px] text-slate-500 font-medium mt-1">{user.role}</p>
          </div>
          <img 
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullName)}&background=${user.role === UserRole.ADMIN ? '6366f1' : '10b981'}&color=fff`} 
            alt="Avatar" 
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-100 shadow-sm group-hover:border-indigo-200 transition-all"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
