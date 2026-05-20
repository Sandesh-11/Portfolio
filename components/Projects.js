import styles from '@/styles/projects.module.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with Next.js and Node.js',
      tech: ['Next.js', 'React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Social Media App',
      description: 'A real-time social media application with messaging and notifications',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#'
    },
    {
      id: 3,
      title: 'Task Management Tool',
      description: 'Collaborative task management system with real-time updates',
      tech: ['Next.js', 'PostgreSQL', 'Prisma'],
      link: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasting',
      tech: ['React', 'API', 'Chart.js'],
      link: '#'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Headless CMS blog platform with markdown support',
      tech: ['Next.js', 'Contentful', 'GraphQL'],
      link: '#'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website showcasing projects and skills',
      tech: ['Next.js', 'CSS', 'JavaScript'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>
        <div className={styles.grid}>
          {projects.map(project => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tech}>
                  {project.tech.map((tech, index) => (
                    <span key={index} className={styles.tag}>{tech}</span>
                  ))}
                </div>
              </div>
              <a href={project.link} className={styles.link}>View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}