import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, Linkedin, Mail, Code, User, Send, ExternalLink } from 'lucide-react';

// --- Interfaces & Datos (TypeScript) ---

import { 
  SiReact, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiVite,
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiJsonwebtokens, SiJira,
  SiGithub, SiPostman, SiDocker
} from 'react-icons/si';

// Definimos la estructura de una Skill
interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string; // Color hexadecimal oficial para el icono
}

type SkillCategory = 'frontend' | 'backend' | 'tools';

// Los datos actualizados con iconos y colores
const skillsData: Record<SkillCategory, Skill[]> = {
  frontend: [
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "Vite", icon: <SiVite />, color: "#646CFF" },
  ],
  backend: [
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Express", icon: <SiExpress />, color: "#000000" }, // Express es blanco/negro
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "JWT Auth", icon: <SiJsonwebtokens />, color: "#D63AFF" },
  ],
  tools: [
    { name: "GitHub", icon: <SiGithub />, color: "#181717" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    { name: "Jira", icon: <SiJira />, color: "#0052CC" },
  ]
};

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  repoLink: string;
  demoLink: string;
  image: string;
}



const projectsData: Project[] = [
  {
    id: 1,
    title: "Plataforma de reservas de canchas - API",
    description: " Aplicación web para reservar canchas deportivas, gestion de usuarios, canchas",
    tags: ["Node.js", "TypeScript", "SQLite", "Express", "JWT"],
    repoLink: "https://github.com/AndyGar04/Proyecto-Final-Tup-BackEnd",
    demoLink: "https://proyecto-final-tup-back-end.vercel.app/",
    image: "/SportManagerBack.jpg"
  },
  {
    id: 2,
    title: "Plataforma de reservas de canchas - Frontend",
    description: "Interfaz web para la plataforma de reservas de canchas, con autenticación y gestión de reservas.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    repoLink: "https://github.com/AndyGar04/Proyecto-Final-FrontEnd",
    demoLink: "https://proyecto-final-frontend-one-beta.vercel.app/presentacion",
    image: "/SportManager.jpg"
  },
  {
    id: 3,
    title: "Sistema de gestion de inventarios - Proyecto FullStack",
    description: "Aplicación web para gestionar inventarios, con funcionalidades de CRUD y panel de administración.",
    tags: ["React", "JavaScript", "Express", "Nginx", "PostgreSQL", "Docker"],
    repoLink: "https://github.com/AndyGar04/ProgramacionIII/tree/main/Proyecto-Final",
    demoLink: "#",
    image: "/GestionDeStock.jpg"
  }
];

type Theme = 'light' | 'dark';

// --- Componente Principal ---

