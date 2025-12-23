
import React, { useState, useMemo } from 'react';
import { UserRole, NavState, User } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './views/Dashboard';
import AlumniDirectory from './views/AlumniDirectory';
import BusinessDirectory from './views/BusinessDirectory';
import DonationPortal from './views/DonationPortal';
import ProfileView from './views/ProfileView';
import SystemDocs from './views/SystemDocs';
import EventsView from './views/EventsView';
import LandingPage from './views/LandingPage';
import CommunitySupport from './views/CommunitySupport';
import IdeaBox from './views/IdeaBox';
import LoginPage from './views/LoginPage';

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

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [nav, setNav] = useState<NavState>({ view: 'LANDING' });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleNavigate = (view: NavState['view']) => {
    setNav({ view });
    setIsSidebarOpen(false);
  };

  const switchUser = () => {
    if (!currentUser) return;
    setCurrentUser(currentUser.role === UserRole.ADMIN ? MOCK_ALUMNI : MOCK_ADMIN);
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setNav({ view: 'DASHBOARD' });
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setNav({ view: 'LANDING' });
  };

  const renderView = useMemo(() => {
    if (nav.view === 'LANDING') {
      return <LandingPage onEnterPortal={() => handleNavigate('LOGIN')} />;
    }
    
    if (nav.view === 'LOGIN') {
      return <LoginPage onLogin={handleLogin} onBackToLanding={() => handleNavigate('LANDING')} />;
    }

    if (!currentUser) return <LandingPage onEnterPortal={() => handleNavigate('LOGIN')} />;

    switch (nav.view) {
      case 'DASHBOARD':
        return <Dashboard user={currentUser} />;
      case 'ALUMNI':
        return <AlumniDirectory />;
      case 'BUSINESS':
        return <BusinessDirectory />;
      case 'DONATIONS':
        return <DonationPortal isAdmin={currentUser.role === UserRole.ADMIN} />;
      case 'EVENTS':
        return <EventsView />;
      case 'PROFILE':
        return <ProfileView userId={currentUser.id} userRole={currentUser.role} userName={currentUser.fullName} />;
      case 'SYSTEM_DOCS':
        return <SystemDocs />;
      case 'SUPPORT':
        return <CommunitySupport />;
      case 'IDEAS':
        return <IdeaBox isAdmin={currentUser.role === UserRole.ADMIN} />;
      default:
        return <Dashboard user={currentUser} />;
    }
  }, [nav.view, currentUser]);

  if (nav.view === 'LANDING' || nav.view === 'LOGIN') {
    return <div className="min-h-screen bg-white">{renderView}</div>;
  }

  // Double check auth for other views
  if (!currentUser) return <div className="min-h-screen bg-white">{renderView}</div>;

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-inter">
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar 
        currentView={nav.view} 
        onNavigate={handleNavigate} 
        role={currentUser.role}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header 
          user={currentUser} 
          onProfileClick={() => handleNavigate('PROFILE')}
          onLogout={handleLogout}
          onToggleSidebar={toggleSidebar}
          onSwitchRole={switchUser}
        />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            {renderView}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
