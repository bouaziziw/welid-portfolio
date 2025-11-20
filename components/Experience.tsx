'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Expérience <span className="gradient-text">professionnelle</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un parcours riche et diversifié au service de grandes entreprises
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background z-10"></div>

                  <Card className="md:ml-16 hover:shadow-lg transition-shadow">
                    <CardHeader
                      className="cursor-pointer"
                      onClick={() =>
                        setExpandedId(expandedId === exp.id ? null : exp.id)
                      }
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="space-y-2">
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                              <span className="flex items-center gap-1 font-semibold text-foreground">
                                <Briefcase className="h-4 w-4" />
                                {exp.company}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {exp.location}
                              </span>
                              <Badge variant="outline">{exp.type}</Badge>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                          </CardDescription>
                        </div>
                        <ChevronRight
                          className={`h-5 w-5 transition-transform ${
                            expandedId === exp.id ? 'rotate-90' : ''
                          }`}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {exp.description}
                      </p>
                    </CardHeader>

                    {expandedId === exp.id && (
                      <CardContent className="space-y-6">
                        {/* Missions */}
                        {exp.missions.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-3">
                              Missions réalisées:
                            </h4>
                            <ul className="space-y-2">
                              {exp.missions.map((mission, idx) => (
                                <li
                                  key={idx}
                                  className="flex gap-2 text-sm text-muted-foreground"
                                >
                                  <span className="text-primary mt-1.5">•</span>
                                  <span>{mission}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Projects */}
                        {exp.projects.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-3">
                              Projets ({exp.projects.length}):
                            </h4>
                            <div className="grid gap-4">
                              {exp.projects.map((project, idx) => (
                                <Card key={idx} className="bg-muted/50">
                                  <CardContent className="pt-4">
                                    <h5 className="font-semibold mb-2">
                                      {project.name}
                                    </h5>
                                    <p className="text-sm text-muted-foreground mb-3">
                                      {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                      {project.tech.map((tech) => (
                                        <Badge
                                          key={tech}
                                          variant="secondary"
                                          className="text-xs"
                                        >
                                          {tech}
                                        </Badge>
                                      ))}
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
