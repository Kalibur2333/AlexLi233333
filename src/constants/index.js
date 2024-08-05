import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  monash,
  tesla,
  shopify,
  carrent,
  jobit,
  wordrobe,
  tripguide,
  threejs,
  maya,
  substance,
  unreal,
  sql,
  skyproject,
  cloud,
  archive,
  mvc,
  lup,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education&Experience",
  },
  {
    id: "project",
    title: "Projects",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "sql",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "maya",
    icon: maya,
  },
  {
    name: "substance",
    icon: substance,
  },
  {
    name: "unreal",
    icon: unreal,
  },
];
const jobs = [
  {
    title: "Intern - Web/IT Developer ",
    company_name: "LUP Global | Melbourne",
    icon: lup,
    iconBg: "#ffffff",
    date: "2023 Summer Intern",
    points: [
      "My role involves optimizing the integration between Client port and Data base, improving site automation to streamline data management.",
      "Additionally, I replicated an existing submission form and expand user functionality by creating personalized logins for clients.",
      "This work is focused on customizing user experiences and reducing manual data entry through efficient backend solutions.",
    ],
  },
];

const experiences = [
  {
    title: "Diploma of Engineering ( Information Technology)",
    company_name: "Monash College | Melbourne",
    icon: monash,
    iconBg: "#E6DEDD",
    date: "2018 - 2019",
    points: [
      "I completed a Diploma of Engineering (Information Technology) in Monash.",
      "where I developed skills in engineering practices, computer systems, network security, and programming with languages such as C++.",
      "The curriculum also included foundational studies in business statistics and 3D foundations, enhancing my analytical and technical capabilities.",
    ],
  },
  {
    title: "Bachelor of Information Technology",
    company_name: "Monash University | Melbourne",
    icon: monash,
    iconBg: "#383E56",
    date: "2020 - 2022",
    points: [
      "I hold a Bachelor of Information Technology, having mastered a range of technical subjects including computer systems, C++, Python, and database management.",
      "My studies also covered 3D character animation, IT project management, and interactive media design, UI/UX design, culminating in advanced projects that showcased my ability to apply critical thinking and analytical skills in technology-driven environments.",
    ],
  },
  {
    title: "Master of Information Technology",
    company_name: "Monash University | Melbourne",
    icon: monash,
    iconBg: "#E6DEDD",
    date: "2022 - 2024",
    points: [
      "In my Master of Information Technology program, I've honed my skills in programming with a focus on Python and Java, and deepened my understanding of databases, computer architecture, and networks.",
      "I've engaged in advanced studies in software engineering, data science, and cloud computing, achieving high distinctions in advanced database technology and data science.",
      "My coursework has also included project management, Cloud computing with React & AWS, MVC web application, and user interface design, preparing me for practical application in the industry.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Working on it !",
    description: "(Q.Q)",
    tags: [],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fashion sustainability Web App",
    description:
      "It aims to address Australia's growing clothing waste problem, which is exacerbated by mass clothing consumption and unsustainable production practices. The website’s mission is to inform users about the impact of their fashion choices on the environment and encourage sustainable behavior changes to mitigate climate change. Ultimately, Wardrobe for Earth aims to foster a community of informed consumers who are committed to reducing Australia’s clothing waste problem and positively impacting the planet.",
    tags: [
      {
        name: ".Net Framework",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Aws",
        color: "green-text-gradient",
      },
      {
        name: "Arzue",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: wordrobe,
    source_code_link: "https://github.com/Kalibur2333/FIT5120Project",
  },
  {
    name: "A Serverless Image Storage System with Tagging",
    description:
      "Monash FIT5225. A cloud-based, serverless system enables to upload images to cloud storage. Users can upload images to perform object detection. The system identifies the object categories in the image and tags the image with these identified categories. users can SEARCH image by tag, SEARCH image by image, and also edit the tags of the image or delete the image.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Aws",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: cloud,
    source_code_link: "https://github.com/Kalibur2333/FIT5225A2/tree/main",
  },
  {
    name: "Medical Imaging Service Web App",
    description:
      "Monash FIT5032 Internet application development Project. The web application developed using C# ASP.NET MVC and MS SQL Database. It includes features of autehtication, role-based CRUD, Booking and confilc management in calendar, rating and intractive table data, email sending, google map geolocation display, file export, etc",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "green-text-gradient",
      },
      {
        name: ".Net Framework",
        color: "pink-text-gradient",
      },
    ],
    image: mvc,
    source_code_link: "https://github.com/Kalibur2333/FIT5032-backup/tree/main",
  },
  {
    name: "Steam Combat: Sky",
    description:
      "Monash FIT3039-3040 Game Development Project. The silliest but happiest of times.",
    tags: [
      {
        name: "Maya",
        color: "blue-text-gradient",
      },
      {
        name: "Blender",
        color: "green-text-gradient",
      },
      {
        name: "Substence",
        color: "pink-text-gradient",
      },
      {
        name: "Photoshop",
        color: "blue-text-gradient",
      },
      {
        name: "Unreal",
        color: "green-text-gradient",
      },
      {
        name: "C",
        color: "pink-text-gradient",
      },
    ],
    image: skyproject,
    source_code_link: "https://youtu.be/MUziQvfWldE",
  },
  {
    name: "Academic Project Archive",
    description: "My archived projects in Monash university",
    tags: [
      {
        name: "Github",
        color: "blue-text-gradient",
      },
    ],
    image: archive,
    source_code_link: "https://github.com/Kalibur2333",
  },
];

export { services, technologies, experiences, testimonials, projects, jobs };
