import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, Clock, Cloud, Activity, Cpu } from 'lucide-react';

export default function AboutPage() {
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
            >
              <p className="font-paragraph text-sm uppercase tracking-wider text-primary mb-4">
                ABOUT INFALRA
              </p>
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground mb-8">
                Bridging Expertise with Intelligence
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="w-full py-12 px-6">
          <div className="max-w-[120rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <p className="font-paragraph text-lg md:text-xl text-foreground/80">
                  InfAIra is a next-generation company that bridges consulting expertise with intelligent digital platforms to help organizations build and operate AI-ready, sustainable, and resilient infrastructure. We bring together strategy, systems integration, and operational intelligence to empower clients across smart cities, smart buildings, aviation, campuses, healthcare, and industrial portfolios.
                </p>
                <p className="font-paragraph text-lg md:text-xl text-foreground/80">
                  Our mission is to enable enterprises to move from reactive to predictive to autonomous operations, powered by AI, data, and human insight.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full h-auto rounded-2xl border border-foreground/10 bg-gradient-to-br from-primary/10 to-secondary/10 p-12 flex items-center justify-center min-h-96"
              >
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full border-2 border-primary/30 mx-auto mb-6 flex items-center justify-center">
                    <Cpu className="w-16 h-16 text-primary/60" />
                  </div>
                  <p className="font-paragraph text-foreground/60">Digital Infrastructure</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full py-24 px-6">
          <div className="max-w-[120rem] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Home,
                  title: 'Smart Cities',
                  description: 'Building intelligent urban infrastructure for tomorrow',
                  color: 'text-primary',
                },
                {
                  icon: Clock,
                  title: 'AI-Driven',
                  description: 'Powered by advanced artificial intelligence and machine learning',
                  color: 'text-accent-teal',
                },
                {
                  icon: Cloud,
                  title: 'Sustainable',
                  description: 'Committed to environmental responsibility and green operations',
                  color: 'text-secondary',
                },
                {
                  icon: Activity,
                  title: 'Predictive',
                  description: 'Anticipating needs before they become critical',
                  color: 'text-accent-purple',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-8 rounded-2xl bg-glassmorphism-overlay backdrop-blur-md border border-foreground/10 hover:border-primary transition-all duration-300"
                >
                  <feature.icon className={`w-16 h-16 mb-6 ${feature.color}`} />
                  <h3 className="font-heading text-2xl text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="font-paragraph text-base text-foreground/70">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="w-full py-24 px-6 bg-glassmorphism-overlay">
          <div className="max-w-[120rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-8">
                Our Vision
              </h2>
              <p className="font-paragraph text-lg md:text-xl text-foreground/80 mb-6">
                To be the global leader in intelligent infrastructure transformation, enabling organizations to achieve operational excellence through the seamless integration of AI, data analytics, and human expertise.
              </p>
              <p className="font-paragraph text-lg md:text-xl text-foreground/80">
                We envision a future where infrastructure is not just smart, but truly intelligent—anticipating needs, optimizing performance, and driving sustainable outcomes for communities worldwide.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
