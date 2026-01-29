import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, Zap, Shield, TrendingUp, Users, Award } from 'lucide-react';

export default function WhyPartnerPage() {
  const benefits = [
    {
      icon: Target,
      title: 'Proven Expertise',
      description: 'Decades of combined experience in infrastructure consulting, AI implementation, and operational excellence across diverse industries.',
      color: 'text-primary',
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Accelerated time-to-value with pre-built platforms, proven methodologies, and experienced implementation teams.',
      color: 'text-accent-teal',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level security, compliance with global standards, and robust data protection across all platforms and services.',
      color: 'text-secondary',
    },
    {
      icon: TrendingUp,
      title: 'Measurable ROI',
      description: 'Clear metrics, transparent reporting, and demonstrated impact on operational efficiency, cost reduction, and sustainability.',
      color: 'text-accent-purple',
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'True partnership model with dedicated support, continuous innovation, and alignment with your strategic objectives.',
      color: 'text-primary',
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning solutions, certified partnerships, and recognition from leading industry bodies and technology providers.',
      color: 'text-accent-teal',
    },
  ];

  const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '20+', label: 'Countries Served' },
    { value: '98%', label: 'Client Satisfaction' },
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
                WHY PARTNER WITH US
              </p>
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground mb-8">
                Your Trusted Partner in Digital Transformation
              </h1>
              <p className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto">
                We combine deep industry expertise, cutting-edge technology, and a proven track record to deliver transformative outcomes for our partners.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-16 px-6 bg-glassmorphism-overlay">
          <div className="max-w-[120rem] mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="font-heading text-5xl md:text-6xl text-primary mb-3">
                    {stat.value}
                  </div>
                  <div className="font-paragraph text-base text-foreground/70">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="w-full py-24 px-6">
          <div className="max-w-[120rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-6">
                Why Choose InfAIra
              </h2>
              <p className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto">
                We deliver more than technology—we deliver transformation, partnership, and lasting value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-8 rounded-2xl bg-glassmorphism-overlay backdrop-blur-md border border-foreground/10 hover:border-primary transition-all duration-300 group"
                >
                  <benefit.icon className={`w-16 h-16 mb-6 ${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="font-heading text-2xl text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="font-paragraph text-base text-foreground/70">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Model */}
        <section className="w-full py-24 px-6 bg-glassmorphism-overlay">
          <div className="max-w-[120rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-6">
                Our Partnership Model
              </h2>
              <p className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto">
                We believe in building long-term relationships based on trust, transparency, and shared success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  phase: 'Phase 1',
                  title: 'Discovery & Strategy',
                  description: 'We start by understanding your unique challenges, goals, and infrastructure landscape. Together, we develop a strategic roadmap aligned with your business objectives.',
                },
                {
                  phase: 'Phase 2',
                  title: 'Implementation & Integration',
                  description: 'Our expert teams deploy solutions with minimal disruption, ensuring seamless integration with existing systems and processes.',
                },
                {
                  phase: 'Phase 3',
                  title: 'Optimization & Growth',
                  description: 'We continuously monitor, optimize, and enhance your infrastructure, ensuring you stay ahead of evolving needs and opportunities.',
                },
              ].map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="relative"
                >
                  <div className="p-8 rounded-2xl bg-background border border-foreground/10 hover:border-primary transition-all duration-300 h-full">
                    <div className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                      {phase.phase}
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
                      {phase.title}
                    </h3>
                    <p className="font-paragraph text-base text-foreground/70">
                      {phase.description}
                    </p>
                  </div>
                  {index < 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24 px-6">
          <div className="max-w-[120rem] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-8">
                Let's Build the Future Together
              </h2>
              <p className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-12">
                Join leading organizations worldwide who trust InfAIra to power their intelligent infrastructure transformation.
              </p>
              <button className="bg-primary text-primary-foreground font-heading text-lg px-12 py-4 rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:scale-105">
                Start Your Journey
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
