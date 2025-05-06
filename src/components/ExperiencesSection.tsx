import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    companyName: "BIAnalytics",
    department: "Full Stack Developer",
    type: "Internship",
    description: [
      "• Worked on a customized version of the open-source Apache Superset reporting platform.",
      "• Developed new features and enhancements on the frontend using TypeScript,ensuring seamless integration with the existing system.",
      "• Implemented backend modifications using Python, connecting frontend components with server-side functionalities.",
      "• Contributed to improving reporting capabilities and user experience by tailoring open-source solutions to project-specific needs.",
    ],
    technologies: ["Typescript", "Python"],
    startDate: "01/2025",
    endDate: "05/2025",
  },
  {
    id: 2,
    companyName: "EKSIM",
    department: "Full stack developer",
    type: "Internship",
    description: [
      "• Developed and maintained web applications using ASP.NET MVC, enhancing user experience and functionality.",
      "• Designed and implemented RESTful APIs using ASP.NET to facilitate seamless data communication between the client and server",
      "• Implemented authentication and authorization features to ensure secure access to applications, improving overall security protocols.",
    ],
    technologies: ["ASPNET", "C#"],
    startDate: "07/2024",
    endDate: "09/2024",
  },
  {
    id: 3,
    companyName: "Matek",
    department: "Full Stack Developer",
    type: "Full time",
    description: [
      "• Developed desktop applications using WPF, following the MVVM architecture for clean and maintainable code.",
      "• Focused on image and video processing, building features that handled real-time visual analysis",
      "• Integrated FFMPEG to perform operations like frame extraction, conversion, and media manipulation.",
      " •Applied asynchronous programming techniques to ensure smooth UI.",
    ],
    technologies: [".NET", "C#", "C", "WPF", " FFMPEG"],
    startDate: "01/2023",
    endDate: "07/2024",
  },
];
const ExperiencesSection = () => {
  return (
    <section id="experiences" className="container w-full">
      <div className="text-3xl font-semibold mb-5">
        <p>
          Job<span className="text-primary"> Experiences</span>
        </p>
      </div>
      <div className="container flex flex-row">
        <div className="flex flex-col items-center mr-10">
          <div className="w-4 h-4 rounded-full border-1 border-[#deeae8]"></div>
          <div className="w-0.5 h-full bg-[#daaae8]"></div>
          <div className="w-4 h-4 rounded-full border-1 border-[#deeae8]"></div>
        </div>
        <div className="w-full">
          {experiences.map((experience) => (
            <div className="flex flex-row bg-primary/10 w-full rounded-md p-3 mb-2">
              <div className="flex items-center justify-center h-12 w-12 p-3 mr-3 rounded-full bg-white ">
                <Briefcase className="text-primary" />
              </div>
              <div className="flex flex-col justify-start items-start w-full text-sm overflow-hidden">
                <div className="flex items-end flex-row justify-between w-full font-semibold pb-3">
                  <p className="font-bold">{experience.companyName}</p>
                  <p>
                    {experience.startDate} - {experience.endDate}
                  </p>
                </div>
                <p>{experience.department}</p>
                {experience.description.map((desc) => (
                  <p>{desc}</p>
                ))}
                <div className="flex flex-row gap-2 mt-2">
                  {experience.technologies.map((tech) => (
                    <div className="border-1">
                      <p className="overflow-hidden p-2">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
