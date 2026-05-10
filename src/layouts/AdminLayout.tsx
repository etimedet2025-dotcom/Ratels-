import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  MessageSquare, 
  Bell, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Search,
  ShieldCheck
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import AnimatedIcon from '../components/AnimatedIcon';
import Logo from '../components/Logo';
import { cn } from '../lib/utils';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Control Center', path: '/admin/dashboard' },
    { icon: FileText, label: 'Case Management', path: '/admin/operations' },
    { icon: Users, label: 'Personnel', path: '/admin/staff' },
    { icon: MessageSquare, label: 'Intelligence', path: '/admin/feedback' },
    { icon: Settings, label: 'System Config', path: '/admin/settings' },
  ];

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden text-slate-700">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="bg-charcoal text-white flex flex-col z-50 shadow-2xl relative"
      >
        <div className="p-6 flex items-center justify-between">
          <AnimatePresence mode="wait">
            {isSidebarOpen ? (
              <motion.div 
                key="logo"
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="flex items-center gap-3"
              >
                <div className="bg-white rounded-xl p-1 shadow-lg shadow-emerald-950/50 overflow-hidden">
                  <Logo size="sm" />
                </div>
                <span className="font-bold tracking-tighter text-xl">RATEL <span className="text-nigeria-green">HQ</span></span>
              </motion.div>
            ) : (
              <motion.div key="logo-min" className="mx-auto rounded-xl p-0.5 bg-white overflow-hidden shadow-lg shadow-emerald-950/50">
                 <Logo size="sm" className="h-7 w-7" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <nav className="flex-1 px-4 mt-6 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.label} to={item.path}>
                <motion.div
                  className={cn(
                    "flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all group overflow-hidden",
                    isActive ? "bg-nigeria-green text-white" : "hover:bg-white/5 text-white/60 hover:text-white"
                  )}
                >
                  <item.icon size={22} className={cn("shrink-0", isActive ? "text-white" : "group-hover:scale-110 transition-transform")} />
                  {isSidebarOpen && (
                    <motion.span 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="font-medium whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button className="flex items-center gap-4 px-4 py-3 w-full rounded-xl hover:bg-red-500/10 text-white/60 hover:text-red-400 transition-all">
            <LogOut size={22} className="shrink-0" />
            {isSidebarOpen && <span className="font-medium">Terminate Session</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400"
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl w-80">
              <Search size={18} className="text-slate-400" />
              <input type="text" placeholder="Global system search..." className="bg-transparent border-none outline-none text-sm w-full" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors relative text-slate-400">
                <Bell size={24} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
              </button>
            </div>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-charcoal">Officer E. Timothy</p>
                <p className="text-[10px] uppercase tracking-widest font-semibold text-nigeria-green">Primary Admin</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-tr from-nigeria-emerald to-nigeria-green rounded-xl shadow-lg border-2 border-white" />
            </div>
          </div>
        </header>

        {/* Dashboard Viewport */}
        <main className="flex-1 overflow-y-auto p-10 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
