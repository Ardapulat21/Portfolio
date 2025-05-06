const projects = [
  {
    id: 1,
    title: "Motion Detector",
    description:
      "The motion detector is designed to highlight moving objects in a video. It starts by decoding the video, which can come in various file formats. After decoding, it processes each frame to detect any movement. Once a moving object is identified, the system highlights it and then renders the processed frames in the viewer, providing a clear visualization of the detected motion within the video.",
    image: "/projects/MotionDetector.gif",
    tags: [".NET", "C#", "WPF","FFMPEG"],
    url: "https://github.com/Ardapulat21/MotionDetector",
  },
  {
    id: 2,
    title: "PullAt",
    description:
      "The Pullat project is a secure and scalable ASP.NET Core web application that focuses on delivering authenticated user interactions through a decoupled architecture. It relies on an external service named REST to handle all authentication-related tasks such as user login, registration, and JWT token generation. Upon successful login, Pullat receives a token from the REST service, which it then uses to authorize user actions and access protected API endpoints. This separation of concerns allows Pullat to remain focused on its core functionality while ensuring clean, maintainable code and centralized identity management.",
    image: "/projects/pullat.png",
    tags: ["ASP.NET Core", "C#", "HTML/CSS"],
    url: "https://github.com/Ardapulat21/PullAt",
  },
];

const ProjectsSection: React.FC = () => {
  const navigateToGithub = (url?: string) => {
    const targetUrl = url ?? "https://github.com/Ardapulat21";
    window.open(targetUrl, "_blank");
  };
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.Each project was carefully crafted
          with attention to detail,performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover hover:cursor-pointer"
              onClick={() => navigateToGithub(project.url)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="px-6 pt-3">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="px-2 text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="px-3 py-2 cosmic-button w-fit mx-auto mt-5"
          onClick={() => navigateToGithub()}
        >
          Check My Github
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
