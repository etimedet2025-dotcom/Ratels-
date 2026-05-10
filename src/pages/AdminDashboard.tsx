import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import { 
  TrendingUp, 
  Users, 
  FileCheck, 
  AlertCircle,
  ArrowUpRight,
  Clock,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import AnimatedIcon from '../components/AnimatedIcon';
import AnimatedCounter from '../components/AnimatedCounter';
import PageTransition from '../components/PageTransition';
import { cn } from '../lib/utils';
import Logo from '../components/Logo';

const data = [
  { name: 'Mon', reports: 40, resolve: 24 },
  { name: 'Tue', reports: 30, resolve: 13 },
  { name: 'Wed', reports: 20, resolve: 38 },
  { name: 'Thu', reports: 27, resolve: 39 },
  { name: 'Fri', reports: 18, resolve: 48 },
  { name: 'Sat', reports: 23, resolve: 38 },
  { name: 'Sun', reports: 34, resolve: 43 },
];

const stats = [
  { label: 'Active Reports', value: '1,284', change: '+12%', icon: AlertCircle, color: 'text-orange-500', bg: 'bg-orange-50' },
  { label: 'Verified Cases', value: '892', change: '+8%', icon: FileCheck, color: 'bg-nigeria-green', bg: 'bg-emerald-50' },
  { label: 'Community Size', value: '42.5k', change: '+24%', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
  { label: 'Uptime', value: '99.9%', change: 'Stable', icon: TrendingUp, color: 'text-purple-500', bg: 'bg-purple-50' },
];

export default function AdminDashboard() {
  return (
    <PageTransition>
      <div className="space-y-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-charcoal">System Overview</h1>
            <p className="text-slate-500 mt-1">Real-time analytical data for Nationwide operations.</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-charcoal text-[10px] text-white flex items-center justify-center">+12</div>
             </div>
             <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors">
                View Staff
             </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, -4, 0],
              }}
              transition={{ 
                delay: i * 0.1,
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }
              }}
              whileHover={{ scale: 1.02, shadow: "0 25px 50px -12px rgb(0 0 0 / 0.15)" }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 group transition-all cursor-default relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className={cn("p-3 rounded-2xl", stat.bg)}>
                   <stat.icon className={cn("w-6 h-6", stat.color.includes('bg') ? 'text-white' : stat.color)} />
                </div>
                <div className={cn("text-[10px] font-bold px-2 py-1 rounded-lg", 
                  stat.change.includes('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                )}>
                  {stat.change}
                </div>
              </div>
              <p className="text-slate-500 text-sm font-medium relative z-10">{stat.label}</p>
              <h3 className="text-2xl font-bold text-charcoal mt-1 tracking-tight relative z-10">
                 <AnimatedCounter value={parseInt(stat.value.replace(/,/g, ''))} suffix={stat.value.includes('k') ? 'k' : stat.value.includes('%') ? '%' : ''} />
              </h3>
              
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <stat.icon size={80} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
               <div>
                  <h3 className="font-bold text-lg">Operational Velocity</h3>
                  <p className="text-sm text-slate-400">Activity volume per day</p>
               </div>
               <select className="bg-slate-50 border-none outline-none text-xs font-bold p-2 px-3 rounded-lg">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
               </select>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#008751" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#008751" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94A3B8'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94A3B8'}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="reports" stroke="#008751" strokeWidth={3} fillOpacity={1} fill="url(#colorGreen)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-charcoal p-8 rounded-[2.5rem] text-white overflow-hidden relative group shadow-2xl shadow-emerald-950/20">
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-all group-hover:scale-110 group-hover:-rotate-6 pointer-events-none">
                <Logo size="xl" className="h-64 w-64 brightness-0 invert shadow-none border-none" />
             </div>
             
             <div className="relative z-10 h-full flex flex-col">
                <h3 className="font-bold text-xl mb-2">Internal Bulletin</h3>
                <p className="text-white/40 text-sm mb-8 leading-relaxed">
                   Critical system updates and operative notices for the current cycle.
                </p>

                <div className="space-y-6 flex-1">
                   {[
                     { time: '10m ago', title: 'New Case ID #82', urgent: true },
                     { time: '2h ago', title: 'System Patch v4.2', urgent: false },
                     { time: '5h ago', title: 'Backup Completed', urgent: false }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <div className={cn("w-1 h-10 rounded-full shrink-0", item.urgent ? 'bg-red-500' : 'bg-white/10')} />
                        <div>
                           <p className="text-xs text-white/30 font-bold uppercase tracking-widest">{item.time}</p>
                           <p className="font-medium mt-1">{item.title}</p>
                        </div>
                     </div>
                   ))}
                </div>

                <button className="w-full bg-white/10 hover:bg-white/20 p-4 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2 mt-8">
                   Open Feed <ExternalLink size={14} />
                </button>
             </div>
          </div>
        </div>

        {/* Recent Cases */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between">
             <h3 className="font-bold text-lg">Active Case Feed</h3>
             <button className="text-nigeria-green font-bold text-sm hover:underline">View All Operations</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-[10px] uppercase tracking-widest font-bold text-slate-400">
                  <th className="px-8 py-4">Case Entity</th>
                  <th className="px-8 py-4">Location</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4">Priority</th>
                  <th className="px-8 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[1,2,3,4,5].map(i => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                         <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-charcoal font-bold">R</div>
                         <div>
                            <p className="text-sm font-bold text-charcoal">Public Utility Reporting</p>
                            <p className="text-xs text-slate-400">TRK-928-{i}</p>
                         </div>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-sm text-slate-500 font-medium">Lagos, NG</td>
                    <td className="px-8 py-5">
                       <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Investigating</span>
                    </td>
                    <td className="px-8 py-5">
                       <div className="flex items-center gap-1.5 text-orange-500">
                          <Clock size={14} />
                          <span className="text-xs font-bold">High</span>
                       </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                       <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-slate-200 rounded-lg text-slate-400">
                          <ExternalLink size={18} />
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
