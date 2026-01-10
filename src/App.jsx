import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Sparkles, Terminal, ChevronRight, ExternalLink, Download, Phone, MapPin } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      name: "MeetingQuick",
      type: "Chrome Extension",
      description: "A freemium productivity tool that revolutionizes meeting management with one-click join functionality. Built entirely through AI-assisted development.",
      tech: ["JavaScript", "Chrome API", "AI-Assisted Development"],
      highlights: [
        "One-click meeting joins across multiple platforms",
        "Smart meeting detection and organization",
        "Freemium monetization model",
        "Complete Chrome Web Store deployment"
      ],
      vibePrompt: `"Create a Chrome extension that helps users manage their daily meetings. Users should be able to see all their meetings in one place and join them with a single click. Make it clean, fast, and intuitive."`
    },
    {
      name: "Task Manager Desktop App",
      type: "Desktop Application",
      description: "A Python-based task management application with intuitive GUI, demonstrating cross-platform development capabilities and clean interface design.",
      tech: ["Python", "tkinter", "AI Pair Programming"],
      highlights: [
        "Clean, intuitive task management interface",
        "Built with Python tkinter framework",
        "Demonstrates desktop app development skills",
        "Rapid prototyping through vibe coding"
      ],
      vibePrompt: `"Build a desktop task manager with Python tkinter. I want it to be simple but effective - add tasks, mark them complete, delete them. Make the UI clean and professional-looking."`
    }
  ];

  const skills = [
    { category: "AI-Assisted Development", items: ["Cursor IDE", "Vibe Coding", "Agent-Assisted Programming", "Rapid Prototyping"] },
    { category: "Web Technologies", items: ["JavaScript", "Chrome Extensions", "React", "HTML/CSS"] },
    { category: "Development Tools", items: ["Git", "Github", "Cursor IDE", "Windsurf"] },
    { category: "Languages", items: ["Python", "JavaScript", "Shell Scripting"] },
    { category: "Other Skills", items: ["ISO 27001", "Security Compliance", "Risk Analysis"] }
  ];

  const vibeCodePrinciples = [
    {
      principle: "Describe, Don't Code",
      description: "Explain functionality in plain English. Let AI handle implementation details.",
      example: "Instead of writing loops and functions, I describe what the app should do: 'When user clicks this button, show a list of meetings sorted by time'"
    },
    {
      principle: "Iterate Through Conversation",
      description: "Refine features through natural dialogue with AI coding assistants.",
      example: "Start broad, then add: 'Make that button blue' or 'Add error handling for network failures'"
    },
    {
      principle: "Focus on User Experience",
      description: "Prioritize what users need, not implementation complexity.",
      example: "I think about user flows first: 'Users need to join meetings quickly without opening multiple tabs'"
    },
    {
      principle: "Speed Over Perfection",
      description: "Launch functional products fast, iterate based on real usage.",
      example: "MeetingQuick launched with core features, not every possible bell and whistle"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-sans">
      {/* Animated background texture */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-indigo-500/20 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-mono text-xl font-bold flex items-center gap-2">
            <Terminal className="w-5 h-5 text-indigo-400" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Kiwo.dev</span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#about" className="text-sm hover:text-indigo-400 transition-colors">About</a>
            <a href="#projects" className="text-sm hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#skills" className="text-sm hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#vibe-coding" className="text-sm hover:text-indigo-400 transition-colors">Vibe Coding</a>
            <a href="#contact" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-medium transition-all">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-4 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full">
              <span className="text-sm text-indigo-300 font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                AI-Assisted Developer
              </span>
            </div>
            <h1 className="text-7xl font-black mb-6 leading-tight">
              Building Apps<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                Through Conversation
              </span>
            </h1>
            <p className="text-2xl text-slate-400 mb-8 max-w-3xl leading-relaxed">
              Web app developer leveraging AI pair programming to ship production-ready applications. 
              Specialized in rapid prototyping, Chrome extensions, and user-focused design.
            </p>
            <div className="flex gap-4 items-center">
              <a href="#projects" className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-semibold transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/30">
                View My Work
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#vibe-coding" className="px-8 py-4 border-2 border-indigo-500/50 hover:border-indigo-400 rounded-lg font-semibold transition-all">
                My Approach
              </a>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-16">
              <h2 className="text-5xl font-black mb-4">About Me</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-transparent rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Professional Photo */}
              <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border-2 border-indigo-500/30 rounded-2xl p-2 aspect-square overflow-hidden">
                    <img 
                      src="/professional-photo.jpeg" 
                      alt="Kiwo Jumbam - Professional Photo"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Bio and Stats */}
              <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="space-y-6">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg text-slate-300 leading-relaxed mb-4">
                      I'm a web app developer with a unique background: I hold a <span className="text-indigo-400 font-semibold">Bachelor of Business Administration (BBA) in Computer Information Systems (CIS)</span>, a <span className="text-indigo-400 font-semibold">Master's in Public Administration (Cybersecurity concentration)</span> and a <span className="text-indigo-400 font-semibold">Google Cybersecurity Professional Certificate</span>. While doing Governance, Risk and Compliance (GRC) projects, I discovered my passion for building applications through AI-assisted development.
                    </p>
                    <p className="text-lg text-slate-300 leading-relaxed mb-4">
                      I specialize in <span className="text-indigo-400 font-semibold">"vibe coding"</span>—using AI pair programming to rapidly prototype and ship production-ready apps. This approach helped me build MeetingQuick (a Chrome extension) and a Python task manager, both currently in use. I bring analytical thinking from cybersecurity, hands-on shipping experience, and a modern development approach that embraces AI collaboration.
                    </p>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      I'm seeking an entry-level position where I can contribute fresh ideas, learn from experienced developers, and help build impactful products.
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-slate-900/40 backdrop-blur border border-indigo-500/20 rounded-xl p-4 hover:border-indigo-500/40 transition-all">
                      <div className="text-2xl mb-2">🎓</div>
                      <div className="text-sm text-slate-400">Master's in Public Administration</div>
                      <div className="text-xs text-indigo-400 mt-1">Cybersecurity</div>
                    </div>
                    <div className="bg-slate-900/40 backdrop-blur border border-indigo-500/20 rounded-xl p-4 hover:border-indigo-500/40 transition-all">
                      <div className="text-2xl mb-2">🔐</div>
                      <div className="text-sm text-slate-400">Google Cybersecurity</div>
                      <div className="text-xs text-indigo-400 mt-1">Certified</div>
                    </div>
                    <div className="bg-slate-900/40 backdrop-blur border border-indigo-500/20 rounded-xl p-4 hover:border-indigo-500/40 transition-all">
                      <div className="text-2xl mb-2">🚀</div>
                      <div className="text-sm text-slate-400">2+ Shipped</div>
                      <div className="text-xs text-indigo-400 mt-1">Applications</div>
                    </div>
                    <div className="bg-slate-900/40 backdrop-blur border border-indigo-500/20 rounded-xl p-4 hover:border-indigo-500/40 transition-all">
                      <div className="text-2xl mb-2">🤖</div>
                      <div className="text-sm text-slate-400">AI Development</div>
                      <div className="text-xs text-indigo-400 mt-1">Specialist</div>
                    </div>
                  </div>

                  {/* Download Resume Button */}
                  <div className="mt-8">
                    <a 
                      href="/Kiwo_Jumbam_Resume.pdf" 
                      download="Kiwo_Jumbam_Resume.pdf"
                      className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-semibold transition-all shadow-lg shadow-indigo-500/30"
                    >
                      <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 -right-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-black mb-4">Featured Projects</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-transparent rounded-full"></div>
          </div>

          <div className="grid gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden"
              >
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-bold text-indigo-300">{project.name}</h3>
                        <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-xs font-mono text-indigo-300">
                          {project.type}
                        </span>
                      </div>
                      <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
                        {project.description}
                      </p>
                    </div>
                    <ExternalLink className="w-6 h-6 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-indigo-400 mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-indigo-400 mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        The Vibe Prompt
                      </h4>
                      <div className="bg-slate-950/50 border border-slate-700/50 rounded-lg p-4">
                        <p className="text-sm text-slate-300 font-mono italic leading-relaxed">
                          {project.vibePrompt}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-md text-xs text-slate-300 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vibe Coding Section */}
      <section id="vibe-coding" className="py-20 px-6 relative bg-gradient-to-b from-slate-950/0 via-indigo-950/10 to-slate-950/0">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Vibe Coding Philosophy
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              My development approach: collaborative AI pair programming where ideas flow naturally from conversation to code.
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-transparent rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {vibeCodePrinciples.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/40 backdrop-blur border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-all"
                style={{
                  animationDelay: `${idx * 100}ms`
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-lg">{idx + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-indigo-300">{item.principle}</h3>
                    <p className="text-slate-400 mb-3 leading-relaxed">{item.description}</p>
                    <div className="bg-slate-950/50 border border-slate-700/50 rounded-lg p-3">
                      <p className="text-sm text-slate-300 italic">"{item.example}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Terminal className="w-6 h-6 text-indigo-400" />
              Why Vibe Coding Works
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-indigo-400 font-bold mb-2">⚡ Speed</div>
                <p className="text-slate-400">From idea to working prototype in hours, not days. AI handles boilerplate while I focus on user experience.</p>
              </div>
              <div>
                <div className="text-indigo-400 font-bold mb-2">🎯 Focus</div>
                <p className="text-slate-400">Concentrate on solving user problems instead of syntax debugging. Better products, faster.</p>
              </div>
              <div>
                <div className="text-indigo-400 font-bold mb-2">📚 Learning</div>
                <p className="text-slate-400">Every conversation teaches new patterns. AI assistance accelerates skill development exponentially.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-black mb-4">Technical Skills</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-transparent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/30 backdrop-blur border border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/50 transition-all"
              >
                <h3 className="text-lg font-bold mb-4 text-indigo-400">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-800/50 border border-slate-600/50 rounded-lg text-sm text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-black mb-4">Let's Connect</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Looking for an entry-level web developer who brings fresh perspectives and modern AI-assisted development skills? 
              Let's talk about how I can contribute to your team.
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-transparent rounded-full mx-auto mt-6"></div>
          </div>

          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Name Card */}
            <div className="bg-slate-900/40 backdrop-blur border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-indigo-500/30">
                  <Terminal className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-400 mb-1 uppercase tracking-wide">Name</h3>
                  <p className="text-lg font-bold text-slate-100">Kiwo Jumbam</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <a 
              href="mailto:ksjumbam@gmail.com" 
              className="group bg-slate-900/40 backdrop-blur border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 hover:bg-slate-900/60 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-indigo-500/30 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all">
                  <Mail className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-400 mb-1 uppercase tracking-wide">Email</h3>
                  <p className="text-lg font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">ksjumbam@gmail.com</p>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a 
              href="tel:+16087387493" 
              className="group bg-slate-900/40 backdrop-blur border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 hover:bg-slate-900/60 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-indigo-500/30 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all">
                  <Phone className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-400 mb-1 uppercase tracking-wide">Phone</h3>
                  <p className="text-lg font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">(608) 738-7493</p>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="bg-slate-900/40 backdrop-blur border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-indigo-500/30">
                  <MapPin className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-400 mb-1 uppercase tracking-wide">Location</h3>
                  <p className="text-lg font-bold text-slate-100">Morgan Hill, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="mailto:ksjumbam@gmail.com" 
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-semibold transition-all shadow-lg shadow-indigo-500/30"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a 
              href="https://github.com/kjumbam" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-3 px-6 py-3 border-2 border-indigo-500/50 hover:border-indigo-400 hover:bg-indigo-500/10 rounded-lg font-semibold transition-all"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/kiwo-jumbam-80ab6537b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-3 px-6 py-3 border-2 border-indigo-500/50 hover:border-indigo-400 hover:bg-indigo-500/10 rounded-lg font-semibold transition-all"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>

          {/* What I'm Looking For */}
          <div className="bg-slate-900/40 backdrop-blur border border-indigo-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-indigo-300 flex items-center gap-3">
              <Sparkles className="w-6 h-6" />
              What I'm Looking For
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Entry-level web application developer position where I can apply my AI-assisted development skills, 
              learn from experienced developers, and contribute to building user-focused products. 
              Especially interested in teams that value innovation, rapid iteration, and modern development practices.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Footer */}
      <footer className="border-t border-indigo-500/20 py-8 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-slate-500 text-sm font-mono">
            Built with React + Tailwind CSS • Powered by Vibe Coding ✨
          </p>
          <p className="text-slate-600 text-xs mt-2">
            © 2026 Kiwo • Entry-Level Web Developer
          </p>
        </div>
      </footer>
    </div>
  );
}
