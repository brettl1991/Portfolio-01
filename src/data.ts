export const dataText = {
  card: {
    title: "Agnes Brettl",
    subtitle: ["Frontend Developer", "Freelancer", "Web Designer"],
    buttonList: ["download cv", "contact me"],
  },

  about: {
    head: {
      title: "About Me",
      text: "Hi! I’m Agnes Brettl, a creative self-taught organized young professional, with a desire to learn and grow in a collaborative team environment. Let's have a chat!",
      residence: "uk",
      address: "Manchester, Salford",
    },
    services: [
      {
        service_title: "Web Development",
        service:
          "Modern and mobile-ready website that will help you grow your business.",
      },
      {
        service_title: "Web Design",
        service_text:
          "To get results helping you design simple, usebale websites.",
      },
      {
        service_title: "Video Editing",
        service_text:
          "Eye catching videos using modern technologies which will represent you.",
      },
      {
        service_title: "Photo Editing",
        service_text: "Helps make you master your photography skills.",
      },
    ],
    testimonials: {
      testimonial_text:
        "Agnes is an awesome developer, I am really enjoying working with her and build outstanding frontend projects.",
      testimonial_name: "Istvan Acs",
      testimonial_job: "Senior Frontend Developer",
    },
  },
  resume: {
    experience: {
      date: "2022 - Present",
      title: "Junior Frontend Developer",
      place: "WoW DoP Ltd",
      description: [
        "Develop mobile, tablet, and desktop user interfaces using dynamic features.",
        "tune up the frontend by creating reusable components",
        "Design and develop web applications",
        "Analyze user needs to determine technical requirements",
        "Assure that all user input is validated",
      ],
    },
    education: {
      type: "Assure that all user input is validated",
      place: "University of Dunaújváros, Hungary",
      date: "09/2011 - 02/2014",
    },
    technologies: [
      {
        title: "Frontend",
        skills_list: [
          "HTML",
          "JavaScript",
          "React Js",
          "TypeScript",
          "Next Js",
          "Remix",
        ],
      },
      {
        title: "Design",
        skills_list: ["CSS", "SASS", "Styled-components", "PhotoShop", "Figma"],
      },
      {
        title: "Backend",
        skills_list: [],
      },
    ],
  },
  projects: {
    used_technologies: [
      "HTML/CSS/SASS",
      "Remix",
      "JavaScript",
      "NextJs",
      "ReactJs",
      "Styled components",
    ],
    project_one: {
      title: "Games Web App",
      description: "Pupolar games website application",
    },
    project_two: {
      title: "Music player website",
      description: "Music player webb app using React Js",
    },
    project_three: {
      title: "Forkify recipe webb app",
      description: "A recipe finder webb app",
    },
  },

  blog: {
    title: "This is my blog post title",
    description: "This is my blog post description",
  },

  contact: {
    information: {
      title: "Get in Touch",
      email: "example@gmail.com",
      address: "Manchester, UK",
    },
    message: {
      title: "Send me a message",
      button_text: "Send message",
    },
  },
};

export interface DataText {
  card: Card;
  about: About;
  resume: Resume;
  projects: Projects;
  blog: ProjectOneOrProjectTwoOrProjectThreeOrBlog;
  contact: Contact;
}
export interface Card {
  title: string;
  subtitle?: string[] | null;
  buttonList?: string[] | null;
}
export interface About {
  head: Head;
  services?: ServicesEntity[] | null;
  testimonials: Testimonials;
}
export interface Head {
  title: string;
  text: string;
  residence: string;
  address: string;
}
export interface ServicesEntity {
  service_title: string;
  service?: string | null;
  service_text?: string | null;
}
export interface Testimonials {
  testimonial_text: string;
  testimonial_name: string;
  testimonial_job: string;
}
export interface Resume {
  experience: Experience;
  education: Education;
  technologies?: TechnologiesEntity[] | null;
}
export interface Experience {
  date: string;
  title: string;
  place: string;
  description?: string[] | null;
}
export interface Education {
  type: string;
  place: string;
  date: string;
}
export interface TechnologiesEntity {
  title: string;
  skills_list?: (string | null)[] | null;
}
export interface Projects {
  used_technologies?: string[] | null;
  project_one: ProjectOneOrProjectTwoOrProjectThreeOrBlog;
  project_two: ProjectOneOrProjectTwoOrProjectThreeOrBlog;
  project_three: ProjectOneOrProjectTwoOrProjectThreeOrBlog;
}
export interface ProjectOneOrProjectTwoOrProjectThreeOrBlog {
  title: string;
  description: string;
}
export interface Contact {
  information: Information;
  message: Message;
}
export interface Information {
  title: string;
  email: string;
  address: string;
}
export interface Message {
  title: string;
  button_text: string;
}
