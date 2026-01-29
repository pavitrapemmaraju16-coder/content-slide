// HPI 1.7-V
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Clock, Cloud, Activity, ChevronRight, Globe, Cpu, Layers, Zap } from 'lucide-react';
import { Image } from '@/components/ui/image';

// --- ANIMATED PARTICLES COMPONENT ---
const AnimatedParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -window.innerHeight],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

// --- CANONICAL DATA SOURCES ---
// Preserving original data structures exactly as defined in the source.

const FEATURES = [
  { icon: Home, title: 'Smart Cities', color: 'text-primary', desc: 'Urban intelligence networks.' },
  { icon: Clock, title: 'AI-Driven', color: 'text-accent-teal', desc: 'Real-time processing.' },
  { icon: Cloud, title: 'Sustainable', color: 'text-secondary', desc: 'Eco-centric optimization.' },
  { icon: Activity, title: 'Predictive', color: 'text-accent-purple', desc: 'Future-proof analytics.' },
];

const PRODUCTS = [
  {
    id: 'advisory',
    title: 'InfAIra Advisory',
    subtitle: 'Designing the Future, Intelligently',
    description: 'Strategy, AI-readiness, ESG, and smart infrastructure consulting. We develop roadmaps for investment strategies for operational and sustainability excellence.',
    link: '/products#advisory',
    tag: 'Consulting',
    image: 'https://static.wixstatic.com/media/2e8132_2f41a53af69c43cd96c827c1b02faf13~mv2.png?originWidth=1152&originHeight=896'
  },
  {
    id: 'cvs',
    title: 'InfAIra CVS',
    subtitle: 'Vision That Thinks',
    description: 'Computer Vision platform using AI and deep learning to interpret camera feeds. Enables real-time detection, analytics, and insights for safety, security, and operational intelligence.',
    link: '/products#cvs',
    tag: 'Computer Vision',
    image: 'https://static.wixstatic.com/media/2e8132_85df9a2d71e44dfd96e8401d21b4189e~mv2.png?originWidth=1152&originHeight=896'
  },
  {
    id: 'twin',
    title: 'InfAIra Twin',
    subtitle: 'The Living Digital Twin',
    description: 'Digital Twin platform connecting 3D models, BIM, IoT, and AI. Enables real-time monitoring, operations analytics, and predictive maintenance for cities, buildings, and facilities.',
    link: '/products#twin',
    tag: 'Digital Twin',
    image: 'https://static.wixstatic.com/media/2e8132_1e229b4a4a5244beba4539354401cc7c~mv2.png?originWidth=1152&originHeight=896'
  }
];

// --- UTILITY COMPONENTS ---

