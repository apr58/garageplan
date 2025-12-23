
import React, { useState, useEffect } from 'react';
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
  Home,
  ShoppingBag,
  Calendar,
  User as UserIcon,
  Heart,
  MessageCircle,
  Bookmark,
  PlusSquare,
  Search,
  CheckCircle,
  X,
  Camera,
  AtSign,
  ChevronLeft,
  PieChart as LucidePie,
  Zap,
  Globe,
  Lock,
  Target,
  Info,
  DollarSign,
  Users2,
  ArrowUpRight,
  Share2,
  Copy,
  ExternalLink
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';
import { INVESTMENT_TIERS, REVENUE_STREAMS, ROADMAP, MOCK_POSTS, MOCK_LISTINGS, MOCK_EVENTS, FINANCIAL_PROJECTIONS, CAP_TABLE } from './constants';
import { Post } from './types';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<'pitch' | 'app'>('pitch');
  const [activeTier, setActiveTier] = useState(1);
  const [appTab, setAppTab] = useState<'home' | 'market' | 'rides' | 'profile'>('home');
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [createStep, setCreateStep] = useState(1);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showShareToast, setShowShareToast] = useState(false);
  
  const [newPost, setNewPost] = useState({
    caption: '',
    tags: [] as string[],
    taggedUsers: [] as string[],
    location: ''
  });

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleCreatePost = () => {
    const post: Post = {
      id: Date.now().toString(),
      user: 'arjun_moto',
      userImage: 'https://i.pravatar.cc/150?u=current_user',
      image: 'https://images.unsplash.com/photo-1635073913732-45c60193ee0c?w=800&q=80',
      caption: `${newPost.caption}${newPost.location ? ` — at ${newPost.location}` : ''}`,
      likes: 0,
      tags: [...newPost.tags, ...newPost.taggedUsers.map(u => `@${u}`)]
    };
    setPosts([post, ...posts]);
    setIsCreatingPost(false);
    setCreateStep(1);
    setNewPost({ caption: '', tags: [], taggedUsers: [], location: '' });
  };

  const SectionDetailModal = () => {
    if (!expandedSection) return null;

    const details: Record<string, { title: string; content: React.ReactNode }> = {
      fundraise: {
        title: "Fundraise & Strategic Allocation",
        content: (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <p className="text-amber-500 font-bold mb-2">Hiring Plan</p>
                <ul className="text-xs space-y-2 text-slate-400">
                  <li>• 2 Senior Technical Specialists (Tuning/Suspension)</li>
                  <li>• 1 Full-stack Mobile Developer</li>
                  <li>• 1 Community Manager (Ride Marshal)</li>
                  <li>• 4 Junior Technicians & Support staff</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <p className="text-amber-500 font-bold mb-2">Burn Breakdown</p>
                <ul className="text-xs space-y-2 text-slate-400">
                  <li>• Rent & Infra: 35%</li>
                  <li>• Salaries: 40%</li>
                  <li>• Marketing & CAC: 15%</li>
                  <li>• Spares & Tech Stack: 10%</li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
               <p className="text-amber-500 font-bold mb-2">Strategic Runway</p>
               <p className="text-sm text-slate-400 leading-relaxed">
                The ₹3 Cr Angel raise is engineered to provide a 15-month runway. This allows us to establish the Bangalore "Standard Hub" as the ecosystem anchor, validate the social-to-commerce conversion metrics, and reach the Month 12 break-even target before scaling nationally.
              </p>
            </div>
          </div>
        )
      },
      model: {
        title: "Revenue Strategy & Growth Flywheels",
        content: (
          <div className="space-y-4">
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
              <h4 className="font-bold text-slate-100 flex items-center gap-2 mb-2"><TrendingUp className="w-4 h-4 text-amber-500" /> Marketplace Flywheel</h4>
              <p className="text-sm text-slate-400">Our inspection fee (₹1,500 - ₹4,500) creates high-margin upfront revenue. This trust-anchor service captures value from Bangalore's multi-crore premium used-bike market, where 1-3% commission adds significant top-line growth.</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
              <h4 className="font-bold text-slate-100 flex items-center gap-2 mb-2"><Wrench className="w-4 h-4 text-amber-500" /> Garage & Customization</h4>
              <p className="text-sm text-slate-400">Focusing on high-ASP (Average Selling Price) modifications like performance suspension upgrades, bespoke fabrication, and specialized tuning. These services yield 45-55% margins and build deep customer loyalty.</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
              <h4 className="font-bold text-slate-100 flex items-center gap-2 mb-2"><Users2 className="w-4 h-4 text-amber-500" /> Subscription & Tours</h4>
              <p className="text-sm text-slate-400">Community Memberships and Paid Tours (support-backed) act as recurring cashflow engines. They lock users into the ecosystem, reducing CAC (Customer Acquisition Cost) for higher-ticket garage services.</p>
            </div>
          </div>
        )
      },
      projections: {
        title: "Growth Logic & Profitability Path",
        content: (
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
              <div className="text-2xl font-bold text-amber-500">M12</div>
              <p className="text-xs text-slate-400">Targeting 400+ unique bike services/month and 15+ certified marketplace transactions. Revenue of ₹27L/month marks the threshold for operational break-even.</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
              <div className="text-2xl font-bold text-amber-500">M24</div>
              <p className="text-xs text-slate-400">Ecosystem scale: 1,000+ active app users per week, 50+ managed tours annually, and dominance in the performance tuning sector. ARR target: ₹9.6 Cr with healthy EBITDA.</p>
            </div>
            <div className="p-4 bg-amber-500/5 rounded-xl border border-amber-500/20">
              <p className="text-sm font-bold text-amber-500 mb-1">Defense Moat: The Physical Advantage</p>
              <p className="text-xs text-slate-400">Generalist platforms (OLX, Instagram) lack the offline infrastructure to verify, service, and store premium assets. RideBuild's physical hubs provide the "Real-World Trust" required for high-value motorcycle transactions.</p>
            </div>
          </div>
        )
      },
      qa: {
        title: "Strategic Outlook & Exit Roadmap",
        content: (
          <div className="space-y-4">
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
              <p className="text-sm text-slate-300 font-bold underline mb-2">City-by-City Playbook</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Post-Bangalore validation, we scale to Tier-1 riding hubs like Pune, Chandigarh, and Kochi. Each city deployment uses a hub-and-spoke model: 1 "Flagship" experience center supporting 3-4 "Lean" service satellites, all connected via the unified RideBuild digital layer.
              </p>
            </div>
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
              <p className="text-sm text-slate-300 font-bold underline mb-2">Exit Strategy & Liquidity</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Strategic acquisition potential by:
                1. Premium OEMs (Royal Enfield, Triumph) seeking an integrated service/community layer.
                2. Auto-Fintech giants (Spinny, BeepKart) looking to capture the service lifecycle and high-margin mods.
                3. Series B/C growth round for pan-India expansion.
              </p>
            </div>
          </div>
        )
      }
    };

    const activeDetail = details[expandedSection];

    return (
      <div className="fixed inset-0 z-[150] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setExpandedSection(null)}>
        <div 
          className="bg-slate-900 w-full max-w-2xl rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden animate-in zoom-in duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
            <div>
               <h3 className="text-2xl font-bold text-amber-500">{activeDetail?.title}</h3>
               <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">Confidential Investor Briefing</p>
            </div>
            <button onClick={() => setExpandedSection(null)} className="p-3 hover:bg-slate-800 rounded-full transition-all hover:rotate-90">
              <X className="w-6 h-6 text-slate-400" />
            </button>
          </div>
          <div className="p-10 max-h-[75vh] overflow-y-auto custom-scrollbar">
            {activeDetail?.content}
          </div>
          <div className="p-6 bg-slate-950/50 text-center border-t border-slate-800">
            <button onClick={() => setExpandedSection(null)} className="px-6 py-2 bg-slate-800 rounded-full text-xs font-bold text-slate-300 hover:bg-slate-700 transition-colors">Return to Pitch</button>
          </div>
        </div>
      </div>
    );
  };

  const CreatePostModal = () => (
    <div className="fixed inset-0 z-[110] bg-slate-950 flex flex-col md:max-w-md md:mx-auto md:border-x md:border-slate-800 animate-in slide-in-from-bottom duration-300">
      <header className="p-4 border-b border-slate-900 flex justify-between items-center">
        {createStep > 1 ? (
          <button onClick={() => setCreateStep(1)}><ChevronLeft className="w-6 h-6" /></button>
        ) : (
          <button onClick={() => setIsCreatingPost(false)}><X className="w-6 h-6" /></button>
        )}
        <h2 className="font-bold text-amber-500">New Post</h2>
        {createStep === 1 ? (
          <button onClick={() => setCreateStep(2)} className="text-amber-500 font-bold">Next</button>
        ) : (
          <button onClick={handleCreatePost} className="text-amber-500 font-bold">Share</button>
        )}
      </header>

      <div className="flex-1 overflow-y-auto">
        {createStep === 1 ? (
          <div className="space-y-4">
            <div className="aspect-square bg-slate-900 flex items-center justify-center relative group">
              <img src="https://images.unsplash.com/photo-1635073913732-45c60193ee0c?w=800&q=80" className="w-full h-full object-cover" alt="Bullet Classic" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 space-y-6">
            <div className="flex gap-4">
              <img src="https://images.unsplash.com/photo-1635073913732-45c60193ee0c?w=800&q=80" className="w-20 h-20 object-cover rounded-lg" alt="Thumbnail" />
              <textarea 
                placeholder="Write a caption..." 
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm resize-none h-20"
                value={newPost.caption}
                onChange={(e) => setNewPost({...newPost, caption: e.target.value})}
              ></textarea>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const AppNavbar = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 px-6 py-4 flex justify-between items-center z-50 md:max-w-md md:mx-auto md:rounded-t-3xl">
      <button onClick={() => setAppTab('home')} className={`flex flex-col items-center gap-1 ${appTab === 'home' ? 'text-amber-500' : 'text-slate-400'}`}>
        <Home className="w-6 h-6" />
      </button>
      <button onClick={() => setAppTab('market')} className={`flex flex-col items-center gap-1 ${appTab === 'market' ? 'text-amber-500' : 'text-slate-400'}`}>
        <ShoppingBag className="w-6 h-6" />
      </button>
      <button onClick={() => setIsCreatingPost(true)} className="flex flex-col items-center gap-1 text-slate-400 hover:text-amber-500 transition-colors">
        <PlusSquare className="w-7 h-7" />
      </button>
      <button onClick={() => setAppTab('rides')} className={`flex flex-col items-center gap-1 ${appTab === 'rides' ? 'text-amber-500' : 'text-slate-400'}`}>
        <Calendar className="w-6 h-6" />
      </button>
      <button onClick={() => setAppTab('profile')} className={`flex flex-col items-center gap-1 ${appTab === 'profile' ? 'text-amber-500' : 'text-slate-400'}`}>
        <UserIcon className="w-6 h-6" />
      </button>
    </div>
  );

  const CommunityApp = () => (
    <div className="bg-slate-950 min-h-screen pb-24 md:max-w-md md:mx-auto md:border-x md:border-slate-800 shadow-2xl relative">
      {isCreatingPost && <CreatePostModal />}
      
      <header className="sticky top-0 bg-slate-950/80 backdrop-blur-lg border-b border-slate-900 z-40 p-4 flex justify-between items-center">
        <h1 className="font-heading text-2xl tracking-tight text-amber-500">RIDEBUILD</h1>
        <div className="flex gap-4">
          <Heart className="w-6 h-6 text-slate-400" />
          <MessageCircle className="w-6 h-6 text-slate-400" />
        </div>
      </header>

      {appTab === 'home' && (
        <div className="p-0 animate-in fade-in duration-500">
           <div className="flex gap-4 p-4 overflow-x-auto no-scrollbar">
            {['Your Story', 'Bullet500', 'Tiger900', 'RE_Fans', 'TriumphClub'].map((story, i) => (
              <div key={i} className="flex flex-col items-center gap-1 shrink-0">
                <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 to-orange-600">
                  <div className="w-full h-full rounded-full border-2 border-slate-950 bg-slate-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${story}`} alt="" />
                  </div>
                </div>
                <span className="text-[10px] text-slate-400">{story}</span>
              </div>
            ))}
          </div>
          {posts.map(post => (
            <div key={post.id} className="border-b border-slate-900 pb-4 mb-4">
              <div className="flex items-center gap-3 p-4">
                <img src={post.userImage} className="w-8 h-8 rounded-full border border-slate-800" alt="" />
                <span className="font-bold text-sm">{post.user}</span>
              </div>
              <img src={post.image} className="w-full aspect-square object-cover" alt="" />
              <div className="p-4">
                <div className="flex gap-4 mb-3">
                  <Heart className="w-6 h-6" />
                  <MessageCircle className="w-6 h-6" />
                  <PlusSquare className="w-6 h-6" />
                  <div className="ml-auto">
                    <Bookmark className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-sm font-bold mb-1">{post.likes} likes</p>
                <p className="text-sm leading-relaxed">
                  <span className="font-bold mr-2">{post.user}</span>
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {appTab !== 'home' && <div className="p-10 text-center text-slate-500">Demo Content Placeholder</div>}
      <AppNavbar />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500/30 overflow-x-hidden">
      <SectionDetailModal />
      
      {/* Mode Switcher */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-4">
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-1.5 rounded-full flex gap-2 shadow-2xl">
          <button 
            onClick={() => setViewMode('pitch')}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${viewMode === 'pitch' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:text-white'}`}
          >
            Investor Pitch
          </button>
          <button 
            onClick={() => setViewMode('app')}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${viewMode === 'app' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:text-white'}`}
          >
            Platform Demo
          </button>
        </div>
        
        {viewMode === 'pitch' && (
          <button 
            onClick={handleShare}
            className="p-2.5 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-full hover:bg-slate-800 text-amber-500 transition-all flex items-center gap-2 group shadow-2xl"
            title="Share with Friend"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-[10px] font-bold pr-2 hidden group-hover:block transition-all">SHARE PITCH</span>
          </button>
        )}
      </div>

      {/* Share Toast */}
      {showShareToast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] bg-amber-500 text-black px-6 py-3 rounded-2xl font-bold text-sm shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-10">
          <CheckCircle className="w-5 h-5" />
          Link Copied! Share it with your friend.
        </div>
      )}

      {viewMode === 'app' ? (
        <CommunityApp />
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Hero Section */}
          <section className="relative h-[95vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1511994298241-608e28f14f66?auto=format&fit=crop&q=80&w=2400')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950"></div>
            <div className="relative z-10 text-center px-4 max-w-5xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-500 text-sm font-bold mb-8 animate-pulse shadow-xl shadow-amber-500/5">
                <Activity className="w-4 h-4" />
                Bangalore's First Integrated Rider Platform
              </div>
              <h1 className="text-7xl md:text-9xl font-heading font-extrabold tracking-tighter mb-8 leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-500 drop-shadow-2xl">
                RIDEBUILD
              </h1>
              <p className="text-xl md:text-3xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light italic">
                Content. Community. Commerce. Trust. 
                <span className="block mt-2 font-bold text-amber-500 not-italic">The Ultimate Biker Ecosystem.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => document.getElementById('investor-summary')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold rounded-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-2xl shadow-amber-500/30"
                >
                  Explore Pitch <ChevronRight className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => setViewMode('app')}
                  className="px-10 py-5 bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all border-opacity-50"
                >
                  Live App Demo
                </button>
              </div>
            </div>
          </section>

          {/* Investor Summary Section */}
          <section id="investor-summary" className="py-24 px-4 bg-slate-950">
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading mb-4 text-slate-100">Investor Summary</h2>
                <p className="text-slate-400">Click any card to see detailed growth strategies and financials.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-12">
                  <div 
                    onClick={() => setExpandedSection('fundraise')}
                    className="cursor-pointer group hover:bg-slate-900/50 p-8 rounded-[2.5rem] transition-all border border-slate-900 hover:border-amber-500/30"
                  >
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-3xl md:text-4xl font-heading text-slate-100">1. Fundraise & Valuation</h2>
                      <ArrowUpRight className="w-8 h-8 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 group-hover:bg-slate-800 transition-colors">
                        <p className="text-slate-400 text-xs mb-1 uppercase tracking-widest font-bold">Angel Raise</p>
                        <p className="text-3xl font-bold text-amber-500">₹3 Crore</p>
                      </div>
                      <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 group-hover:bg-slate-800 transition-colors">
                        <p className="text-slate-400 text-xs mb-1 uppercase tracking-widest font-bold">Valuation</p>
                        <p className="text-3xl font-bold text-slate-100">₹15 Cr</p>
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-slate-500 flex items-center gap-1 font-bold tracking-tight"><Info className="w-4 h-4 text-amber-500" /> TAP TO EXPAND FUNDING DETAILS</p>
                  </div>

                  <div 
                    onClick={() => setExpandedSection('model')}
                    className="cursor-pointer group hover:bg-slate-900/50 p-8 rounded-[2.5rem] transition-all border border-slate-900 hover:border-amber-500/30"
                  >
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-3xl md:text-4xl font-heading text-slate-100">2. Business Pillars</h2>
                      <ArrowUpRight className="w-8 h-8 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {REVENUE_STREAMS.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-5 bg-slate-900/40 rounded-2xl border border-slate-800 group-hover:bg-slate-800/50 transition-colors">
                          <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5 text-amber-500" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-100">{item.name}</p>
                            <p className="text-xs text-slate-500 font-medium">Margin: {item.margin}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-xs text-slate-500 flex items-center gap-1 font-bold tracking-tight"><Info className="w-4 h-4 text-amber-500" /> TAP TO VIEW FLYWHEEL LOGIC</p>
                  </div>
                </div>

                <div className="bg-slate-900/40 p-10 rounded-[3rem] border border-slate-800 sticky top-32">
                  <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                    <LucidePie className="text-amber-500 w-8 h-8" />
                    Cap Table Allocation
                  </h3>
                  <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={CAP_TABLE}
                          innerRadius={80}
                          outerRadius={120}
                          paddingAngle={8}
                          dataKey="value"
                        >
                          {CAP_TABLE.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)' }}
                        />
                        <Legend verticalAlign="bottom" height={40} iconType="circle" />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-10 space-y-6">
                     {CAP_TABLE.map((item, i) => (
                       <div key={i} className="flex justify-between items-center text-sm font-medium">
                         <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                            <span className="text-slate-400">{item.name}</span>
                         </div>
                         <span className="font-bold text-slate-100">{item.value}%</span>
                       </div>
                     ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Financial Projection Section */}
          <section className="py-24 px-4 bg-slate-900/20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading mb-4 text-slate-100">3. 24-Month Projections</h2>
                <p className="text-slate-400 max-w-xl mx-auto">Scaling from early traction to a dominant market position with robust ARR.</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-12 items-center">
                <div 
                  onClick={() => setExpandedSection('projections')}
                  className="lg:col-span-2 bg-slate-900/50 p-10 rounded-[3rem] border border-slate-800 h-[500px] cursor-pointer hover:border-amber-500/40 transition-all group relative shadow-2xl"
                >
                  <div className="absolute top-6 right-6 bg-amber-500/20 text-amber-500 text-[11px] font-extrabold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    VIEW GROWTH LOGIC <ArrowUpRight className="w-3 h-3" />
                  </div>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={FINANCIAL_PROJECTIONS}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                      <XAxis dataKey="month" stroke="#64748b" axisLine={false} tickLine={false} />
                      <YAxis stroke="#64748b" axisLine={false} tickLine={false} label={{ value: 'Revenue (₹ Lakhs)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12, fontWeight: 'bold' }} />
                      <Tooltip 
                         contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '16px' }}
                         cursor={{ fill: '#1e293b', opacity: 0.4 }}
                      />
                      <Bar dataKey="revenue" radius={[12, 12, 0, 0]} barSize={50}>
                        {FINANCIAL_PROJECTIONS.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 3 ? '#f59e0b' : '#334155'} className="transition-all duration-300 hover:opacity-80" />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="space-y-8">
                  <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800 shadow-xl">
                    <h4 className="text-xs text-slate-500 mb-2 uppercase tracking-[0.2em] font-extrabold">Year 2 Revenue Target</h4>
                    <p className="text-5xl font-bold text-amber-500 tracking-tight">₹9.6 Cr <span className="text-xl text-slate-500">ARR</span></p>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed">Based on projected month 24 run rate of ₹80L, capturing 15% of the premium service market in BLR.</p>
                  </div>
                  <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800 shadow-xl">
                    <h4 className="text-xs text-slate-500 mb-2 uppercase tracking-[0.2em] font-extrabold">EBITDA Stability</h4>
                    <p className="text-5xl font-bold text-slate-100 tracking-tight">₹50L <span className="text-xl text-slate-500">/mo</span></p>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed">Operational break-even achieved by Month 12. Healthy margins sustained through high-ASP mod services.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Strategic Q&A Section */}
          <section className="py-24 px-4 bg-slate-950">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading mb-4 text-slate-100">Strategic Q&A</h2>
                <p className="text-slate-400">Click to expand into deep roadmap discussions.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { 
                    id: 'qa1',
                    q: "Why won’t Instagram or OLX beat this?", 
                    a: "They lack the integrated 'Physical Trust' layer. RideBuild's offline hubs allow us to inspect, certify, and service assets directly, closing the loop between content and commerce.",
                    icon: Lock
                  },
                  { 
                    id: 'qa2',
                    q: "Why lead with a physical garage?", 
                    a: "The garage is our immediate moat. It provides recurring revenue, high-quality inventory for the marketplace, and acts as the physical community anchor for the brand.",
                    icon: ShieldCheck
                  },
                  { 
                    id: 'qa3',
                    q: "What is the scaling playbook?", 
                    a: "Hub-and-spoke model. We establish one Flagship Hub in a new city (Pune/Kochi) which then supports multiple high-margin service spoke garages.",
                    icon: Globe
                  },
                  { 
                    id: 'qa4',
                    q: "What is the 3-year vision?", 
                    a: "To become India's default rider platform with 300k+ active users and ₹30 Cr ARR, dominating the premium second-hand and service ecosystem.",
                    icon: Target
                  }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    onClick={() => setExpandedSection('qa')}
                    className="p-10 bg-slate-900/40 rounded-[2.5rem] border border-slate-800 hover:border-amber-500/30 transition-all cursor-pointer group shadow-lg"
                  >
                    <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-black transition-all shadow-amber-500/5">
                      <item.icon className="w-7 h-7 text-amber-500 group-hover:text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-5 text-slate-100">{item.q}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.a}</p>
                    <div className="flex items-center gap-2 text-amber-500 text-[11px] font-extrabold opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                      EXPAND STRATEGIC ROADMAP <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-20 p-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-[3rem] text-black shadow-3xl shadow-amber-500/20">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-5xl font-heading mb-6 leading-none">The Investor Opportunity</h3>
                  <p className="text-2xl font-medium mb-10 opacity-90 leading-snug">
                    Participate in the rapid consolidation of India's fragmented premium rider market. High liquidity, verified assets, and an passionate, engaged community.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 border-t border-black/10 pt-10">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-2">Projected Multiple</p>
                      <p className="text-4xl font-black">3X – 10X</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-2">Liquidity Target</p>
                      <p className="text-4xl font-black">4–7 Yrs</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-2">Exit Pathway</p>
                      <p className="text-4xl font-black">OEM M&A</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-16 border-t border-slate-900 px-4 bg-slate-950">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
              <div>
                <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                  <Wrench className="w-8 h-8 text-amber-500" />
                  <span className="font-heading text-3xl tracking-tight uppercase text-slate-100">RideBuild</span>
                </div>
                <p className="text-slate-500 text-sm max-w-xs">The default digital-first physical ecosystem for premium riders in India.</p>
              </div>
              <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <a href="#" className="hover:text-amber-500 transition-colors">Vision</a>
                <a href="#" className="hover:text-amber-500 transition-colors">Financials</a>
                <a href="#" className="hover:text-amber-500 transition-colors">Garage</a>
                <a href="#" className="hover:text-amber-500 transition-colors">Contact</a>
              </div>
              <div className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                © 2024 RideBuild Bangalore. All Rights Reserved.
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
