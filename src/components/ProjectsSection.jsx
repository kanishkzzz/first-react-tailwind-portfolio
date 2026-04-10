import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
  {
    id: 1,
    title: 'First React Tailwind Portfolio',
    description:
      'My personal developer portfolio built with React and Tailwind CSS with a modern cosmic UI and smooth section navigation.',
    image: '/projects/3be28dfb26102d171ef5cfed2bd153fc.png',
    tags: ['React', 'TailwindCSS', 'Vite'],
    demoUrl: '#',
    gitHubUrl: 'https://github.com/kanishkzzz/first-react-tailwind-portfolio',
  },
  {
    id: 2,
    title: 'Billcious',
    description:
      'A group expense management app to track shared expenses, balances, and spending insights across members.',
    image: '/projects/image.png',
    tags: ['React', 'Dashboard', 'Fintech'],
    demoUrl: '#',
    gitHubUrl: 'https://github.com/kanishkzzz/Billcious',
  },
  {
    id: 3,
    title: 'Task Management App',
    description:
      'A productivity-focused task manager for organizing work, managing priorities, and tracking progress efficiently.',
    image: 'https://opengraph.githubassets.com/1/kanishkzzz/Task-Management-App',
    tags: ['Productivity', 'React', 'App'],
    demoUrl: '#',
    gitHubUrl: 'https://github.com/kanishkzzz/Task-Management-App',
  },
  {
    id: 4,
    title: 'Hybrid Search Dashboard',
    description:
      'A dashboard interface for exploring and comparing hybrid search experiences and results in a clean UI.',
    image: 'https://opengraph.githubassets.com/1/kanishkzzz/hybrid-search-dashboard',
    tags: ['Dashboard', 'Search', 'UI'],
    demoUrl: '#',
    gitHubUrl: 'https://github.com/kanishkzzz/hybrid-search-dashboard',
  },
  {
    id: 5,
    title: 'FoodInt',
    description:
      'A food-focused application concept for browsing and interacting with food-related content and workflows.',
    image: 'https://opengraph.githubassets.com/1/kanishkzzz/FoodInt',
    tags: ['Food Tech', 'Web App'],
    demoUrl: '#',
    gitHubUrl: 'https://github.com/kanishkzzz/FoodInt',
  },
  {
    id: 6,
    title: 'WeatherApp',
    description:
      'A weather application that provides quick conditions and forecast information in a simple user-friendly layout.',
    image: 'https://opengraph.githubassets.com/1/kanishkzzz/WeatherApp',
    tags: ['Weather', 'API', 'Frontend'],
    demoUrl: '#',
    gitHubUrl: 'https://github.com/kanishkzzz/WeatherApp',
  },
]

const ProjectsSection = () => {
  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-6xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Featured
          <span className='text-primary'> Projects</span>
        </h2>
        <p className='text-center tex-muted-foreground mb-12 max-w-5xl mx-auto'>
          Here are some of my real projects from GitHub that showcase my frontend and
          product-building work.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'
            >
              <div className='h-48 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </div>

              <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className='px-2 py-1 text-xs border font-medium rounded-full bg-primary/20 text-secondary-foreground'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-3'>
                    <a
                      href={project.demoUrl}
                      className='text-foreground/80 hover:text-primary transition-colors duration-300'
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink />
                    </a>
                    <a
                      href={project.gitHubUrl}
                      target='_blank'
                      rel='noreferrer'
                      className='text-foreground/80 hover:text-primary transition-colors duration-300'
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <a
            className='cosmic-button w-fit flex items-center mx-auto gap-2'
            href='https://github.com/kanishkzzz'
            target='_blank'
            rel='noreferrer'
          >
            Check My GitHub <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
