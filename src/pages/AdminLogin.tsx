import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Fingerprint, Lock, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import Button from '../components/Button';
import Logo from '../components/Logo';
import PageTransition from '../components/PageTransition';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Verification: Check if user has admin role or is the bootstrapped admin
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      
      const isBootstrappedAdmin = user.email === 'etimedet2025@gmail.com';
      const hasAdminRole = docSnap.exists() && (docSnap.data().role === 'admin' || docSnap.data().role === 'receptionist');
      
      if (isBootstrappedAdmin || hasAdminRole) {
        navigate('/admin/dashboard');
      } else {
        await auth.signOut();
        setError('Access Denied: Insufficient Privileges');
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center p-4 bg-charcoal relative overflow-hidden">
        {/* Secure Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nigeria-emerald/20 rounded-full blur-[120px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-lg glass-card rounded-[3.5rem] border-white/10 p-2 bg-white/[0.03]"
        >
          <div className="bg-charcoal/40 rounded-[3.25rem] p-10 md:p-14 space-y-10 backdrop-blur-3xl overflow-hidden relative">
            {/* Top Bar Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-nigeria-green to-transparent opacity-50" />
            
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-nigeria-green/30 scale-150"
                  />
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-24 h-24 bg-charcoal border border-white/10 rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(0,135,81,0.2)] relative z-10 p-4"
                  >
                    <Logo size="lg" />
                  </motion.div>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-white tracking-tighter">Secure Portal</h1>
              <p className="text-white/40 font-medium tracking-[0.2em] uppercase text-[10px]">Operations Center Access</p>
            </div>

            {error && (
              <div className="bg-red-500/10 text-red-500 p-4 rounded-2xl text-xs font-bold border border-red-500/20 text-center uppercase tracking-widest ring-1 ring-red-500/30">
                {error}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleAdminLogin}>
              <div className="space-y-2">
                <div className="relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-nigeria-green focus:bg-white/[0.08] transition-all"
                    placeholder="Admin Identity (Email)"
                    required
                  />
                  <Lock className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-nigeria-green focus:bg-white/[0.08] transition-all"
                    placeholder="Security Credential"
                    required
                  />
                  <ShieldAlert className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                </div>
              </div>
              
              <div className="pt-4 space-y-4">
                <Button type="submit" isLoading={loading} variant="primary" className="w-full py-5 rounded-2xl bg-nigeria-green hover:bg-emerald-500 text-lg shadow-[0_0_20px_rgba(0,135,81,0.3)]" rightIcon={<ArrowRight size={20} />}>
                  Authorize Session
                </Button>
                <p className="text-center text-white/30 text-xs font-medium uppercase tracking-widest leading-relaxed">
                  Unauthorized access is strictly prohibited<br />and monitored in real-time.
                </p>
              </div>
            </form>
          </div>
        </motion.div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
           <Link to="/login" className="text-white/20 hover:text-white/40 text-xs uppercase tracking-widest font-semibold transition-all">
              Return to Public Site
           </Link>
        </div>
      </div>
    </PageTransition>
  );
}
