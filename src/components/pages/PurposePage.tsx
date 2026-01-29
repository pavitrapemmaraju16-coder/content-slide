import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PurposePage() {
  const steps = [
    {
      number: '01',
      title: 'Strategy & Vision',
      description: 'Define roadmaps and AI-readiness',
    },
    {
      number: '02',
      title: 'Integration',
      description: 'Connect systems and platforms',
    },
    {
      number: '03',
      title: 'Managed Outcomes',
      description: 'Deliver measurable results',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="w-full min-h-[80vh] px-6 flex items-center relative overflow-hidden bg-gradient-to-r from-background via-background/95 to-transparent">
          <div className="max-w-[120rem] mx-auto relative z-20 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-paragraph text-sm uppercase tracking-wider text-primary mb-4">
                OUR PURPOSE
              </p>
              <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-8">
                From Strategy to Design to Operations
              </h1>
              <p className="font-heading text-2xl md:text-3xl text-primary mb-6">
                AI-Ready, Compliant, and Sustainable.
              </p>
              <p className="font-paragraph text-lg text-foreground/80 mb-8">
                InfAIra orchestrates the full transformation journey — from vision and planning, to integration and managed outcomes. We combine digital twin technologies, AI-driven analytics, and ecosystem partnerships to deliver measurable impact in performance, compliance, and sustainability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="p-8 rounded-2xl bg-glassmorphism-overlay backdrop-blur-md border border-foreground/10 hover:border-primary transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <span className="font-heading text-5xl text-primary">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-heading text-2xl text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="font-paragraph text-base text-foreground/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Approach Section */}
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
                Our Approach
              </h2>
              <p className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto">
                We deliver end-to-end transformation through a proven methodology that combines strategic consulting, advanced technology integration, and continuous operational optimization.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Consulting Excellence',
                  description: 'Strategic roadmaps, AI readiness assessments, and investment planning for sustainable infrastructure transformation.',
                  color: 'border-primary',
                },
                {
                  title: 'Technology Integration',
                  description: 'Seamless deployment of digital twins, AI platforms, and IoT ecosystems for real-time operational intelligence.',
                  color: 'border-accent-teal',
                },
                {
                  title: 'Managed Services',
                  description: 'Continuous monitoring, predictive maintenance, and performance optimization to ensure sustained excellence.',
                  color: 'border-secondary',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className={`p-8 rounded-2xl bg-glassmorphism-overlay backdrop-blur-md border-2 ${item.color} hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-all duration-300`}
                >
                  <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="font-paragraph text-base text-foreground/70">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="w-full py-24 px-6 bg-glassmorphism-overlay">
          <div className="max-w-[120rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-8">
                Measurable Impact
              </h2>
              <p className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto mb-12">
                Our solutions deliver tangible results across performance, compliance, and sustainability metrics.
              </p>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: '40%', label: 'Operational Efficiency Gain' },
                  { value: '60%', label: 'Reduction in Energy Costs' },
                  { value: '99.9%', label: 'System Uptime' },
                  { value: '50%', label: 'Faster Issue Resolution' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="p-6"
                  >
                    <div className="font-heading text-5xl md:text-6xl text-primary mb-4">
                      {stat.value}
                    </div>
                    <div className="font-paragraph text-base text-foreground/70">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
