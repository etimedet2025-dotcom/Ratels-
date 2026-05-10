import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Users, 
  Zap, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  BarChart3,
  MessageSquare,
  ChevronRight,
  Phone,
  Play,
  Award,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import Button from '../components/Button';
import Logo from '../components/Logo';
import PageTransition from '../components/PageTransition';
import AnimatedCounter from '../components/AnimatedCounter';
import AnimatedIcon from '../components/AnimatedIcon';

export default function LandingPage() {
  const phone_number = "02018880182";

  return (
    <PageTransition>
      <div className="bg-white selection:bg-nigeria-green selection:text-white">
        {/* Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-20">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo size="sm" className="shadow-lg shadow-emerald-500/10" />
              <span className="font-bold text-2xl tracking-tighter text-charcoal italic uppercase">Ratel</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-sm font-semibold text-slate-500 hover:text-nigeria-green transition-colors">How it Works</a>
              <a href="#impact" className="text-sm font-semibold text-slate-500 hover:text-nigeria-green transition-colors">Impact</a>
              <a href="#founder" className="text-sm font-semibold text-slate-500 hover:text-nigeria-green transition-colors">Our Vision</a>
              <Link to="/admin/login" className="text-sm font-semibold text-slate-400 hover:text-charcoal transition-colors">Admin Portal</Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link to="/login" className="hidden sm:block text-sm font-bold text-nigeria-green hover:underline">
                Sign In
              </Link>
              <Link to="/signup">
                <Button className="rounded-xl px-6">Get Started</Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-nigeria-green/5 rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-nigeria-emerald/5 rounded-full blur-[100px] -ml-64 -mb-32 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-nigeria-light px-4 py-1.5 rounded-full border border-nigeria-green/10"
              >
                <div className="w-2 h-2 bg-nigeria-green rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-nigeria-green uppercase tracking-[0.2em]">Live Civic Gateway</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-7xl font-black text-charcoal tracking-tighter leading-[0.9]"
              >
                Bold Action. <br />
                <span className="text-nigeria-green">Secure future.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-500 max-w-lg leading-relaxed font-medium"
              >
                Nigeria's premium digital advocacy platform. Report community issues, track government response, and drive real change through verified reporting.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link to="/signup">
                  <Button className="w-full sm:w-auto h-16 px-10 text-lg rounded-2xl shadow-2xl shadow-emerald-900/20" rightIcon={<ArrowRight size={22} />}>
                    Start Reporting
                  </Button>
                </Link>
                <a href={`tel:${phone_number}`}>
                  <Button variant="outline" className="w-full sm:w-auto h-16 px-10 text-lg rounded-2xl border-slate-200" leftIcon={<Phone size={22} className="text-nigeria-green" />}>
                    Call Support
                  </Button>
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-6 pt-6"
              >
                <div className="flex -space-x-3">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="Citizen" />
                    </div>
                  ))}
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Joined by <span className="text-nigeria-green">12.5k+ Citizens</span></p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative hidden md:block"
            >
              <div className="relative z-10 bg-white rounded-[3rem] p-1 shadow-2xl shadow-emerald-900/10 border border-slate-100 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-700">
                 <div className="bg-slate-50 rounded-[2.8rem] p-8 space-y-8">
                    <div className="flex items-center justify-between">
                       <Logo size="md" />
                       <div className="bg-white p-3 rounded-2xl shadow-sm">
                          <BarChart3 className="text-nigeria-green" />
                       </div>
                    </div>
                    
                    <div className="space-y-4">
                       <div className="h-4 bg-slate-200 rounded-full w-2/3" />
                       <div className="h-4 bg-slate-200 rounded-full w-full opacity-50" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
                          <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Resolution</p>
                          <p className="text-2xl font-black text-nigeria-emerald tracking-tighter">84.2%</p>
                       </div>
                       <div className="bg-nigeria-emerald p-5 rounded-3xl shadow-lg border border-white/10">
                          <p className="text-[10px] uppercase font-bold text-white/50 mb-1">Response</p>
                          <p className="text-2xl font-black text-white tracking-tighter">&lt; 2hrs</p>
                       </div>
                    </div>

                    <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                       <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                          <ShieldCheck className="text-nigeria-green" size={20} />
                       </div>
                       <p className="text-xs font-bold text-charcoal">Report #RT-928 Verified.</p>
                    </div>
                 </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-4 z-20 bg-white px-6 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs font-bold text-charcoal tracking-tight">System Secured</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Founder Section */}
        <section id="founder" className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
            >
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                  alt="Founder of Ratel" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-60 mb-2">The Visionary</p>
                  <h4 className="text-3xl font-black tracking-tight">Oluwaseun Adéyemí</h4>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-nigeria-green opacity-10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-nigeria-emerald opacity-10 rounded-full blur-3xl" />
              
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <button className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 text-white hover:bg-nigeria-green transition-colors">
                  <Play fill="currentColor" size={24} />
                </button>
              </motion.div>
            </motion.div>

            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-nigeria-green font-bold uppercase tracking-[0.2em] text-xs">
                  <Award size={16} />
                  <span>Founder's Message</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-charcoal tracking-tighter leading-tight italic">
                  Change isn't a wish. <br />
                  <span className="text-nigeria-green">It's a verified report.</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-slate-500 font-medium text-lg leading-relaxed italic">
                <p>
                  "I started Ratel because for too long, our communities have suffered in silence. Basic amenities like clean water and safe roads shouldn't be a luxury—they are a right."
                </p>
                <p>
                  "Our platform doesn't just collect data; it creates accountability. When you report a broken borehole or a dark street, you are taking the first step towards a better Nigeria."
                </p>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                   <p className="text-2xl font-black text-charcoal tracking-tight">15+</p>
                   <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Awards Won</p>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div>
                   <p className="text-2xl font-black text-charcoal tracking-tight">500+</p>
                   <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Projects Funded</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section id="stats" className="py-20 bg-charcoal text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <div className="space-y-2">
                   <h3 className="text-4xl lg:text-5xl font-black tracking-tighter text-nigeria-green">
                      <AnimatedCounter value={45} suffix="+" />
                   </h3>
                   <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Active Communities</p>
                </div>
                <div className="space-y-2">
                   <h3 className="text-4xl lg:text-5xl font-black tracking-tighter">
                      <AnimatedCounter value={12800} suffix="+" />
                   </h3>
                   <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Verified Reports</p>
                </div>
                <div className="space-y-2">
                   <h3 className="text-4xl lg:text-5xl font-black tracking-tighter text-white/80">
                      <AnimatedCounter value={92} suffix="%" />
                   </h3>
                   <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Engagement Rate</p>
                </div>
                <div className="space-y-2">
                   <h3 className="text-4xl lg:text-5xl font-black tracking-tighter text-nigeria-green">
                      <AnimatedCounter value={24} suffix="/7" />
                   </h3>
                   <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Support Portal</p>
                </div>
             </div>
          </div>
        </section>

        {/* Community Impact Gallery */}
        <section id="impact" className="py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div className="space-y-4">
                <p className="text-nigeria-green font-bold uppercase tracking-[0.3em] text-xs">Success Stories</p>
                <h2 className="text-4xl md:text-6xl font-black text-charcoal tracking-tighter italic">Impact on the ground.</h2>
              </div>
              <Link to="/login">
                <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200">View All Resolved Cases</Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Solar Water Project, Kano",
                  desc: "Restored access to clean water for 2,400 residents within 14 days of reporting.",
                  image: "https://images.unsplash.com/photo-1594703073938-b510ed97c88b?q=80&w=2070&auto=format&fit=crop",
                  tag: "Borehole"
                },
                {
                  title: "Street Lighting, Lagos",
                  desc: "Installed 45 solar street lights to enhance security in Ikorodu community.",
                  image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
                  tag: "Infrastructure"
                },
                {
                  title: "Healthcare Renovation, Enugu",
                  desc: "Advocated for and monitored the full renovation of a primary health center.",
                  image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop",
                  tag: "Health"
                }
              ].map((project, i) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 shadow-xl">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full">
                       <span className="text-[10px] font-black text-nigeria-green uppercase tracking-widest">{project.tag}</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-charcoal mb-2">{project.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed italic">{project.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Direct Call Support Section */}
        <section className="py-20 bg-nigeria-light relative overflow-hidden">
           <div className="max-w-5xl mx-auto px-6 relative z-10">
              <div className="bg-white rounded-[4rem] p-12 md:p-16 shadow-2xl shadow-emerald-900/5 border border-slate-100 flex flex-col md:flex-row items-center gap-12">
                 <div className="w-32 h-32 bg-nigeria-emerald/10 rounded-[2.5rem] flex items-center justify-center text-nigeria-green shrink-0">
                    <Phone size={48} className="animate-bounce" />
                 </div>
                 
                 <div className="space-y-4 text-center md:text-left flex-grow">
                    <h2 className="text-3xl md:text-4xl font-black text-charcoal tracking-tighter italic">Direct Citizen Support</h2>
                    <p className="text-slate-500 font-medium max-w-lg mb-6 leading-relaxed italic">
                      Need immediate help or want to speak with an advocate directly? Our responsive support line is open 24/7.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                       <a 
                        href={`tel:${phone_number}`}
                        className="inline-flex items-center gap-4 bg-charcoal text-white px-8 py-5 rounded-2xl hover:bg-nigeria-green transition-all shadow-xl shadow-charcoal/20 group"
                       >
                          <span className="text-2xl font-black tracking-tight">{phone_number}</span>
                          <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                       </a>
                       <div className="flex items-center gap-3 px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 italic font-bold text-slate-400">
                          <Zap size={18} className="text-orange-400" />
                          <span>Average Response: 1.5m</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="absolute top-1/2 left-0 w-64 h-64 bg-nigeria-green opacity-5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
           <div className="absolute top-1/2 right-0 w-96 h-96 bg-nigeria-emerald opacity-5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        </section>

        {/* Features / How it works */}
        <section id="how-it-works" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <h2 className="text-4xl font-black text-charcoal tracking-tight italic">Advocacy simplified.</h2>
              <p className="text-slate-500 font-medium leading-relaxed italic">
                We bridge the gap between citizen concerns and operative resolution with a three-step high-integrity process.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { 
                  icon: MessageSquare, 
                  title: 'Identify & Report', 
                  desc: 'Securely upload evidence and describe the civic issue in your locality.',
                  color: 'bg-blue-50 text-blue-500' 
                },
                { 
                  icon: Zap, 
                  title: 'Operative Response', 
                  desc: 'Trained Ratel personnel verify and classify your report within minutes.',
                  color: 'bg-orange-50 text-orange-500' 
                },
                { 
                  icon: CheckCircle, 
                  title: 'Action & Feedback', 
                  desc: 'Track long-term progress and receive direct updates on case resolution.',
                  color: 'bg-emerald-50 text-nigeria-green' 
                }
              ].map((feature, i) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="space-y-6 group"
                >
                  <div className={cn("w-16 h-16 rounded-3xl flex items-center justify-center shadow-lg transition-transform group-hover:-rotate-6", feature.color)}>
                     <feature.icon size={30} />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <motion.div 
            whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto bg-nigeria-emerald rounded-[3.5rem] p-12 md:p-24 text-white text-center space-y-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
               <Logo size="xl" className="h-96 w-96 brightness-0 invert" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] relative z-10">
              Ready to claim your <br />
              <span className="text-nigeria-green">civic voice?</span>
            </h2>
            
            <p className="text-white/60 max-w-xl mx-auto font-medium text-lg leading-relaxed relative z-10 italic">
              Join thousands of Nigerians using Ratel to build safer, more efficient, and more accountable communities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <Link to="/signup">
                <Button variant="glass" className="h-16 px-12 text-lg rounded-2xl bg-white text-nigeria-emerald hover:bg-slate-100 shadow-2xl">
                  Register Now
                </Button>
              </Link>
              <Link to="/login" className="flex items-center gap-2 group font-bold tracking-tight">
                Sign in to Dashboard <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4">
                 <Logo size="sm" />
                 <span className="font-bold text-xl tracking-tighter uppercase italic">RATEL</span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed max-w-xs">
                Premium Nigerian Civic-Tech Advocacy Platform.<br />
                &copy; 2024 Ratel Digital. All rights reserved.
              </p>
            </div>

            <div className="flex gap-12 text-center md:text-left">
               <div className="space-y-4">
                  <p className="text-[10px] font-black text-charcoal uppercase tracking-widest">Platform</p>
                  <ul className="space-y-2 text-sm text-slate-400 font-semibold">
                     <li><a href="#" className="hover:text-nigeria-green transition-colors">Privacy</a></li>
                     <li><a href="#" className="hover:text-nigeria-green transition-colors">Compliance</a></li>
                     <li><a href="#" className="hover:text-nigeria-green transition-colors">Support</a></li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <p className="text-[10px] font-black text-charcoal uppercase tracking-widest">Official</p>
                  <ul className="space-y-2 text-sm text-slate-400 font-semibold">
                     <li><Link to="/admin/login" className="hover:text-nigeria-green transition-colors">Admin Gateway</Link></li>
                     <li><a href="#" className="hover:text-nigeria-green transition-colors">Operative Portal</a></li>
                     <li><a href="#" className="hover:text-nigeria-green transition-colors">Feedback</a></li>
                  </ul>
               </div>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
}

