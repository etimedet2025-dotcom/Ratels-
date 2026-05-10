import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Home, 
  PlusSquare, 
  MessageSquare, 
  User, 
  LogOut,
  Bell,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import Logo from '../components/Logo';
import { cn } from '../lib/utils';

interface UserLayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  const navItems = [
    { icon: Home, label: 'Feed', path: '/dashboard' },
    { icon: PlusSquare, label: 'Report', path: '/dashboard/reports/new' },
    { icon: MessageSquare, label: 'Messages', path: '/dashboard/messages' },
    { icon: User, label: 'Profile', path: '/dashboard/profile' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pb-20 md:pb-0">
      {/* Desktop Navbar */}
      <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-100 px-4 md:px-8 h-16 flex items-center justify-between">
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="overflow-hidden rounded-full shadow-md border border-slate-100">
             <Logo size="sm" />
          </div>
          <span className="font-bold text-charcoal tracking-tight text-xl uppercase italic">RATEL</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <NavLink 
              key={item.label}
              to={item.path}
              className={({ isActive }) => cn(
                "text-sm font-semibold transition-colors flex items-center gap-2",
                isActive ? "text-nigeria-green" : "text-slate-400 hover:text-charcoal"
              )}
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-charcoal relative transition-colors">
            <Bell size={22} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>
          <div className="w-9 h-9 rounded-full bg-nigeria-light border border-nigeria-green/20 overflow-hidden hidden sm:block">
             <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Lucky`} alt="Avatar" referrerPolicy="no-referrer" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 md:px-8 py-8">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-slate-100 px-6 flex items-center justify-between z-40 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {navItems.map(item => (
          <NavLink 
            key={item.label} 
            to={item.path}
            className={({ isActive }) => cn(
              "flex flex-col items-center gap-1 transition-all",
              isActive ? "text-nigeria-green scale-110" : "text-slate-300"
            )}
          >
            <item.icon size={24} />
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
