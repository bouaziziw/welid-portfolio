import Link from 'next/link';
import { Mail, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-2">
              Welid Bouazizi
            </h3>
            <p className="text-sm text-muted-foreground">
              Développeur Frontend Senior
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {`Créateur d'applications web performantes et accessibles`}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                href="#home"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Accueil
              </Link>
              <Link
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Profil
              </Link>
              <Link
                href="#skills"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Compétences
              </Link>
              <Link
                href="#experience"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Expérience
              </Link>
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:bouaziziw@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                bouaziziw@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/welid-bouazizi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Portfolio Welid Bouazizi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
