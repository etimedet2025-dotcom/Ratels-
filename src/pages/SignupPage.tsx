import React, { useState } from 'react';
import { motion } from 'motion/react';
import { UserPlus, ArrowRight, ShieldCheck, Mail, Lock, User as UserIcon, Camera } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, handleFirestoreError, OperationType } from '../lib/firebase';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import Logo from '../components/Logo';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      
      try {
        await setDoc(doc(db, 'users', user.uid), {
          userId: user.uid,
          email: user.email,
          displayName: `${formData.firstName} ${formData.lastName}`,
          role: 'user',
          createdAt: serverTimestamp()
        });
        navigate('/dashboard');
      } catch (fsErr) {
        handleFirestoreError(fsErr, OperationType.WRITE, `users/${user.uid}`);
      }
      
    } catch (err: any) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-nigeria-green/5 rounded-full blur-[100px] -ml-64 -mt-64" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-nigeria-emerald/5 rounded-full blur-[100px] -mr-64 -mb-64" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-lg bg-white rounded-[3.5rem] shadow-2xl shadow-emerald-900/10 overflow-hidden z-10 p-1.5"
        >
          <div className="bg-white rounded-[3.25rem] p-10 md:p-14 space-y-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Logo size="xl" className="h-64 w-64 opacity-20" />
            </div>

            <div className="text-center space-y-4 relative z-10">
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="mx-auto w-24 h-24 bg-slate-50 p-3 rounded-3xl flex items-center justify-center mb-6 shadow-inner border border-slate-100"
              >
                  <Logo size="lg" />
              </motion.div>
              <h1 className="text-4xl font-bold text-charcoal tracking-tighter">Become a Citizen</h1>
              <p className="text-slate-400 font-medium leading-relaxed">Start reporting civic issues in your community</p>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-medium border border-red-100 flex items-center gap-2">
                <ShieldCheck size={16} />
                {error}
              </div>
            )}

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSignup}>
              <div className="space-y-1 col-span-2 md:col-span-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                <div className="relative">
                  <input 
                    name="firstName"
                    type="text" 
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-100 focus:border-nigeria-green focus:ring-4 focus:ring-nigeria-green/5 outline-none transition-all bg-slate-50/50 pr-10"
                    placeholder="John"
                    required
                  />
                  <UserIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                </div>
              </div>
              <div className="space-y-1 col-span-2 md:col-span-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                <div className="relative">
                  <input 
                    name="lastName"
                    type="text" 
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-100 focus:border-nigeria-green focus:ring-4 focus:ring-nigeria-green/5 outline-none transition-all bg-slate-50/50 pr-10"
                    placeholder="Doe"
                    required
                  />
                  <UserIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                </div>
              </div>
              <div className="space-y-1 col-span-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <input 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-100 focus:border-nigeria-green focus:ring-4 focus:ring-nigeria-green/5 outline-none transition-all bg-slate-50/50 pr-10"
                    placeholder="citizen@nigeria.gov.ng"
                    required
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                </div>
              </div>
              <div className="space-y-1 col-span-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Security PIN (Password)</label>
                <div className="relative">
                  <input 
                    name="password"
                    type="password" 
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-100 focus:border-nigeria-green focus:ring-4 focus:ring-nigeria-green/5 outline-none transition-all bg-slate-50/50 pr-10"
                    placeholder="Minimum 8 characters"
                    required
                  />
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                </div>
              </div>

              <div className="col-span-2 pt-4">
                <Button type="submit" isLoading={loading} className="w-full py-4 text-lg rounded-2xl shadow-xl shadow-nigeria-emerald/10" rightIcon={<ArrowRight size={20} />}>
                  Register Account
                </Button>
              </div>
            </form>

            <div className="text-center pt-2">
              <p className="text-sm text-slate-400 font-medium">
                Already have an account? <Link to="/login" className="text-nigeria-green font-bold hover:underline">Sign In</Link>
              </p>
            </div>
          </div>
          
          <div className="p-6 text-center">
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-relaxed">
                By registering, you agree to the Ratel<br />Citizenship & Digital Advocacy Terms.
             </p>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
