'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Code, Rocket, Users, Award } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "14 ans d'expérience",
      description: 'Développement frontend et full-stack',
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: 'Architecture moderne',
      description: 'Expertise SPA/SSR avec React et Angular',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Méthodologie Agile',
      description: 'Scrum, CI/CD, collaboration équipe',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Qualité & Performance',
      description: 'Tests, accessibilité WCAG, optimisation',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            À propos de <span className="gradient-text">moi</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {`Passionné par la création d'applications web performantes et
            accessibles`}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Profil Professionnel</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p
                  className="text-muted-foreground"
                  dangerouslySetInnerHTML={{
                    __html:
                      "Développeur frontend senior avec <strong>14 ans d'expérience</strong> dans la conception, l'intégration et la maintenance d'applications web performantes et accessibles.",
                  }}
                />
                <p
                  className="text-muted-foreground"
                  dangerouslySetInnerHTML={{
                    __html:
                      'Expertise avérée sur  <strong>React, Angular, TypeScript</strong>, et les architectures modernes <strong>SPA/SSR</strong>. Expérience dans des environnements <strong>Agile (Scrum)</strong>, avec forte collaboration backend, intégration  <strong>CI/CD</strong>, et livraison continue.',
                  }}
                />
                <p className="text-muted-foreground">
                  Passionné par la transformation de maquettes Figma en
                  interfaces robustes, multilingues et responsive.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Informations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <a
                    href="mailto:bouaziziw@gmail.com"
                    className="text-primary hover:underline"
                  >
                    bouaziziw@gmail.com
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Téléphone:</span>
                  <a
                    href="tel:+33643930694"
                    className="text-primary hover:underline"
                  >
                    +33 6 43 93 06 94
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">LinkedIn:</span>
                  <a
                    href="https://www.linkedin.com/in/welid-bouazizi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    welid-bouazizi
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Localisation:</span>
                  <span>Paris, France</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Statut:</span>
                  <Badge variant="secondary">Freelance</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