const SectionLabel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex items-center gap-3 mb-6 ${className}`}>
    <div className="h-[1px] w-8 bg-primary/50" />
    <span className="font-paragraph text-xs md:text-sm uppercase tracking-[0.2em] text-primary/80">
      {children}
    </span>
  </div>
);

const GlitchText = ({ text }: { text: string }) => {
  return (
    <span className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-accent-teal opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-100 select-none">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-accent-purple opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-100 select-none">
        {text}
      </span>
    </span>
  );
};

// --- MAIN PAGE COMPONENT ---

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 300]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-x-clip selection:bg-primary/30 selection:text-primary-foreground">
      <AnimatedParticles />
      <style>{`
        .clip-tech-corner {
          clip-path: polygon(
            0 0,
            100% 0,
            100% calc(100% - 20px),
            calc(100% - 20px) 100%,
            0 100%
          );
        }
        .clip-tech-corner-inv {
          clip-path: polygon(
            20px 0,
            100% 0,
            100% 100%,
            0 100%,
            0 20px
          );
        }
        .grid-bg {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
        }
      `}</style>
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />
          <div className="absolute inset-0 grid-bg opacity-20" />
        </div>

        {/* Floating HUD Elements */}
        <div className="absolute top-32 left-8 md:left-16 hidden md:block opacity-50">
          <div className="font-paragraph text-xs text-primary tracking-widest mb-2">SYS.STATUS: ONLINE</div>
          <div className="w-32 h-[1px] bg-primary/30" />
        </div>
        <div className="absolute bottom-32 right-8 md:right-16 hidden md:block opacity-50 text-right">
          <div className="font-paragraph text-xs text-primary tracking-widest mb-2">COORDS: 34.0522° N</div>
          <div className="w-32 h-[1px] bg-primary/30 ml-auto" />
        </div>

        {/* Main Content */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-[120rem] w-full px-6 mx-auto flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 relative"
          >
            <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-full" />
            <h1 className="font-heading text-7xl md:text-9xl lg:text-[10rem] leading-[0.9] tracking-tighter text-foreground">
              Inf<span className="text-primary">AIra</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl text-foreground/90">
              <GlitchText text="Intelligent Infrastructure." /> <br className="hidden md:block" />
              <span className="text-primary/80">AI-Ready. Future-Aligned.</span>
            </h2>

            <p className="font-paragraph text-sm md:text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              Next-generation infrastructure powered by AI, data, and human insight.
              Transform from reactive to predictive to autonomous operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link to="/about" className="group relative">
                <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <button className="relative clip-tech-corner bg-primary text-primary-foreground font-heading text-lg px-10 py-4 transition-all duration-300 hover:translate-y-[-2px] active:translate-y-[1px]">
                  Get Started
                </button>
              </Link>
              <Link to="/products">
                <button className="group flex items-center gap-2 font-heading text-lg text-foreground hover:text-primary transition-colors px-8 py-4">
                  <span className="border-b border-transparent group-hover:border-primary transition-all">Learn More</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="font-paragraph text-[10px] tracking-[0.3em] uppercase">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>
      {/* --- TICKER SECTION --- */}
      <div className="w-full bg-primary/5 border-y border-primary/10 py-4 overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-16"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 font-paragraph text-sm text-primary/60 tracking-widest">
              <span>INTELLIGENT INFRASTRUCTURE</span>
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span>AI-READY OPERATIONS</span>
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span>PREDICTIVE ANALYTICS</span>
              <span className="w-2 h-2 bg-primary rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
      {/* --- ABOUT SECTION (Split Layout) --- */}
      <section className="relative w-full py-32 px-6 overflow-hidden">
        <div className="max-w-[120rem] mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Content */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <SectionLabel>About InfAIra</SectionLabel>
              <h2 className="font-heading text-4xl md:text-6xl leading-tight mb-8 lg:text-3xl">
                Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Expertise</span> with Intelligence
              </h2>
              <p className="font-paragraph text-foreground/70 mb-12 text-3xl">
                InfAIra is a next-generation company that bridges consulting expertise with intelligent digital platforms to help organizations build and operate AI-ready, sustainable, and resilient infrastructure.
              </p>
              
              <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-primary/30 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border border-primary/50 flex items-center justify-center">
                      <Cpu className="w-10 h-10 text-primary/60" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Features Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid sm:grid-cols-2 gap-6">
              {FEATURES.map((feature, idx) => (
                <FeatureCard key={idx} feature={feature} index={idx} />
              ))}
            </div>
            
            <div className="mt-16 p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <h3 className="font-heading text-2xl mb-4">Our Mission</h3>
              <p className="font-paragraph text-foreground/80">
                To enable enterprises to move from reactive to predictive to autonomous operations, powered by AI, data, and human insight. We bring together strategy, systems integration, and operational intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --- PRODUCTS SECTION (Horizontal Scroll / Sliding Screens) --- */}
      <ProductShowcase />
      {/* --- CTA SECTION --- */}
      <section className="relative w-full py-40 px-6 overflow-hidden flex items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tight">
              Ready to <span className="text-primary">Transform?</span>
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
              Discover how InfAIra can help you build intelligent, sustainable, and future-ready operations.
            </p>
            
            <Link to="/contact">
              <button className="group relative inline-flex items-center gap-4 bg-foreground text-background font-heading text-xl px-12 py-6 clip-tech-corner transition-transform duration-300 hover:scale-105">
                <span>Contact Us</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 clip-tech-corner translate-x-1 translate-y-1 -z-10" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function FeatureCard({ feature, index }: { feature: any, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
        <div className="w-2 h-2 bg-primary rounded-full" />
      </div>
      
      <feature.icon className={`w-12 h-12 mb-6 ${feature.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`} />
      
      <h3 className="font-heading text-xl md:text-2xl mb-3">{feature.title}</h3>
      <p className="font-paragraph text-sm text-foreground/60">{feature.desc}</p>
      
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
    </motion.div>
  );
}

function ProductShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Section Header (Absolute positioned to stay visible initially) */}
        <div className="absolute top-12 left-6 md:left-12 z-20 pointer-events-none">
          <SectionLabel>Product & Service Lines</SectionLabel>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">Comprehensive Solutions</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-0 h-full w-[300vw]">
          {PRODUCTS.map((product, i) => (
            <div key={product.id} className="w-screen h-full flex items-center justify-center p-6 md:p-24 relative border-r border-white/5 bg-background">
              {/* Content Card */}
              <div className="relative z-10 w-full max-w-[100rem] grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-block px-4 py-2 border border-primary/30 rounded-full text-primary font-paragraph text-xs mb-6 bg-primary/5 backdrop-blur-md">
                    {product.tag}
                  </div>
                  <h3 className="font-heading text-5xl md:text-7xl lg:text-8xl mb-4 text-foreground">
                    {product.title}
                  </h3>
                  <p className="font-heading text-xl md:text-2xl text-primary/80 italic mb-8">
                    {product.subtitle}
                  </p>
                  <p className="font-paragraph text-lg text-foreground/70 max-w-xl mb-10 leading-relaxed">
                    {product.description}
                  </p>
                  <Link to={product.link}>
                    <button className="bg-primary hover:bg-primary/80 text-primary-foreground border border-primary/30 font-heading text-lg px-8 py-4 rounded-lg backdrop-blur-md transition-all duration-300">
                      Explore Solution
                    </button>
                  </Link>
                </div>
                
                {/* Visual Element */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                   <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/20 group">
                      <Image 
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
                   </div>
                </div>
              </div>
              
              {/* Number Indicator */}
              <div className="absolute bottom-12 right-12 font-heading text-9xl text-foreground/5 select-none">
                0{i + 1}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
