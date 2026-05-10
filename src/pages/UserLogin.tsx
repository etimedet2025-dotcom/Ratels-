import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LogIn, UserPlus, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import Button from '../components/Button';
import Logo from '../components/Logo';
import PageTransition from '../components/PageTransition';

export default function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-nigeria-green/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-nigeria-emerald/10 rounded-full blur-3xl -ml-48 -mb-48" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white rounded-[3rem] shadow-2xl shadow-emerald-900/10 border border-slate-100 overflow-hidden z-10 p-2"
        >
          <div className="p-10 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <Logo size="xl" className="h-48 w-48 opacity-10" />
            </div>

            <div className="text-center space-y-4 relative z-10">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ rotate: 10 }}
                className="mx-auto w-20 h-20 bg-slate-50 p-2 rounded-2xl flex items-center justify-center mb-6 shadow-inner"
              >
                 <Logo size="md" />
              </motion.div>
              <h1 className="text-3xl font-bold text-charcoal tracking-tighter">Welcome back</h1>
              <p className="text-slate-400 font-medium">Access your secure citizen dashboard</p>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-medium border border-red-100 flex items-center gap-2">
                <ShieldCheck size={16} />
                {error}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider ml-1">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-nigeria-green focus:ring-2 focus:ring-nigeria-green/20 outline-none transition-all bg-slate-50/50"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider ml-1">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-nigeria-green focus:ring-2 focus:ring-nigeria-green/20 outline-none transition-all bg-slate-50/50"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex items-center justify-between text-sm py-1">
                <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                  <input type="checkbox" className="rounded border-slate-300 text-nigeria-green focus:ring-nigeria-green" />
                  Remember me
                </label>
                <a href="#" className="text-nigeria-green font-medium hover:underline">Forgot password?</a>
              </div>
              
              <Button type="submit" isLoading={loading} className="w-full py-4 text-lg" rightIcon={<LogIn size={20} />}>
                Sign In
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-4 text-slate-400 font-medium">New to Ratel?</span></div>
            </div>

            <Link to="/signup" className="block">
              <Button variant="outline" className="w-full py-3" leftIcon={<UserPlus size={18} />}>
                Create an Account
              </Button>
            </Link>
          </div>
          
          <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
             <Link to="/admin/login" className="text-xs font-semibold text-slate-400 hover:text-nigeria-emerald transition-colors uppercase tracking-widest">
                Official Access Only
             </Link>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
