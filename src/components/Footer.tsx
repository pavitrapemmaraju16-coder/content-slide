import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-foreground/10">
      <div className="max-w-[120rem] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-heading text-3xl">
                <span className="text-foreground">Inf</span>
                <span className="text-primary">AIra</span>
              </span>
            </Link>
            <p className="font-paragraph text-sm text-foreground/70">
              Intelligent Infrastructure. AI-Ready. Future-Aligned.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-lg text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="font-paragraph text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/purpose"
                  className="font-paragraph text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Purpose
                </Link>
              </li>
              <li>
                <Link
                  to="/why-partner"
                  className="font-paragraph text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Why Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading text-lg text-foreground mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/products#advisory"
                  className="font-paragraph text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  InfAIra Advisory
                </Link>
              </li>
              <li>
                <Link
                  to="/products#cvs"
                  className="font-paragraph text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  InfAIra CVS
                </Link>
              </li>
              <li>
                <Link
                  to="/products#twin"
                  className="font-paragraph text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  InfAIra Twin
                </Link>
              </li>
              <li>
                <Link
                  to="/products#command"
                  className="font-paragraph text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  InfAIra Command
                </Link>
              </li>
              <li>
                <Link
                  to="/products#sustain"
                  className="font-paragraph text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  InfAIra Sustain
                </Link>
              </li>
              <li>
                <Link
                  to="/products#ops"
                  className="font-paragraph text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  InfAIra Ops
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-heading text-lg text-foreground mb-4">Connect</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link
                  to="/contact"
                  className="font-paragraph text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="mailto:info@infalra.com"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-foreground/50">
              © {new Date().getFullYear()} InfAIra. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="font-paragraph text-sm text-foreground/50 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-paragraph text-sm text-foreground/50 hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
