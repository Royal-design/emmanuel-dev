export const education = [
  {
    degree: "Bachelor of Science in Engineering Physics",
    school: "Obafemi Awolowo University",
    duration: "2018 - 2023",
    details: [
      "Graduated with Upper Second Class Honors (2:1)",
      "Specialized in applied physics, polymers, and electronics",
      "Active member of the Engineering Students Association with participation in tech workshops and coding projects",
    ],
  },
  {
    degree: "Professional Certification in Frontend Development",
    school: "Udemy · Jonas Schmedtmann . Dave Gray",
    duration: "2021-2024",
    details: [
      "Completed a comprehensive curriculum covering HTML, CSS, JavaScript, and React",
      "Built 10+ responsive web applications",
      "Earned certifications in Responsive Web Design and JavaScript Algorithms",
    ],
  },
];

export const experiences = [
  {
    title: "Frontend AI Engineer",
    company: "Cartolinks Solutions Limited",
    duration: "September 2025 - present",
    details: [
      "Led frontend development for Soloa AI, building responsive AI-driven interfaces with Next.js",
      "Engineered AI features and integrations, focusing on real-time data and performance optimization",
      "Translated Figma designs into polished, interactive UIs",
      "Managed deployments and cloud resources to ensure seamless production delivery",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Vatebra Limited",
    duration: "June 2025 - present",
    details: [
      "Designed and deployed the EFCC Scholar Room Dashboard with role-based access for students, lecturers, admins, and section heads",
      "Built a multi-role trauma-informed app with portals for therapists, clients, and organizations",
      "Translated Figma mockups into responsive UIs and integrated real-time APIs",
      "Managed deployments and resources on Azure Cloud",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Petabyte Esports",
    duration: "June 2025 - December 2025",
    details: [
      "Led frontend development of the ATIRC website, a platform that empowered young African minds, featuring modules for jobs, research, incubation, and internship opportunities.",
      "Contributed to both the ATIRC and Petabyte Esports Gaming & Interactive Entertainment Platforms, focused on esports, social engagement, and youth-centered digital experiences.",
      "Built responsive UIs from Figma mockups and connected APIs to enable real-time functionality.",
    ],
  },

  {
    title: "Frontend Developer",
    company: "Vynix Lab",
    duration: "June 2025 - September 2025",
    details: [
      "Contributed to OpenDust projects using Next.js, building responsive and interactive web applications",
      "Developed features and UI components for the StrakNet platform with a focus on performance and scalability",
      "Collaborated with the team via Git for version control and met deadlines through efficient project management",
    ],
  },

  {
    title: "Frontend Developer Intern",
    company: "HNG Internship",
    duration: "December 2024 - January 2025",
    details: [
      "Built scalable React + TypeScript apps using hooks, components, and Redux.",
      "Focused on clean, reusable code and maintainable architecture.",
      "Managed projects with Git and met deadlines through effective time management.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "CODSOFT",
    duration: "September 2024 - October 2024",
    details: [
      "Learned and applied the basics of HTML, CSS, and JavaScript to build interactive web pages.",
      "Worked on several projects, utilizing JavaScript for dynamic functionality and frontend logic.",
      "Developed and optimized frontend features, ensuring responsiveness and user-friendly interfaces using Tailwind CSS.",
    ],
  },
];

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  projectLink: string;
  githubLink: string | null;
  imageLink: string;
  techStacks: string[];
}

export const projects: Project[] = [
  {
    id: 8,
    title: "Vatnova",
    category: "full-stack",
    description: `Vatnova is an AI-powered enterprise customer engagement platform specifically built for the African market. It provides white-label AI chat solutions, compliance automation, and real-time support infrastructure designed for scale and emerging markets. The platform empowers businesses to enhance customer interactions with intelligent automation and seamless support workflows.`,
    projectLink: "https://vatnova.netlify.app/",
    githubLink: null,
    imageLink: "/vatnova.webp",
    techStacks: [
      "React",
      "React Query",
      "Redux Toolkit",
      "Tailwind",
      "SignalR",
      "REST APIs",
    ],
  },
  {
    id: 22,
    title: "Soloa AI Platform",
    category: "full-stack",
    description: `Soloa AI is an all-in-one AI platform that unifies multiple AI models and tools into a single seamless interface. Users can generate text, images, videos, and audio, interact with advanced AI chat models, and manage creative workflows without switching between applications. The platform features secure authentication, database management, and real-time capabilities powered by Supabase, alongside integrated payments using Stripe for subscriptions and usage-based billing.`,
    projectLink: "https://www.soloa.ai/",
    githubLink: null,
    imageLink: "/soloa.webp",
    techStacks: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "Stripe",
      "AI Integration",
      "API Handling",
      "State Management",
      "Framer Motion",
    ],
  },
  {
    id: 9,
    title: "ATIRC Platform",
    category: "frontend",
    description: `ATIRC (Advanced Technological Incubation and Research Center) is a digital ecosystem designed to empower Africa's youth by providing access to resources, mentorship, and training in emerging technologies like AI, robotics, and cybersecurity. The platform serves as a hub for innovation, research, and incubation, helping young innovators transform ideas into impactful solutions and lead the digital revolution.`,
    projectLink: "https://www.atirc.org.ng/",
    githubLink: null,
    imageLink: "/atirc.webp",
    techStacks: ["React", "RTK", "Tailwind", "REST APIs"],
  },
  {
    id: 10,
    title: "Trauma Informed Care (TIC)",
    category: "full-stack",
    description: `A comprehensive multi-tenant platform designed to connect therapists with clients and organizations. The system features a robust dashboard with specialized portals for admins, agents, organizations, and clients, facilitating seamless mental health support and organizational wellness management. (Test Access - Email: admin@tic.com | Pass: Pa55word@123)`,
    projectLink: "https://trauma-app.netlify.app/",
    githubLink: null,
    imageLink: "/tic.webp",
    techStacks: [
      "React",
      "TypeScript",
      "Redux",
      "Chakra UI",
      "Tailwind",
      "SignalR",
      "REST APIs",
    ],
  },
  {
    id: 33,
    title: "EFCC LMS Platform",
    category: "full-stack",
    description: `The EFCC LMS is a learning management system designed to support training and capacity development for personnel within the Economic and Financial Crimes Commission (EFCC). The platform enables users to access courses, track learning progress, complete assessments, and engage in structured digital training programs. (Test Access - Email: admin@root.com | Pass: 123Pa$$word!)`,
    projectLink: "https://lms.efcc.gov.ng/dashboard",
    githubLink: null,
    imageLink: "/efcc.webp",
    techStacks: [
      "React.js",
      "Tailwind",
      "Authentication",
      "Dashboard UI",
      "API Integration",
      "State Management",
    ],
  },
  {
    id: 1,
    title: "Global Tech Ecommerce",
    category: "frontend",
    description: `Global Tech Ecommerce is a responsive web app for exploring and buying tech gadgets. It features product filtering, cart/wishlist, Firebase authentication, state management with Redux Toolkit, and form validation using Zod.`,
    projectLink: "https://global-tech-ecommerce.vercel.app/",
    githubLink: "https://github.com/Royal-design/global-tech",
    imageLink: "/global_tech.webp",
    techStacks: [
      "React",
      "TypeScript",
      "Redux",
      "Tailwind",
      "ShadCN",
      "Zod",
      "React Hook Form",
      "Firebase",
      "Framer motion",
      "Stripe",
    ],
  },

  {
    id: 7,
    title: "Movielux",
    category: "frontend",
    description: `MovieLux is a modern movie discovery web application built with React and TypeScript. It leverages the TMDB (The Movie Database) API to provide up-to-date movie information, and uses Redux Toolkit Query (RTK Query) for efficient and optimized data fetching and state management.`,
    projectLink: "https://movielux.vercel.app/",
    githubLink: "https://github.com/Royal-design/movielux",
    imageLink: "/movielux.webp",
    techStacks: [
      "React",
      "TypeScript",
      "Redux",
      "Tailwind",
      "ShadCN",
      "RTK Query",
      "TMDB API",
    ],
  },

  {
    id: 2,
    title: "Home of Design Furniture",
    category: "full-stack",
    description: `Home of Design Furniture is a sleek and modern online furniture store that offers a seamless shopping experience across all devices. Customers can browse products, read reviews, manage their cart, and securely complete dummy purchases.`,
    projectLink: "https://home-of-design.vercel.app/",
    githubLink: "https://github.com/Royal-design/home-of-design",
    imageLink: "/hod.webp",
    techStacks: [
      "React",
      "TypeScript",
      "Redux",
      "Tailwind",
      "ShadCN",
      "Zod",
      "React Hook Form",
      "Firebase",
      "Framer motion",
      "Stripe",
    ],
  },
  {
    id: 3,
    title: "Ninja.Translator – AI Text Assistant",
    category: "ai",
    description: `Ninja.Translator is a smart, intuitive AI interface designed to streamline multilingual communication. Built with a sleek chat-style UI, it allows users to translate text into different languages and summarize lengthy content with ease, it is powered by Gemini AI models.`,
    projectLink: "https://codeninja-ai.vercel.app/",
    githubLink: "https://github.com/Royal-design/ninja-ai",
    imageLink: "/ninja.webp",
    techStacks: [
      "React",
      "TypeScript",
      "Redux",
      "Tailwind",
      "ShadCN",
      "Framer motion",
      "Gemini models",
    ],
  },
  {
    id: 4,
    title: "ChattyBee AI — Chat Assistant",
    category: "ai",
    description: `ChattyBee AI is a smart, web-based chat assistant that generates context-aware responses based on user input. Its primary focus is to simulate natural, human-like conversations with AI in a smooth and engaging interface.`,
    projectLink: "https://chatty-bee-ai.vercel.app/",
    githubLink: "https://github.com/Royal-design/chatty-bee-ai",
    imageLink: "/chattybee.webp",
    techStacks: [
      "React",
      "TypeScript",
      "Redux",
      "Tailwind",
      "ShadCN",
      "Firebase",
      "Gemini models",
    ],
  },
  {
    id: 5,
    title: "BeepME – Real-Time Chat App",
    category: "full-stack",
    description: `BeepME is a real-time chat application built with React and Firebase, designed to offer a fast, seamless, and modern messaging experience. It features secure user authentication (email/password and Google login), real-time messaging powered by Firebase`,
    projectLink: "https://beep-me.vercel.app/",
    githubLink: "https://github.com/Royal-design/BeepME",
    imageLink: "/beepme.webp",
    techStacks: [
      "React",
      "TypeScript",
      "Redux",
      "Tailwind",
      "ShadCN",
      "Firebase",
    ],
  },
  {
    id: 6,
    title: "Corex Metaverse: The Virtual Revolution",
    category: "frontend",
    description: `Corex Metaverse is a futuristic event website built to simulate the experience of a virtual tech expo. It features a sleek neon-themed UI and an intuitive multi-step ticket generation system. Users can choose their ticket type, fill in personal details, and generate a personalized digital ticket, all with smooth form validation and persistent state handling`,
    projectLink: "https://metaverse-corex-event.vercel.app/",
    githubLink: "https://github.com/Royal-design/metaverse-event",
    imageLink: "/metaverse.webp",
    techStacks: [
      "React",
      "TypeScript",
      "Redux",
      "Tailwind",
      "ShadCN",
      "Firebase",
    ],
  },
];

export const otherProjects: Project[] = [];
