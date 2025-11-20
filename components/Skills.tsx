'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion } from 'framer-motion'
import { skills } from '@/lib/data'
import {
  Code,
  Server,
  Database,
  Settings,
  TestTube,
  GitBranch,
  Palette,
} from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    { key: 'frontend', label: 'Frontend', icon: <Code className="h-4 w-4" /> },
    { key: 'backend', label: 'Backend', icon: <Server className="h-4 w-4" /> },
    { key: 'database', label: 'Base de données', icon: <Database className="h-4 w-4" /> },
    { key: 'devops', label: 'DevOps', icon: <Settings className="h-4 w-4" /> },
    { key: 'testing', label: 'Tests', icon: <TestTube className="h-4 w-4" /> },
    { key: 'methodologies', label: 'Méthodologies', icon: <GitBranch className="h-4 w-4" /> },
    { key: 'design', label: 'Design', icon: <Palette className="h-4 w-4" /> },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Compétences <span className="gradient-text">techniques</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une stack technique complète pour créer des applications modernes et performantes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 h-auto gap-2 bg-transparent">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.key}
                  value={category.key}
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.key} value={category.key}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {category.icon}
                      {category.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills[category.key as keyof typeof skills].map(
                        (skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            <Badge
                              variant="secondary"
                              className="text-sm py-2 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
