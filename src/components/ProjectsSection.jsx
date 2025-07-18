import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id: 1,
        title: "To-Do List",
        description : "A to-do list landing page using React and Tailwindcss",
        image : "/projects/3be28dfb26102d171ef5cfed2bd153fc.png",
        tags: ["React" , "TailwindCSS"],
        demoUrl: "#",
        gitHubUrl: "#",
    },
    {
        id: 2,
        title: "Minimal-Room-SetUp",
        description : "A minimal looking room with portraits with showcase lights",
        image : "/projects/3528fb3ba56f7bdd1056a27fa4d92867.png",
        tags: ["React" , "TailwindCSS"],
        demoUrl: "#",
        gitHubUrl: "#",
    },
    {
        id: 3,
        title: "Small-Cozy-Room",
        description : "A small jam packed room with cozy vibes",
        image : "/projects/3bfb98119a67d043f33197842e15785d.png",
        tags: ["React" , "TailwindCSS"],
        demoUrl: "#",
        gitHubUrl: "#",
    },
]

const ProjectsSection = () => {


  return (
    <section id='projects' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                Featured 
                <span className='text-primary'> Projects</span></h2>
                <p className='text-center tex-muted-foreground mb-12 max-w-5xl mx-auto'>
                    Here are some of my recent projects. Each project was carefully 
                    crafted with attention to detail ,performance , and user experience
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project ,key) =>(
                        <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>

                            <div className='h-48 overflow-hidden'>
                                <img src={project.image} 
                                alt={project.title} 
                                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                            </div>

                            <div className='p-6'>
                                <div className='flex flex-wrap gap-2 mv-4'>
                                    {project.tags.map((tag) => (
                                        <span className='px-2 py-1 text-xs border font-medium rounded-full bg-primary/20 text-secondary-foreground'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            </div>
                                    <h3 className='text-xl font-semibold mb-2'> {project.title}</h3>
                                    <p className='text-muted-foreground text-sm mb-4 '>{project.description}</p>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex space-x-3'>
                                            <a href={project.demoUrl} 
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300 '>
                                                <ExternalLink/>
                                            </a>    
                                            <a href={project.gitHubUrl}
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300 '>
                                                <Github/>
                                            </a>
                                        </div>
                                    </div>
                        </div>
                    ))}
                </div>
                <div className='text-center mt-12 '>
                    <a className='cosmic-button w-fit flex items-center mx-auto gap-2' 
                    href='https://github.com/kanishkzzz'
                    target='_blank'>
                        Check My GitHub <ArrowRight size={20}/>
                    </a>
                </div>
        </div>
    </section>
  )
}

export default ProjectsSection