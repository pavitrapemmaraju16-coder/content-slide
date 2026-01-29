import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { Monitor, Globe, Layers, Wrench, Leaf, Settings } from 'lucide-react';

export default function ProductsPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const products = [
    {
      id: 'advisory',
      icon: Layers,
      title: 'InfAIra Advisory',
      subtitle: 'Designing the Future, Intelligently',
      description: 'Strategy, AI-readiness, ESG, and smart infrastructure consulting. We develop roadmaps for investment strategies for operational and sustainability excellence.',
      features: [
        'Strategic roadmaps and AI-readiness assessments',
        'ESG compliance and sustainability planning',
        'Investment strategy optimization',
        'Operational excellence frameworks',
      ],
      tag: 'Consulting',
      image: 'https://static.wixstatic.com/media/2e8132_fe810d8528f04dae94e0a849784197c5~mv2.png',
    },
    {
      id: 'cvs',
      icon: Globe,
      title: 'InfAIra CVS',
      subtitle: 'Vision That Thinks',
      description: 'Computer Vision platform using AI and deep learning to interpret camera feeds. Enables real-time detection, analytics, and insights for safety, security, and operational intelligence.',
      features: [
        'Real-time AI-powered video analytics',
        'Advanced object detection and tracking',
        'Safety and security monitoring',
        'Operational intelligence insights',
      ],
      tag: 'Computer Vision',
      image: 'https://static.wixstatic.com/media/2e8132_a10a6b02442540dbb9866230ff43e97d~mv2.png',
    },
    {
      id: 'twin',
      icon: Monitor,
      title: 'InfAIra Twin',
      subtitle: 'The Living Digital Twin',
      description: 'Digital Twin platform connecting 3D models, BIM, IoT, and AI. Enables real-time monitoring, operations analytics, and predictive maintenance for cities, buildings, and facilities.',
      features: [
        '3D visualization and BIM integration',
        'Real-time IoT data streaming',
        'Predictive maintenance algorithms',
        'Operations analytics dashboard',
      ],
      tag: 'Digital Twin',
      image: 'https://static.wixstatic.com/media/2e8132_7a1182ba05ec4b85b65b812c755fd33b~mv2.png',
    },
    {
      id: 'command',
      icon: Settings,
      title: 'InfAIra Command',
      subtitle: 'Orchestrating the Intelligent Enterprise',
      description: 'Unified Command & Control Centre combining energy, security, facilities, and sustainability insights. Real-time situational awareness and intelligent decision support.',
      features: [
        'Unified command and control interface',
        'Multi-system integration',
        'Real-time situational awareness',
        'Intelligent decision support',
      ],
      tag: 'Command Center',
      image: 'https://static.wixstatic.com/media/2e8132_587508ac2c444ab9b5940bc9694cf4b7~mv2.png',
    },
    {
      id: 'sustain',
      icon: Leaf,
      title: 'InfAIra Sustain',
      subtitle: 'Measuring What Matters',
      description: 'Real-time ESG platform tracking energy, water, carbon, and waste performance. Supports reporting for Green Mark, GRESB, and global ESG standards.',
      features: [
        'Real-time ESG metrics tracking',
        'Energy and carbon monitoring',
        'Green certification support',
        'Automated compliance reporting',
      ],
      tag: 'Sustainability',
      image: 'https://static.wixstatic.com/media/2e8132_4a582c271aca42b5bfeda848f3e990e8~mv2.png',
    },
    {
      id: 'ops',
      icon: Wrench,
      title: 'InfAIra Ops',
      subtitle: 'Smart FM, Smarter Outcomes',
      description: 'AI-enabled Smart FM and drone-based managed services. Predictive operations, AFDD, RCA, and efficiency optimization across asset portfolios.',
      features: [
        'AI-powered facility management',
        'Drone-based inspections',
        'Predictive operations',
        'Asset portfolio optimization',
      ],
      tag: 'Operations',
      image: 'https://wixmp-a85a29aaf55baa3e5171a82d.wixmp.com/a6a50190-05b8-4d63-a383-19118624b1f0.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjAyNWI2YzZhOWUxZTQ4NGY4NzBhMjk2ZWJiMzZmNDRiIiwib2JqIjpbW3sicGF0aCI6Ii9hNmE1MDE5MC0wNWI4LTRkNjMtYTM4My0xOTExODYyNGIxZjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXSwiaXNzIjoidXJuOmFwcDowMjViNmM2YTllMWU0ODRmODcwYTI5NmViYjM2ZjQ0YiIsImlhdCI6MTc2OTY4ODA4NCwianRpIjoiNzQ3YjllMDYyYTcxIiwiZXhwIjoxNzY5Njk4ODk1fQ.3VgdMr6GdHIPjTm-zxqUhDVLBLEAz8oFXzwN0M5BMLo&filename=Screenshot%202026-01-29%20171726.png',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="w-full py-24 px-6">
          <div className="max-w-[120rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="font-paragraph text-sm uppercase tracking-wider text-primary mb-4">
                PRODUCT & SERVICE LINES
              </p>
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground mb-8">
                Comprehensive Solutions for Modern Infrastructure
              </h1>
              <p className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto">
                Our integrated suite of products and services empowers organizations to build, operate, and optimize intelligent infrastructure at scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="w-full py-12 px-6">
          <div className="max-w-[120rem] mx-auto space-y-32">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <product.icon className="w-16 h-16 text-primary mb-6" />
                    <span className="inline-block font-paragraph text-sm text-primary border border-primary px-4 py-1 rounded mb-4">
                      {product.tag}
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-3">
                      {product.title}
                    </h2>
                    <p className="font-heading text-xl md:text-2xl text-primary mb-6 italic">
                      {product.subtitle}
                    </p>
                    <p className="font-paragraph text-lg text-foreground/80 mb-8">
                      {product.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="font-paragraph text-base text-foreground/70 flex items-start gap-3"
                        >
                          <span className="text-primary mt-1">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="bg-primary text-primary-foreground font-heading text-base px-8 py-3 rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]">
                      Learn More
                    </button>
                  </motion.div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="relative"
                  >
                    <div className="rounded-2xl overflow-hidden border border-foreground/10 hover:border-primary transition-all duration-300">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={800}
                        className="w-full h-auto"
                      />
                    </div>
                    {/* Decorative glow effect */}
                    <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl -z-10" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24 px-6 bg-glassmorphism-overlay">
          <div className="max-w-[120rem] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-8">
                Ready to Transform Your Operations?
              </h2>
              <p className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-12">
                Discover how our integrated solutions can help you achieve operational excellence, sustainability goals, and future-ready infrastructure.
              </p>
              <button className="bg-primary text-primary-foreground font-heading text-lg px-12 py-4 rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:scale-105">
                Contact Our Team
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
