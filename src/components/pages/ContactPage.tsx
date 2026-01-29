import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                GET IN TOUCH
              </p>
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground mb-8">
                Let's Start a Conversation
              </h1>
              <p className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto">
                Ready to transform your infrastructure? Our team is here to help you navigate your digital transformation journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="w-full py-12 px-6">
          <div className="max-w-[120rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="p-8 md:p-12 rounded-2xl bg-glassmorphism-overlay backdrop-blur-md border border-foreground/10">
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
                    Send Us a Message
                  </h2>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="font-heading text-2xl text-foreground mb-4">
                        Message Sent!
                      </h3>
                      <p className="font-paragraph text-base text-foreground/70">
                        Thank you for reaching out. We'll get back to you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block font-paragraph text-sm text-foreground/70 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded bg-background border border-foreground/20 text-foreground font-paragraph focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block font-paragraph text-sm text-foreground/70 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded bg-background border border-foreground/20 text-foreground font-paragraph focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block font-paragraph text-sm text-foreground/70 mb-2"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded bg-background border border-foreground/20 text-foreground font-paragraph focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block font-paragraph text-sm text-foreground/70 mb-2"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded bg-background border border-foreground/20 text-foreground font-paragraph focus:border-primary focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground font-heading text-lg px-8 py-4 rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:scale-105 flex items-center justify-center gap-3"
                      >
                        Send Message
                        <Send className="w-5 h-5" />
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
                    Contact Information
                  </h2>
                  <p className="font-paragraph text-lg text-foreground/80 mb-12">
                    Reach out to us through any of these channels. Our team is ready to assist you with your infrastructure transformation needs.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: 'Email',
                      content: 'info@infalra.com',
                      link: 'mailto:info@infalra.com',
                    },
                    {
                      icon: Phone,
                      title: 'Phone',
                      content: '+1 (555) 123-4567',
                      link: 'tel:+15551234567',
                    },
                    {
                      icon: MapPin,
                      title: 'Office',
                      content: 'San Francisco, CA',
                      link: null,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="p-6 rounded-2xl bg-glassmorphism-overlay backdrop-blur-md border border-foreground/10 hover:border-primary transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading text-xl text-foreground mb-2">
                            {item.title}
                          </h3>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="font-paragraph text-base text-foreground/70 hover:text-primary transition-colors"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="font-paragraph text-base text-foreground/70">
                              {item.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="p-8 rounded-2xl bg-glassmorphism-overlay backdrop-blur-md border border-foreground/10">
                  <h3 className="font-heading text-2xl text-foreground mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 font-paragraph text-base text-foreground/70">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
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
                Global Presence, Local Expertise
              </h2>
              <p className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto">
                With offices and partners across the globe, we're positioned to serve your infrastructure needs wherever you are.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
