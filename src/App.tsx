import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, Linkedin, Mail, Code, User, Send, ExternalLink } from 'lucide-react';

// --- Interfaces & Datos (TypeScript) ---

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  repoLink: string;
  demoLink: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "Panel de administración con gráficos en tiempo real y gestión de inventario.",
    tags: ["React", "TypeScript", "Tailwind"],
    repoLink: "#",
    demoLink: "#"
  },
  {
    id: 2,
    title: "Task Manager API",
    description: "Backend RESTful para gestión de tareas con autenticación JWT.",
    tags: ["Node.js", "Express", "MongoDB"],
    repoLink: "#",
    demoLink: "#"
  },
  {
    id: 3,
    title: "Portfolio v1",
    description: "Mi sitio personal anterior enfocado en performance.",
    tags: ["HTML/CSS", "JavaScript"],
    repoLink: "#",
    demoLink: "#"
  }
];

type Theme = 'light' | 'dark';

// --- Componente Principal ---

const App: React.FC = () => {
  // Estado del tema
  const [theme, setTheme] = useState<Theme>('dark');

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
          &lt;Dev /&gt;
        </h1>
        
        <div className="flex items-center gap-6">
          {/* Menú Desktop */}
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
          
          {/* Botón Tema */}
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

      {/* SECCIÓN: INICIO */}
      <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
        
        <div className="text-center px-4 max-w-4xl mx-auto z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide mb-6 border border-blue-200 dark:border-blue-800/50">
            Full Stack Developer
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">
            Creando soluciones <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              digitales modernas
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Especializado en transformar ideas complejas en código limpio, escalable y eficiente.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#proyectos" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-0.5">
              Ver Proyectos
            </a>
            <a href="#contacto" className="px-8 py-3.5 bg-white dark:bg-transparent border border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 text-slate-700 dark:text-slate-300 rounded-full font-semibold transition-all hover:bg-slate-50 dark:hover:bg-slate-800">
              Contactar
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN: SOBRE MÍ */}
      <section id="sobre-mí" className="py-24 bg-white dark:bg-slate-900/50 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <User className="text-blue-600 dark:text-blue-400" size={28} />
            <h2 className="text-3xl font-bold">Sobre mí</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              <p>
                ¡Hola! Soy un desarrollador apasionado por la tecnología y la innovación. Me enfoco en el ecosistema de JavaScript, buscando siempre las mejores prácticas.
              </p>
              <p>
                Disfruto resolviendo problemas de lógica y optimizando la experiencia de usuario. Siempre estoy aprendiendo algo nuevo.
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-700">
              <h3 className="font-semibold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                <Code size={20} className="text-blue-500" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'React', 'Node.js', 'Next.js', 'Tailwind', 'Git', 'SQL'].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-1.5 bg-white dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: PROYECTOS */}
      <section id="proyectos" className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <Code className="text-blue-600 dark:text-blue-400" size={28} />
            <h2 className="text-3xl font-bold">Proyectos Destacados</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <article key={project.id} className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full">
                <div className="h-48 bg-slate-100 dark:bg-slate-800 relative overflow-hidden flex items-center justify-center border-b border-slate-100 dark:border-slate-800">
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300" />
                  <span className="text-slate-400 dark:text-slate-600 font-medium">Imagen del Proyecto</span>
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

      {/* SECCIÓN: CONTACTO */}
      <section id="contacto" className="py-24 bg-white dark:bg-slate-900/50 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400 mb-6">
            <Mail size={32} />
          </div>
          <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">¿Hablamos?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Estoy disponible para nuevos desafíos. Si tienes una idea o proyecto, ¡me encantaría escucharla!
          </p>
          
          <a 
            href="mailto:tuemail@ejemplo.com" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1"
          >
            <Send size={20} />
            Enviar Correo
          </a>

          <div className="flex justify-center gap-8 mt-16">
            <a href="#" className="text-slate-400 hover:text-[#0077b5] transition-colors transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-slate-400 hover:text-black dark:hover:text-white transition-colors transform hover:scale-110">
              <Github size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
        <p className="text-slate-500 text-sm">
          © 2025. Hecho con React, TypeScript & Tailwind.
        </p>
      </footer>
    </div>
  );
};

export default App;