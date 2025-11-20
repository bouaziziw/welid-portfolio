'use client';

import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-primary font-medium">Bonjour, je suis</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Welid <span className="gradient-text">Bouazizi</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">
                Développeur Frontend Senior
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              {`14 ans d'expérience dans la conception, l'intégration et la
              maintenance d'applications web performantes et accessibles.
              Expertise avérée sur React, Angular, TypeScript, et les
              architectures modernes SPA/SSR.`}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#contact">
                  Me contacter <ArrowRight className="ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">Voir mes projets</a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="mailto:bouaziziw@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/welid-bouazizi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-float"></div>
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 border-2 border-primary/20 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold gradient-text">14+</div>
                  <p className="text-xl text-muted-foreground">
                    {`Années d'expérience`}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
