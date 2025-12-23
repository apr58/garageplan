
import React, { useState } from 'react';
import { 
  Wrench, 
  Users, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  Briefcase, 
  ChevronRight, 
  CheckCircle2,
  Trophy,
  Activity,
  CreditCard,
  Rocket
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { INVESTMENT_TIERS, REVENUE_STREAMS, ROADMAP } from './constants';

const App: React.FC = () => {
  const [activeTier, setActiveTier] = useState(1); // Standard as default

  const financialData = [
    { name: 'Lean CapEx', value: 45 },
    { name: 'Standard CapEx', value: 115 },
    { name: 'Flagship CapEx', value: 350 },
  ];

  const COLORS = ['#fbbf24', '#f59e0b', '#d97706'];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500/30 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-semibold mb-6 animate-pulse">
            <Activity className="w-4 h-4" />
            Bangalore's First Premium 4-in-1 Moto-Hub
          </div>
          <h1 className="text-6xl md:text-8xl font-heading font-extrabold tracking-tighter mb-6 leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-amber-500">
            MOTOHUB BANGALORE
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Revolutionizing the biking ecosystem with high-performance mods, a curated community, and a transparent buy/sell marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20">
              View Investment Options <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-slate-800/80 border border-slate-700 hover:bg-slate-700 text-white font-bold rounded-xl transition-all">
              Download Full PDF
            </button>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-4">The 4-Pillar Synergy</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wrench, title: 'Garage & Mods', desc: 'Core cash engine: high-margin performance tuning, periodic service, and bespoke custom builds.' },
              { icon: Users, title: 'Community Hub', desc: 'Repeat customer anchor: breakfast rides, DIY workshops, and "Founders Club" exclusives.' },
              { icon: MapPin, title: 'Tour Operations', desc: 'High-margin experiences: support-backed long tours to Coorg, Chikmagalur, and Goa.' },
              { icon: Briefcase, title: 'Buy/Sell Platform', desc: 'Scalable upside: certified pre-owned inspections and commission-based premium bike sales.' }
            ].map((pillar, idx) => (
              <div key={idx} className="group p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-amber-500/50 transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                  <pillar.icon className="w-8 h-8 text-amber-500 group-hover:text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading mb-8">Strategic Bangalore Advantage</h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="shrink-0 w-12 h-12 bg-blue-500/10 flex items-center justify-center rounded-lg">
                  <MapPin className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Location Belts</h4>
                  <p className="text-slate-400">Targeting Peenya, Yeshwanthpur, or Electronic City outskirts for industrial-friendly zoning and better rent yields.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="shrink-0 w-12 h-12 bg-green-500/10 flex items-center justify-center rounded-lg">
                  <ShieldCheck className="text-green-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Compliance Ready</h4>
                  <p className="text-slate-400">Budgeted for BBMP Trade Licenses, GST, KSPCB waste management, and Fire Safety NOCs from Day 1.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="shrink-0 w-12 h-12 bg-amber-500/10 flex items-center justify-center rounded-lg">
                  <TrendingUp className="text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Service Design</h4>
                  <p className="text-slate-400">Integrated customer lounge with transparent viewing glass into the performance bays for maximum trust.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-500/10 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1000" 
              alt="Garage Interior" 
              className="relative rounded-3xl border border-slate-800 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Investment Comparison */}
      <section id="investments" className="py-24 px-4 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-4">Investment Blueprints</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Scale based on your vision. From agile validation to the ultimate destination garage.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {INVESTMENT_TIERS.map((tier, idx) => (
              <div 
                key={tier.id}
                className={`relative p-8 rounded-3xl border transition-all cursor-pointer ${
                  activeTier === idx 
                  ? 'bg-slate-900 border-amber-500 shadow-2xl shadow-amber-500/10 scale-105 z-10' 
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                }`}
                onClick={() => setActiveTier(idx)}
              >
                {idx === 1 && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">
                    RECOMMENDED
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                  <p className="text-amber-500 font-heading text-lg">{tier.size}</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                    <span className="text-slate-400">Est. CapEx</span>
                    <span className="font-bold">{tier.capexRange}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                    <span className="text-slate-400">Monthly OpEx</span>
                    <span className="font-bold">{tier.opexRange}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 text-sm italic text-slate-400">
                  "{tier.description}"
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financials & Revenue */}
      <section className="py-24 px-4 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-heading mb-8">Unit Economics</h2>
              <div className="space-y-4 mb-8">
                {REVENUE_STREAMS.map((stream, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <div>
                      <h4 className="font-bold">{stream.name}</h4>
                      <p className="text-xs text-slate-400">Avg Ticket: {stream.avgTicket}</p>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded font-bold">
                        {stream.margin} Margin
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
                <div className="flex items-start gap-4">
                  <Trophy className="text-amber-500 w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">The Standard Model Break-Even</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Targeting ₹27L/month gross revenue with a 45% contribution margin. 
                      Comfortably covers ₹14L fixed costs. 
                      <span className="block mt-2 font-bold text-white">Projected Break-even: Month 8–18</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 h-[500px]">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <TrendingUp className="text-amber-500" />
                CapEx Comparison (in ₹ Lakhs)
              </h3>
              <ResponsiveContainer width="100%" height="80%">
                <BarChart data={financialData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '12px' }}
                    cursor={{ fill: '#1e293b' }}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {financialData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-center text-xs text-slate-500 mt-4 italic">
                *Values represent midpoint of estimated range
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-4">90-Day Go-To-Market</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <div className="space-y-12 relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-800"></div>
            {ROADMAP.map((item, idx) => (
              <div key={idx} className="relative pl-24 group">
                <div className="absolute left-0 top-0 w-16 h-16 bg-slate-900 border-2 border-slate-800 rounded-2xl flex items-center justify-center group-hover:border-amber-500 transition-colors">
                  <Rocket className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-500">{item.period}</h3>
                <ul className="space-y-3">
                  {item.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-3 text-slate-300">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></div>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendation & Contact */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-950 to-amber-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 inline-block">
            <div className="px-6 py-2 rounded-full border-2 border-amber-500 text-amber-500 font-bold uppercase tracking-widest text-sm">
              Final Recommendation
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading mb-8">START WITH THE STANDARD MODEL</h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            "Enough space to feel premium, enough bays to scale profitably, and manageable overhead to build a bulletproof community. 
            Targeting ₹1.0Cr – ₹1.4Cr initial capital with a 6-month OpEx runway."
          </p>
          <div className="p-10 bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Interested in Joining the Hub?</h3>
            <p className="text-slate-400 mb-8">Share this plan with partners or request a detailed financial breakdown.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-6 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-amber-500 transition-all min-w-[300px]"
              />
              <button className="px-10 py-4 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-xl transition-all">
                Get Deck
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Wrench className="w-6 h-6 text-amber-500" />
            <span className="font-heading text-2xl tracking-tight">MOTOHUB BLR</span>
          </div>
          <div className="text-slate-500 text-sm">
            © 2024 MotoHub Bangalore. State-of-the-Art Operations Blueprint.
          </div>
          <div className="flex gap-6">
            <button className="text-slate-400 hover:text-white transition-colors">Privacy</button>
            <button className="text-slate-400 hover:text-white transition-colors">Compliance</button>
            <button className="text-slate-400 hover:text-white transition-colors">Contact</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
