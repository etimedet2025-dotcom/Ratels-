import { motion } from 'motion/react';
import { 
  Plus, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle,
  FileText,
  Camera,
  Search
} from 'lucide-react';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import Logo from '../components/Logo';

const myReports = [
  { id: 'RT-1042', status: 'In Review', date: 'Oct 24, 2024', title: 'Lagos Road Maintenance Request', icon: Clock, color: 'text-orange-500', bg: 'bg-orange-50' },
  { id: 'RT-1039', status: 'Verified', date: 'Oct 20, 2024', title: 'Power Grid Feedback - Ikeja', icon: CheckCircle2, color: 'text-nigeria-green', bg: 'bg-emerald-50' },
  { id: 'RT-1035', status: 'Closed', date: 'Oct 15, 2024', title: 'Community Water Project Update', icon: CheckCircle2, color: 'text-slate-400', bg: 'bg-slate-50' },
];

export default function UserDashboard() {
  return (
    <PageTransition>
      <div className="space-y-8 pb-10">
        {/* Welcome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-charcoal">Hello, Citizen 🇳🇬</h1>
            <p className="text-slate-500 font-medium">Keep track of your civic contributions.</p>
          </div>
          <Link to="/reports/new">
            <Button className="rounded-2xl shadow-lg shadow-nigeria-green/20 px-8" leftIcon={<Plus size={20} />}>
              Record New Report
            </Button>
          </Link>
        </div>

        {/* Quick Action Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <motion.div 
             whileHover={{ y: -8, scale: 1.01 }}
             animate={{ y: [0, -5, 0] }}
             transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
             className="bg-nigeria-emerald p-8 rounded-[2rem] text-white overflow-hidden relative group shadow-xl shadow-emerald-900/10"
           >
              <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                 <Logo size="xl" className="h-48 w-48 brightness-0 invert" />
              </div>
              <div className="relative z-10 space-y-4">
                 <h2 className="text-2xl font-bold">Evidence Upload</h2>
                 <p className="text-white/60 max-w-[200px] leading-snug">Add photos, videos or documents to support your existing cases.</p>
                 <Button variant="glass" className="px-6 py-2 rounded-xl text-sm font-bold">
                    Upload Now
                 </Button>
              </div>
           </motion.div>

           <motion.div 
             whileHover={{ y: -8, scale: 1.01 }}
             animate={{ y: [0, -5, 0] }}
             transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
             className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm relative group overflow-hidden"
           >
              <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                 <Search size={140} />
              </div>
              <div className="relative z-10 space-y-4">
                 <h2 className="text-2xl font-bold text-charcoal">Public Knowledge</h2>
                 <p className="text-slate-400 max-w-[220px] leading-snug">Browse verified community reports and local government updates.</p>
                 <Button variant="ghost" className="px-6 py-2 rounded-xl text-sm font-bold border border-slate-200">
                    Search Archive
                 </Button>
              </div>
           </motion.div>
        </div>

        {/* Reports Feed */}
        <div className="space-y-4">
           <div className="flex items-center justify-between px-2">
              <h3 className="font-bold text-lg text-charcoal flex items-center gap-2">
                 My Recent Activity
                 <span className="bg-nigeria-light text-nigeria-green text-xs px-2 py-1 rounded-full font-bold">3 Active</span>
              </h3>
              <Link to="/reports" className="text-sm font-bold text-nigeria-green hover:underline">View History</Link>
           </div>

           <div className="space-y-4">
              {myReports.map((report, i) => (
                <motion.div 
                  key={report.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group flex items-center justify-between"
                >
                  <div className="flex items-center gap-5">
                     <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0", report.bg)}>
                        <report.icon size={26} className={report.color} />
                     </div>
                     <div>
                        <div className="flex items-center gap-3">
                           <span className={cn("text-[10px] font-bold uppercase tracking-widest", report.color)}>{report.status}</span>
                           <span className="w-1 h-1 bg-slate-200 rounded-full" />
                           <span className="text-xs text-slate-400 font-medium">{report.date}</span>
                        </div>
                        <h4 className="font-bold text-charcoal mt-0.5 group-hover:text-nigeria-green transition-colors">{report.title}</h4>
                        <p className="text-xs text-slate-400 mt-0.5 font-medium uppercase tracking-tight">ID: {report.id}</p>
                     </div>
                  </div>
                  <button className="p-3 bg-slate-50 text-slate-400 rounded-2xl group-hover:bg-nigeria-green group-hover:text-white transition-all">
                     <ArrowRight size={20} />
                  </button>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Helpful Tip */}
        <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-6 flex gap-4">
           <AlertCircle className="text-nigeria-green shrink-0" size={24} />
           <div>
              <p className="text-sm font-bold text-nigeria-emerald">Civic Action Tip</p>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                 High-quality photos and GPS tagging help our operatives verify your reports 3x faster. 
                 Ensure your location services are enabled when filing new reports.
              </p>
           </div>
        </div>
      </div>
    </PageTransition>
  );
}