const App: React.FC = () => {
  // Estado del tema
  const [theme, setTheme] = useState<Theme>('dark');
  const [activeTab, setActiveTab] = useState<SkillCategory>('frontend');

  // Efecto para aplicar la clase 'dark' al HTML
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Componente Navbar interno
  const Navbar = () => (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 font-mono tracking-tight">
          &lt;Andy Garcia/&gt;
        </h1>
        
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-slate-600 dark:text-slate-300 font-medium text-sm">
            {['Inicio', 'Sobre mí', 'Proyectos', 'Contacto'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 transition-transform hover:scale-110 active:scale-95 ring-1 ring-slate-200 dark:ring-slate-700"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans text-slate-900 dark:text-slate-100 selection:bg-blue-500/30">
      <Navbar />

      <section id="inicio" className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-screen bg-blue-500/10 rounded-bl-[100px] -z-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full -z-10 blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-center md:text-left">
            
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-2 border border-blue-200 dark:border-blue-800">
              ¡Bienvenidos a mi Portafolio!
            </div>
            
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Andy Garcia
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                Desarrollador Full Stack
              </h2>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Programando y experimentando desde Bahía Blanca, Argentina. Especializado en aplicaciones web funcionales y escalables.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <a href="#contacto" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1">
                Contactame <Send size={18} />
              </a>
              <a href="#proyectos" className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-full font-bold transition-all">
                Ver proyectos <ExternalLink size={18} />
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-6 pt-4">
              <a href="https://github.com/AndyGar04" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/andy-garcia-programador/" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
                <Linkedin size={28} />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            
            <div className="absolute bottom-10 right-0 md:-right-4 p-4 bg-white dark:bg-slate-800 rounded-full shadow-xl animate-pulse z-20 border border-slate-100 dark:border-slate-700">
                <Code size={28} className="text-blue-500" />
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 pb-8 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-700 max-w-sm w-full transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-200 dark:bg-slate-900 relative group">
                <img 
                  src="/FotoGit.jpg" 
                  alt="Andy Garcia" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Programador</h3>
                <p className="text-blue-500 font-medium text-sm">Codeando, sin aflojar!</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="sobre-mí" className="py-24 bg-white dark:bg-slate-900/50 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <User className="text-blue-600 dark:text-blue-400" size={28} />
            <h2 className="text-3xl font-bold">Sobre mí</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              <p>
                Soy un desarrollador buscando mejor día a día, terminando este 2025 la carrera de Tecnico Universitario en Programacion, buscando mi primer experiencia laboral.
              </p>
              <p>
                Me considero atento, responsable y cuento con la capacidad de resolver problemas de desarrollo de software tanto en el frontend como en el backend. 
              </p>
              <p>
                Preparado para crear soluciones eficientes y escalables que brinden una experiencia de usuario excepcional.
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-slate-700">
              
              <h3 className="font-semibold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                <Code size={20} className="text-blue-500" />
                Stack Tecnológico
              </h3>

              <div className="flex gap-2 p-1 bg-slate-200 dark:bg-slate-900/50 rounded-lg mb-6 overflow-x-auto">
                {(['frontend', 'backend', 'tools'] as SkillCategory[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`
                      flex-1 px-4 py-2 rounded-md text-sm font-semibold capitalize transition-all duration-300
                      ${activeTab === tab 
                        ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm' 
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-300/50 dark:hover:bg-slate-800/50'}
                    `}
                  >
                    {tab === 'tools' ? 'Herramientas' : tab}
                  </button>
                ))}
              </div>

              <div className="min-h-[120px]">
                <div className="flex flex-wrap gap-3 animate-fadeIn">
                  {skillsData[activeTab].map((skill) => (
                    <div 
                      key={skill.name} 
                      className="group flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 cursor-default"
                    >
                      <span 
                        className="text-lg transition-transform group-hover:scale-110" 
                        style={{ color: skill.color }} // <--- ACÁ ESTÁ LA MAGIA DEL COLOR
                      >
                        {skill.icon}
                      </span>
                      
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <Code className="text-blue-600 dark:text-blue-400" size={28} />
            <h2 className="text-3xl font-bold">Proyectos Destacados</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <article key={project.id} className="...">
                <div className="h-48 bg-slate-100 dark:bg-slate-800 relative overflow-hidden border-b border-slate-100 dark:border-slate-800">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <a href={project.repoLink} className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Github size={18}/> GitHub
                    </a>
                    <a href={project.demoLink} className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-auto">
                      Demo <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-24 bg-white dark:bg-slate-900/50 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400 mb-6">
            <Mail size={32} />
          </div>
          <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Contacto</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Estoy disponible para nuevos desafíos ¡Contactame y coordinemos!
          </p>
          
          <a 
            href="mailto:tuemail@ejemplo.com" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1"
          >
            <Send size={20} />
            Enviar Correo
          </a>

          <div className="flex justify-center gap-8 mt-16">
            <a href="https://www.linkedin.com/in/andy-garcia-programador/" className="text-slate-400 hover:text-[#0077b5] transition-colors transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com/AndyGar04" className="text-slate-400 hover:text-black dark:hover:text-white transition-colors transform hover:scale-110">
              <Github size={28} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
        <p className="text-slate-500 text-sm">
          © 2026, Andy Garcia. Tecnico en Programacion. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default App;