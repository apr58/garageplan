
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
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';
import { INVESTMENT_TIERS, REVENUE_STREAMS, ROADMAP, MOCK_POSTS, MOCK_LISTINGS, MOCK_EVENTS, FINANCIAL_PROJECTIONS, CAP_TABLE } from './constants.tsx';
import { Post } from './types.ts';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<'pitch' | 'app'>('pitch');
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
    const url = window.location.href;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 3000);
      } else {
        throw new Error('Clipboard API unavailable');
      }
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = url;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 3000);
      } catch (copyErr) {
        alert('Please copy the URL from your browser address bar.');
      }
      document.body.removeChild(textArea);
    }
  };

  const shareToWhatsApp = () => {
    const text = `Hey! Check out the RideBuild Business Plan I'm working on for Bangalore: ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
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
                <p className="text-amber-500 font-bold mb-2 text-xs uppercase tracking-widest">Hiring Plan</p>
                <ul className="text-xs space-y-2 text-slate-400">
                  <li>• 2 Senior Technical Specialists</li>
                  <li>• 1 Full-stack Mobile Developer</li>
                  <li>• 1 Community Manager</li>
                  <li>• 4 Junior Technicians</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <p className="text-amber-500 font-bold mb-2 text-xs uppercase tracking-widest">Burn Breakdown</p>
                <ul className="text-xs space-y-2 text-slate-400">
                  <li>• Rent & Infra: 35%</li>
                  <li>• Salaries: 40%</li>
                  <li>• Marketing: 15%</li>
                  <li>• Technology: 10%</li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
               <p className="text-amber-500 font-bold mb-2 text-xs uppercase">Strategic Runway</p>
               <p className="text-sm text-slate-400 leading-relaxed">
                The ₹3 Cr Angel raise provides a 15-month runway to reach break-even. 
              </p>
            </div>
          </div>
        )
      },
      model: {
        title: "Revenue Strategy & Growth",
        content: (
          <div className="space-y-4">
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
              <h4 className="font-bold text-slate-100 flex items-center gap-2 mb-2"><TrendingUp className="w-4 h-4 text-amber-500" /> Marketplace</h4>
              <p className="text-sm text-slate-400">Commission model on certified high-value bike transactions.</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
              <h4 className="font-bold text-slate-100 flex items-center gap-2 mb-2"><Wrench className="w-4 h-4 text-amber-500" /> Customization</h4>
              <p className="text-sm text-slate-400">High-margin performance tuning and fabrication services.</p>
            </div>
          </div>
        )
      },
      projections: {
        title: "Financial Path",
        content: (
          <div className="space-y-4">
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
              <div className="text-xl font-bold text-amber-500 mb-2">Month 12 Target</div>
              <p className="text-sm text-slate-400">Break-even at ₹27L/month revenue with 400+ unique service tickets.</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
              <div className="text-xl font-bold text-amber-500 mb-2">Month 24 Target</div>
              <p className="text-sm text-slate-400">Scale to ₹80L/month revenue (₹9.6 Cr ARR) with pan-city brand dominance.</p>
            </div>
          </div>
        )
      },
      qa: {
        title: "Strategy & Exit",
        content: (
          <div className="space-y-4">
            <p className="text-sm text-slate-400 leading-relaxed">
              Scaling through a hub-and-spoke model starting in Bangalore. Exit opportunities via OEM acquisition or platform consolidation.
            </p>
          </div>
        )
      }
    };

    const activeDetail = details[expandedSection];

    return (
      <div className="fixed inset-0 z-[150] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setExpandedSection(null)}>
        <div 
          className="bg-slate-900 w-full max-w-xl rounded-[2rem] border border-slate-800 shadow-2xl overflow-hidden animate-in zoom-in duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
            <h3 className="text-xl font-bold text-amber-500">{activeDetail?.title}</h3>
            <button onClick={() => setExpandedSection(null)} className="p-2 hover:bg-slate-800 rounded-full transition-all">
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>
          <div className="p-8 max-h-[70vh] overflow-y-auto">
            {activeDetail?.content}
          </div>
          <div className="p-4 bg-slate-950/50 text-center border-t border-slate-800">
            <button onClick={() => setExpandedSection(null)} className="text-xs font-bold text-slate-500 hover:text-slate-300">Close</button>
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
        <h1 className="font-heading text-2xl tracking-tight text-amber-500 uppercase">RideBuild</h1>
        <div className="flex gap-4">
          <Heart className="w-6 h-6 text-slate-400" />
          <MessageCircle className="w-6 h-6 text-slate-400" />
        </div>
      </header>

      {appTab === 'home' && (
        <div className="p-0 animate-in fade-in duration-500">
           <div className="flex gap-4 p-4 overflow-x-auto no-scrollbar">
            {['Story', 'Bike_Hub', 'Tiger_900', 'Bullet_Fans'].map((story, i) => (
              <div key={i} className="flex flex-col items-center gap-1 shrink-0">
                <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 to-orange-600">
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
                </div>
                <p className="text-sm leading-relaxed">
                  <span className="font-bold mr-2">{post.user}</span>
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {appTab !== 'home' && <div className="p-10 text-center text-slate-500 text-sm">Demo interface restricted for pitch.</div>}
      <AppNavbar />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500/30 overflow-x-hidden">
      <SectionDetailModal />
      
      {/* Navigation Header */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3">
        <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 p-1.5 rounded-full flex gap-2 shadow-2xl ring-1 ring-slate-700/50">
          <button 
            onClick={() => setViewMode('pitch')}
            className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-black transition-all ${viewMode === 'pitch' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:text-white'}`}
          >
            Investor Pitch
          </button>
          <button 
            onClick={() => setViewMode('app')}
            className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-black transition-all ${viewMode === 'app' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:text-white'}`}
          >
            Platform Demo
          </button>
        </div>
        
        {viewMode === 'pitch' && (
          <div className="flex gap-2">
            <button 
              onClick={handleShare}
              className="p-3 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-full hover:bg-slate-800 text-amber-500 transition-all flex items-center gap-2 group shadow-2xl ring-1 ring-slate-700/50"
              title="Copy Link"
            >
              <Copy className="w-4 h-4" />
            </button>
            <button 
              onClick={shareToWhatsApp}
              className="p-3 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-full hover:bg-green-500/20 text-green-500 transition-all flex items-center gap-2 group shadow-2xl ring-1 ring-slate-700/50"
              title="Send to Partner via WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Share Notification */}
      {showShareToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[200] bg-amber-500 text-black px-6 py-3 rounded-full font-black text-xs tracking-widest shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
          <CheckCircle className="w-5 h-5" />
          LINK COPIED TO CLIPBOARD
        </div>
      )}

      {viewMode === 'app' ? (
        <CommunityApp />
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Hero Section */}
          <section className="relative h-[95vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1511994298241-608e28f14f66?auto=format&fit=crop&q=80&w=2400')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-slate-950"></div>
            <div className="relative z-10 text-center px-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-500 text-[10px] font-black tracking-[0.2em] mb-8 animate-pulse shadow-xl uppercase">
                <Activity className="w-4 h-4" />
                Bangalore's First Integrated Rider Platform
              </div>
              <h1 className="text-7xl md:text-9xl font-heading font-extrabold tracking-tighter mb-8 leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-500 drop-shadow-2xl">
                RIDEBUILD
              </h1>
              <p className="text-xl md:text-3xl text-slate-100 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                The ultimate digital-first physical ecosystem for premium riders.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => document.getElementById('investor-summary')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 bg-amber-500 hover:bg-amber-400 text-black font-black tracking-widest text-xs uppercase rounded-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-2xl shadow-amber-500/30"
                >
                  Explore Pitch <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>

          {/* Investor Content */}
          <section id="investor-summary" className="py-24 px-4 bg-slate-950">
            <div className="max-w-6xl mx-auto">
               <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-heading mb-4 text-slate-100">Investor Summary</h2>
                <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-12">
                  <div 
                    onClick={() => setExpandedSection('fundraise')}
                    className="cursor-pointer group hover:bg-slate-900/50 p-8 rounded-[2rem] transition-all border border-slate-900 hover:border-amber-500/30"
                  >
                    <div className="flex justify-between items-center mb-8">
                      <h2 className="text-3xl font-heading text-slate-100">1. Fundraise</h2>
                      <ArrowUpRight className="w-8 h-8 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 group-hover:bg-slate-800">
                        <p className="text-slate-500 text-[10px] mb-1 uppercase tracking-widest font-black">Raise</p>
                        <p className="text-3xl font-bold text-amber-500">₹3 Crore</p>
                      </div>
                      <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 group-hover:bg-slate-800">
                        <p className="text-slate-500 text-[10px] mb-1 uppercase tracking-widest font-black">Valuation</p>
                        <p className="text-3xl font-bold text-slate-100">₹15 Cr</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    onClick={() => setExpandedSection('model')}
                    className="cursor-pointer group hover:bg-slate-900/50 p-8 rounded-[2rem] transition-all border border-slate-900 hover:border-amber-500/30"
                  >
                    <div className="flex justify-between items-center mb-8">
                      <h2 className="text-3xl font-heading text-slate-100">2. Model</h2>
                      <ArrowUpRight className="w-8 h-8 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {REVENUE_STREAMS.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-5 bg-slate-900/40 rounded-2xl border border-slate-800">
                          <CheckCircle2 className="w-5 h-5 text-amber-500" />
                          <div>
                            <p className="text-xs font-black text-slate-100 uppercase tracking-widest">{item.name}</p>
                            <p className="text-[10px] text-slate-500 font-bold uppercase">{item.avgTicket}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/40 p-10 rounded-[3rem] border border-slate-800 sticky top-32 shadow-2xl">
                  <h3 className="text-xl font-bold mb-10 flex items-center gap-3 tracking-widest uppercase">
                    <LucidePie className="text-amber-500 w-6 h-6" />
                    Cap Table
                  </h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={CAP_TABLE}
                          innerRadius={80}
                          outerRadius={110}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {CAP_TABLE.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px' }} />
                        <Legend verticalAlign="bottom" height={40} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-8 space-y-4">
                     {CAP_TABLE.map((item, i) => (
                       <div key={i} className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                         <span className="text-slate-500">{item.name}</span>
                         <span className="text-slate-100">{item.value}%</span>
                       </div>
                     ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-20 border-t border-slate-900 px-4 bg-slate-950 text-center">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 justify-center mb-8">
                <Wrench className="w-8 h-8 text-amber-500" />
                <span className="font-heading text-4xl tracking-tight uppercase text-slate-100">RideBuild</span>
              </div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">
                © 2024 RideBuild Bangalore. Confidential Proposal.
              </p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
