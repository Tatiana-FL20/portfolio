import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink, 
  Gitlab, 
  Linkedin,
  Code,
  Database,
  BrainCircuit,
  Cloud,
  Users,
  Briefcase,
  GraduationCap,
  Star,
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon,
  Languages,
  Sparkles,
  Zap,
  Rocket,
  Heart,
  Coffee
} from 'lucide-react'
import tatianaProfile from './assets/tatiana.jpg'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [language, setLanguage] = useState('fr')

  // Translations
  const translations = {
    fr: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        skills: 'Compétences',
        experience: 'Expériences',
        projects: 'Projets',
        services: 'Services',
        contact: 'Contact',
        downloadCV: 'Télécharger CV'
      },
      hero: {
        title: 'Tatiana',
        subtitle: 'Développeuse IA',
        description: 'Je transforme vos idées en applications web modernes et performantes, intégrant l’automatisation, le Machine Learning et le NLP, avec créativité et passion.',
        cta1: 'Voir mes projets',
        cta2: 'Me contacter',
        // location: 'Antananarivo, Madagascar',
        available: 'Disponible pour projets'
      },
      about: {
        title: 'À propos de moi',
        subtitle: 'Passionnée par le développement web depuis plus de 3 ans, je combine expertise technique et vision créative pour créer des solutions digitales exceptionnelles.',
        description: 'Mon approche est orientée innovation, code élégant, et expérience utilisateur mémorable. J\'accompagne mes clients dans leur transformation digitale en alliant compétences techniques avancées et compréhension des enjeux créatifs.',
        years: 'Années d\'expérience',
        projects: 'Projets réalisés',
        formation: 'Formation',
        masterTitle: 'Master II en Informatique et télécommunication',
        masterSubtitle: 'Génie Logiciel et Intelligence Artificielle • 2021-2023',
        masterSchool: 'Institut Supérieur Polytechnique de Madagascar',
        languages: 'Langues',
        malagasy: 'Malgache',
        french: 'Français',
        english: 'Anglais',
        native: 'Langue maternelle',
        conversational: 'Conversationnel',
        levelB2: 'Niveau B2'
      },
      skills: {
        title: 'Compétences techniques',
        subtitle: 'Une expertise complète du développement web moderne et IA',
        frontend: 'Frontend',
        backend: 'Backend',
        //database: 'Base de données',
        AI:'Intelligence artificielle',
        cloud: 'Cloud & DevOps'
      },
      experience: {
        title: 'Expériences professionnelles',
        subtitle: 'Un parcours riche en projets variés et défis techniques'
      },
      projects: {
        title: 'Projets réalisés',
        subtitle: 'Quelques exemples de mes réalisations techniques',
        details: 'Détails'
      },
      services: {
        title: 'Services proposés',
        subtitle: 'Des solutions complètes pour vos projets digitaux',
        quote: 'Demander un devis',
        service1: {
          title: 'Développement Web Fullstack',
          description: 'Applications web sur mesure, sites vitrine et e-commerce, APIs et services backend.',
          price: 'Sur devis'
        },
        service2: {
          title: 'Consultation Technique',
          description: 'Audit de code et architecture, optimisation performance, conseils technologiques.',
          price: '50€/heure'
        },
        service3: {
          title: 'Transformation Digitale',
          description: 'Accompagnement projets digitaux, formation équipes, mise en place processus agiles.',
          price: 'Sur devis'
        }
      },
      contact: {
        title: 'Contactez-moi',
        subtitle: 'Prêt à démarrer votre projet ? Discutons-en !',
        info: 'Informations de contact',
        availability: 'Disponibilité',
        availabilityText: 'Je suis disponible pour des projets à distance et sur site. N\'hésitez pas à me contacter pour discuter de vos besoins.',
        form: {
          title: 'Envoyez-moi un message',
          firstName: 'Prénom',
          lastName: 'Nom',
          email: 'Email',
          subject: 'Sujet du projet',
          message: 'Décrivez votre projet...',
          send: 'Envoyer le message'
        }
      },
      footer: {
        description: 'Développeuse Web Fullstack, spécialisée dans l\'IA et la création d\'applications web modernes.',
        navigation: 'Navigation',
        contact: 'Contact',
        rights: 'Tous droits réservés.'
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        experience: 'Experience',
        projects: 'Projects',
        services: 'Services',
        contact: 'Contact',
        downloadCV: 'Download CV'
      },
      hero: {
        title: 'Tatiana',
        subtitle: 'AI Developer',
        description: 'I transform your ideas into modern, high-performance web applications, integrating automation, machine learning, and NLP with creativity and passion.',
        cta1: 'View my projects',
        cta2: 'Contact me',
        //location: 'Antananarivo, Madagascar',
        available: 'Available for projects'
      },
      about: {
        title: 'About me',
        subtitle: 'Passionate about web development for over 3 years, I combine technical expertise and creative vision to create exceptional digital solutions.',
        description: 'My approach is innovation-oriented, elegant code, and memorable user experience. I support my clients in their digital transformation by combining advanced technical skills and understanding of creative challenges.',
        years: 'Years of experience',
        projects: 'Completed projects',
        formation: 'Education',
        masterTitle: 'Master II in Information technology and telecommunications',
        masterSubtitle: 'Software Engineering and Artificial Intelligence • 2021-2023',
        masterSchool: 'Higher Polytechnic Institute of Madagascar',
        languages: 'Languages',
        malagasy: 'Malagasy',
        french: 'French',
        english: 'English',
        native: 'Native language',
        conversational: 'Conversational',
        levelB2: 'B2 Level'
      },
      skills: {
        title: 'Technical skills',
        subtitle: 'Complete expertise in modern web development and AI',
        frontend: 'Frontend',
        backend: 'Backend',
        //database: 'Database',
        AI: 'Artificial Intelligence',
        cloud: 'Cloud & DevOps'
      },
      experience: {
        title: 'Professional experience',
        subtitle: 'A rich journey with varied projects and technical challenges'
      },
      projects: {
        title: 'Completed projects',
        subtitle: 'Some examples of my technical achievements',
        details: 'Details'
      },
      services: {
        title: 'Services offered',
        subtitle: 'Complete solutions for your digital projects',
        quote: 'Request a quote',
        service1: {
          title: 'Fullstack Web Development',
          description: 'Custom web applications, showcase sites and e-commerce, APIs and backend services.',
          price: 'On quote'
        },
        service2: {
          title: 'Technical Consulting',
          description: 'Code and architecture audit, performance optimization, technological advice.',
          price: '50€/hour'
        },
        service3: {
          title: 'Digital Transformation',
          description: 'Digital project support, team training, agile process implementation.',
          price: 'On quote'
        }
      },
      contact: {
        title: 'Contact me',
        subtitle: 'Ready to start your project? Let\'s discuss!',
        info: 'Contact information',
        availability: 'Availability',
        availabilityText: 'I am available for remote and on-site projects. Feel free to contact me to discuss your needs.',
        form: {
          title: 'Send me a message',
          firstName: 'First Name',
          lastName: 'Last Name',
          email: 'Email',
          subject: 'Project Subject',
          message: 'Describe your project...',
          send: 'Send message'
        }
      },
      footer: {
        description: 'Fullstack Web Developer, specialized in creating modern web applications and AI.',
        navigation: 'Navigation',
        contact: 'Contact',
        rights: 'All rights reserved.'
      }
    }
  }

  const t = translations[language]

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'services', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const skills = {
    frontend: [
      { name: 'JavaScript/TypeScript', level: 4 },
      { name: 'React', level: 3 },
      { name: 'Next.js', level: 3 },
      { name: 'AlpineJS', level: 4 },
      { name: 'HTML5/CSS3', level: 4 },
      { name: 'TailwindCSS', level: 3 }
    ],
    backend: [
      { name: 'Node.js', level: 3 },
      { name: 'Express.js', level: 2 },
      { name: 'Laravel', level: 4 },
      { name: 'Livewire', level: 4 },
      { name: 'API REST', level: 3 }
    ],
    /**database: [
      { name: 'PostgreSQL', level: 3 },
      { name: 'MySQL', level: 4 },
      { name: language === 'fr' ? 'Conception de schémas' : 'Schema Design', level: 5 }
    ],**/
    AI: [
      { name: 'Python', level: 4 },
      { name: 'TensorFlow', level: 3 },
      { name: 'PyTorch', level: 3 },
      { name: 'Scikit-learn', level: 4 },
      { name: 'NLP', level: 4 },
      { name: 'Machine Learning', level: 4 }
    ],
    cloud: [
      { name: 'AWS (EC2, SES)', level: 4 },
      { name: 'GitLab CI/CD', level: 4 },
      { name: 'GitHub', level: 4 },
      { name: language === 'fr' ? 'Déploiement' : 'Deployment', level: 4 }
    ]
  }

  const experiences = [
    {
      title: language === 'fr' ? 'Développeuse Web Fullstack' : 'Fullstack Web Developer',
      company: "LUMIN'IA",
      period: language === 'fr' ? 'Janvier 2025 - Présent' : 'January 2025 - Present',
      description: language === 'fr' 
        ? 'Réalisation de projets web pour divers clients, mise en place de pipelines GitLab CI/CD, intégration AWS SES, gestion serveurs EC2.'
        : 'Web project development for various clients, GitLab CI/CD pipeline setup, AWS SES integration, EC2 server management.',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'AWS']
    },
    {
      title: language === 'fr' ? 'Product Owner & Coordinatrice Technique' : 'Product Owner & Technical Coordinator',
      company: "LUMIN'IA",
      period: language === 'fr' ? 'Juin 2024 - Présent' : 'June 2024 - Present',
      description: language === 'fr'
        ? 'Coordination équipe développement agile, gestion backlog produit, interface avec parties prenantes, amélioration continue.'
        : 'Agile development team coordination, product backlog management, stakeholder interface, continuous improvement.',
      technologies: ['Agile', 'Product Management', 'Team Leadership']
    },
    {
      title: language === 'fr' ? 'Développeuse Web Fullstack' : 'Fullstack Web Developer',
      company: 'FLOOWEDIT SARL',
      period: language === 'fr' ? 'Août 2023 - Juin 2024' : 'August 2023 - June 2024',
      description: language === 'fr'
        ? 'Création CMS personnalisé avec gestion permissions, développement modules dynamiques, schémas base de données relationnelles.'
        : 'Custom CMS creation with permission management, dynamic module development, relational database schemas.',
      technologies: ['Laravel', 'Alpine.js', 'Livewire', 'UIkit', 'MySQL']
    },
    {
      title: language === 'fr' ? 'Stagiaire Développeuse Web' : 'Web Developer Intern',
      company: 'TELMA MADAGASCAR',
      period: language === 'fr' ? 'Mai 2021 - Octobre 2021' : 'May 2021 - October 2021',
      description: language === 'fr'
        ? 'Conception API internes (commercial/reporting), création plateforme d\'enquête client.'
        : 'Internal API design (commercial/reporting), customer survey platform creation.',
      technologies: ['Laravel', 'Angular', 'Orchid']
    }
  ]

  const projects = [
    {
      title: language === 'fr' ? 'Site LUMIN\'IA' : 'LUMIN\'IA website',
      description: language === 'fr'
        ? 'Notre vitrine numérique. Explorez nos services, nos technolgies, et bien plus encore'
        : 'Our digital showcase. Explore our services, technologies, and much more.',
      technologies: ['React', 'Node.js', 'AWS', 'MySQL'],
      company: 'LUMIN\'IA'
    },
    {
      title: language === 'fr' ? 'Application immobilier intelligente' : 'Smart real estate application',
      description: language === 'fr'
        ? 'Application immobilière basée sur le traitement automatique de langage naturel et le machine learning.'
        : 'Real estate application based on automatic natural language processing and machine learning.',
      technologies: ['React', 'Python', 'FastAPI', 'Scikit-Learn', 'ML', 'NLP', 'postgreSql'],
      company: 'Recherche Personnelle'
    },
    {
      title: language === 'fr' ? 'Intelligence artificielle pour créer des datasets' : 'Artificial intelligence for creating datasets',
      description: language === 'fr'
        ? 'Un projet d’intelligence artificielle dédié à la génération automatique de datasets de qualité pour l’entraînement de modèles.'
        : 'An artificial intelligence project dedicated to the automatic generation of high-quality datasets for model training.',
      technologies: ['React', 'Python', 'FastAPI', 'Scikit-Learn', 'ML', 'NLP', 'postgreSql'],
      company: 'Recherche Personnelle'
    }
  ]

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 }
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' 
        : 'bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50'
    }`}>
      {/* Floating particles animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              isDarkMode ? 'bg-purple-400' : 'bg-purple-300'
            } opacity-20`}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-all duration-300 ${
          isDarkMode 
            ? 'bg-gray-900/80 border-purple-500/20' 
            : 'bg-white/80 border-purple-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className={`font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent`}
            >
              Tatiana FALIMANJATO
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: t.nav.home },
                { id: 'about', label: t.nav.about },
                { id: 'skills', label: t.nav.skills },
                { id: 'experience', label: t.nav.experience },
                { id: 'projects', label: t.nav.projects },
                { id: 'services', label: t.nav.services },
                { id: 'contact', label: t.nav.contact }
              ].map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-purple-600 ${
                    activeSection === item.id 
                      ? 'text-purple-600 font-bold' 
                      : isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* Language Toggle - Switch Moderne iOS */}
              <div className="flex items-center space-x-3">
                <span className={`text-sm transition-all duration-300 ${
                  language === 'fr' 
                    ? 'text-purple-600 dark:text-purple-400 font-medium' 
                    : isDarkMode ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  FR
                </span>
                <motion.div
                  className="relative w-12 h-6 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-full cursor-pointer shadow-inner"
                  onClick={toggleLanguage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute top-1 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-md"
                    animate={{ x: language === 'fr' ? 2 : 26 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </motion.div>
                <span className={`text-sm transition-all duration-300 ${
                  language === 'en' 
                    ? 'text-purple-600 dark:text-purple-400 font-medium' 
                    : isDarkMode ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  EN
                </span>
              </div>

              {/* Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' 
                    : 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                }`}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.button>

              <Button 
                onClick={() => scrollToSection('contact')}
                className="hidden md:flex bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
              >
                <Download className="w-4 h-4 mr-2" />
                {t.nav.downloadCV}
              </Button>

              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-t ${
                isDarkMode ? 'bg-gray-900 border-purple-500/20' : 'bg-white border-purple-200'
              }`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { id: 'home', label: t.nav.home },
                  { id: 'about', label: t.nav.about },
                  { id: 'skills', label: t.nav.skills },
                  { id: 'experience', label: t.nav.experience },
                  { id: 'projects', label: t.nav.projects },
                  { id: 'services', label: t.nav.services },
                  { id: 'contact', label: t.nav.contact }
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 10 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                      isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInLeft} className="space-y-4">
                <motion.h1 
                  className={`text-4xl md:text-6xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {t.hero.title}
                  <motion.span 
                    className="block bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent"
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    FALIMANJATO
                  </motion.span>
                </motion.h1>
                <motion.h2 
                  variants={fadeInLeft}
                  className={`text-xl md:text-2xl font-medium ${
                    isDarkMode ? 'text-purple-300' : 'text-purple-600'
                  }`}
                >
                  <motion.span
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block mr-2"
                  >
                    ✨
                  </motion.span>
                  {t.hero.subtitle}
                </motion.h2>
                <motion.p 
                  variants={fadeInLeft}
                  className={`text-lg max-w-2xl ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {t.hero.description}
                </motion.p>
              </motion.div>
              
              <motion.div 
                variants={fadeInLeft}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={() => scrollToSection('projects')}
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg"
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    {t.hero.cta1}
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    variant="outline"
                    size="lg"
                    className={`border-2 ${
                      isDarkMode 
                        ? 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900' 
                        : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                    }`}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    {t.hero.cta2}
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div 
                variants={fadeInLeft}
                className={`flex items-center space-x-6 text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {/* <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  <MapPin className="w-4 h-4 mr-2 text-purple-500" />
                  {t.hero.location}
                </motion.div> */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-green-500 rounded-full mr-2"
                  ></motion.div>
                  {t.hero.available}
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeInRight}
              className="flex justify-center lg:justify-end"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 opacity-20 blur-xl"
                ></motion.div>
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img 
                    src={tatianaProfile} 
                    alt="Tatiana FALIMANJATO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div 
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg"
                >
                  <Code className="w-8 h-8" />
                </motion.div>
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -left-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full shadow-lg"
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mr-2"
              >
                🚀
              </motion.span>
              {t.about.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className={`text-lg max-w-3xl mx-auto ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {t.about.subtitle}
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.p 
                variants={fadeInLeft}
                className={`text-lg leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {t.about.description}
              </motion.p>
              
              <motion.div 
                variants={fadeInLeft}
                className="grid grid-cols-2 gap-6"
              >
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="text-center p-6 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-lg shadow-lg"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
                  >
                    3+
                  </motion.div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {t.about.years}
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="text-center p-6 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 rounded-lg shadow-lg"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2"
                  >
                    10+
                  </motion.div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {t.about.projects}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={scaleIn}>
                <Card className={`hover:shadow-xl transition-all duration-300 ${
                  isDarkMode ? 'bg-gray-800/50 border-purple-500/20' : 'bg-white/80 border-purple-200'
                }`}>
                  <CardHeader>
                    <CardTitle className={`flex items-center ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <GraduationCap className="w-5 h-5 mr-2 text-purple-600" />
                      </motion.div>
                      {t.about.formation}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                          {t.about.masterTitle}
                        </h4>
                        <p className={`text-sm ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                          {t.about.masterSubtitle}
                        </p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {t.about.masterSchool}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className={`hover:shadow-xl transition-all duration-300 ${
                  isDarkMode ? 'bg-gray-800/50 border-purple-500/20' : 'bg-white/80 border-purple-200'
                }`}>
                  <CardHeader>
                    <CardTitle className={isDarkMode ? 'text-white' : 'text-gray-800'}>
                      {t.about.languages}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex justify-between"
                      >
                        <span className={isDarkMode ? 'text-white' : 'text-gray-800'}>
                          {t.about.malagasy}
                        </span>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {t.about.native}
                        </span>
                      </motion.div>
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex justify-between"
                      >
                        <span className={isDarkMode ? 'text-white' : 'text-gray-800'}>
                          {t.about.french}
                        </span>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {t.about.conversational}
                        </span>
                      </motion.div>
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex justify-between"
                      >
                        <span className={isDarkMode ? 'text-white' : 'text-gray-800'}>
                          {t.about.english}
                        </span>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {t.about.levelB2}
                        </span>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-purple-900/50 to-indigo-900/50' 
          : 'bg-gradient-to-br from-purple-50 to-indigo-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mr-2"
              >
                ⚡
              </motion.span>
              {t.skills.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {t.skills.subtitle}
            </motion.p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { key: 'frontend', icon: Code, color: 'from-blue-500 to-cyan-500' },
              { key: 'backend', icon: Database, color: 'from-green-500 to-emerald-500' },
              //{ key: 'database', icon: Database, color: 'from-purple-500 to-violet-500' },
              { key: 'AI', icon: BrainCircuit, color: 'from-purple-500 to-violet-500' },
              { key: 'cloud', icon: Cloud, color: 'from-orange-500 to-red-500' }
            ].map(({ key, icon: Icon, color }, index) => (
              <motion.div
                key={key}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                custom={index}
              >
                <Card className={`h-full hover:shadow-2xl transition-all duration-500 ${
                  isDarkMode ? 'bg-gray-800/50 border-purple-500/20' : 'bg-white/80 border-purple-200'
                }`}>
                  <CardHeader>
                    <CardTitle className={`flex items-center ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        className={`p-2 rounded-full bg-gradient-to-r ${color} mr-3`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      {t.skills[key]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {skills[key].map((skill, skillIndex) => (
                        <motion.div 
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: skillIndex * 0.1 }}
                        >
                          <div className="flex justify-between mb-1">
                            <span className={`text-sm font-medium ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {skill.name}
                            </span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0 }}
                                  whileInView={{ scale: 1 }}
                                  transition={{ delay: i * 0.1 }}
                                >
                                  <Star
                                    className={`w-3 h-3 ${
                                      i < skill.level 
                                        ? 'text-yellow-400 fill-current' 
                                        : isDarkMode ? 'text-gray-600' : 'text-gray-300'
                                    }`}
                                  />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mr-2"
              >
                💼
              </motion.span>
              {t.experience.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {t.experience.subtitle}
            </motion.p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
                custom={index}
              >
                <Card className={`hover:shadow-2xl transition-all duration-500 ${
                  isDarkMode ? 'bg-gray-800/50 border-purple-500/20' : 'bg-white/80 border-purple-200'
                }`}>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-6">
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="md:col-span-1"
                      >
                        <div className="text-sm text-purple-600 font-medium mb-1">{exp.period}</div>
                        <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {exp.company}
                        </div>
                      </motion.div>
                      <div className="md:col-span-3">
                        <h3 className={`text-xl font-semibold mb-3 ${
                          isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                          {exp.title}
                        </h3>
                        <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.1 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Badge 
                                variant="secondary" 
                                className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-indigo-900/50 to-purple-900/50' 
          : 'bg-gradient-to-br from-indigo-50 to-purple-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mr-2"
              >
                🎨
              </motion.span>
              {t.projects.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {t.projects.subtitle}
            </motion.p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                custom={index}
              >
                <Card className={`h-full hover:shadow-2xl transition-all duration-500 ${
                  isDarkMode ? 'bg-gray-800/50 border-purple-500/20' : 'bg-white/80 border-purple-200'
                }`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                        {project.title}
                      </CardTitle>
                      <motion.div whileHover={{ rotate: 10 }}>
                        <Badge 
                          variant="outline" 
                          className="border-purple-300 text-purple-600 dark:border-purple-500 dark:text-purple-400"
                        >
                          {project.company}
                        </Badge>
                      </motion.div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="text-xs bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-full border-purple-300 text-purple-600 hover:bg-purple-600 hover:text-white dark:border-purple-500 dark:text-purple-400"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t.projects.details}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mr-2"
              >
                🛠️
              </motion.span>
              {t.services.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {t.services.subtitle}
            </motion.p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                ...t.services.service1,
                icon: <Code className="w-8 h-8" />,
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                ...t.services.service2,
                icon: <Users className="w-8 h-8" />,
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                ...t.services.service3,
                icon: <Cloud className="w-8 h-8" />,
                gradient: 'from-orange-500 to-red-500'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                custom={index}
              >
                <Card className={`text-center h-full hover:shadow-2xl transition-all duration-500 ${
                  isDarkMode ? 'bg-gray-800/50 border-purple-500/20' : 'bg-white/80 border-purple-200'
                }`}>
                  <CardHeader>
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex justify-center mb-4"
                    >
                      <div className={`p-3 rounded-full bg-gradient-to-r ${service.gradient} text-white`}>
                        {service.icon}
                      </div>
                    </motion.div>
                    <CardTitle className={isDarkMode ? 'text-white' : 'text-gray-800'}>
                      {service.title}
                    </CardTitle>
                    <CardDescription className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
                    >
                      {service.price}
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                        <Zap className="w-4 h-4 mr-2" />
                        {t.services.quote}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50' 
          : 'bg-gradient-to-br from-purple-50 to-pink-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mr-2"
              >
                📞
              </motion.span>
              {t.contact.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {t.contact.subtitle}
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInLeft}>
                <h3 className={`text-xl font-semibold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {t.contact.info}
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, text: 'tatiana.fali20@gmail.com', color: 'text-blue-500' },
                    { icon: Phone, text: '+261 34 79 073 01', color: 'text-green-500' },
                    { icon: MapPin, text: t.hero.location, color: 'text-purple-500' }
                  ].map(({ icon: Icon, text, color }, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        <Icon className={`w-5 h-5 mr-3 ${color}`} />
                      </motion.div>
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInLeft}>
                <h3 className={`text-xl font-semibold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {t.contact.availability}
                </h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {t.contact.availabilityText}
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <Card className={`hover:shadow-2xl transition-all duration-500 ${
                isDarkMode ? 'bg-gray-800/50 border-purple-500/20' : 'bg-white/80 border-purple-200'
              }`}>
                <CardHeader>
                  <CardTitle className={`flex items-center ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="mr-2"
                    >
                      <Coffee className="w-5 h-5 text-purple-600" />
                    </motion.div>
                    {t.contact.form.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Input 
                          placeholder={t.contact.form.firstName}
                          className={`transition-all duration-300 ${
                            isDarkMode 
                              ? 'bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400' 
                              : 'bg-white/80 border-purple-200 focus:border-purple-400'
                          }`}
                        />
                      </motion.div>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Input 
                          placeholder={t.contact.form.lastName}
                          className={`transition-all duration-300 ${
                            isDarkMode 
                              ? 'bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400' 
                              : 'bg-white/80 border-purple-200 focus:border-purple-400'
                          }`}
                        />
                      </motion.div>
                    </div>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input 
                        placeholder={t.contact.form.email} 
                        type="email"
                        className={`transition-all duration-300 ${
                          isDarkMode 
                            ? 'bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400' 
                            : 'bg-white/80 border-purple-200 focus:border-purple-400'
                        }`}
                      />
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input 
                        placeholder={t.contact.form.subject}
                        className={`transition-all duration-300 ${
                          isDarkMode 
                            ? 'bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400' 
                            : 'bg-white/80 border-purple-200 focus:border-purple-400'
                        }`}
                      />
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Textarea 
                        placeholder={t.contact.form.message} 
                        rows={4}
                        className={`transition-all duration-300 ${
                          isDarkMode 
                            ? 'bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400' 
                            : 'bg-white/80 border-purple-200 focus:border-purple-400'
                        }`}
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="mr-2"
                        >
                          <Heart className="w-4 h-4" />
                        </motion.div>
                        {t.contact.form.send}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-800'
      } text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tatiana FALIMANJATO
              </h3>
              <p className="text-gray-300">
                {t.footer.description}
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h4 className="font-semibold mb-4">{t.footer.navigation}</h4>
              <div className="space-y-2">
                {[
                  { id: 'about', label: t.nav.about },
                  { id: 'skills', label: t.nav.skills },
                  { id: 'experience', label: t.nav.experience },
                  { id: 'projects', label: t.nav.projects },
                  { id: 'contact', label: t.nav.contact }
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
              <div className="space-y-2 text-gray-300">
                <p>tatiana.fali20@gmail.com</p>
                <p>+261 34 79 073 01</p>
                <p>{t.hero.location}</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
          >
            <p>&copy; 2025 Tatiana FALIMANJATO. {t.footer.rights}</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default App
