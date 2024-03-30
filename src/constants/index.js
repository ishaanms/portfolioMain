import {
  mobile,
  F1,
  design,
  mySQL,
  camera,
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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  cpp,
  Amrita,
  IIT,
  BHEL,
  Exposys,
  ONGC,
  DRDO,
  TUD,
  PAWWZ,
  ode,
  shareme,
  threads,
  saic,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "F1 Fanatic",
    icon: F1,
  },
  {
    title: "Photography Enthusiast",
    icon: camera,
  },
  {
    title: "Digital Artist",
    icon: design,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mySQL,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
];

const experiences = [
  {
    title: "Business Development Intern",
    company_name: "Pawzzitive Welfare Foundation, Gurgaon",
    icon: PAWWZ,
    iconBg: "#dac3e0",
    date: "Feb 2024 - Present",
    points: [
      "Raised donations for various campaigns run by Pawzz for Stray Animals.",
      "Collaborating with other interns leading to 10000+ donations and 50% more digital reach.",
      // "Leading in promotion reviews and strategy sessions to provide constructive feedback to other interns.",
    ],
  },
  {
    title: "DAAD-WISE Summer Intern",
    company_name: "Technische Universität Darmstadt, Germany",
    icon: TUD,
    iconBg: "#f2f2f2",
    date: "May 2023 - July 2023",
    points: [
      "Developing programs to analyze structural and dynamic properties of hydrocarbon molecules using molecular dynamics and coarse-grained modeling.",
      "Participating in product reviews and providing constructive feedback to other researchers in my team.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "Defence Research & Development Organisation(DRDO) (R&D Est. - Eng.), Pune",
    icon: DRDO,
    iconBg: "#d1d5e3",
    date: "May 2022 - August 2022",
    points: [
      "Worked on physical and chemical properties of carbon fiber reinforced epoxy resin interleaved composites.",
      "Collaborating with cross-functional teams including researchers and scientists from other departments to create high-quality epoxy resins and interleaved composites.",
    ],
  },
  {
    title: "Geochemist Intern",
    company_name: "Oil and Natural Gas Corporation(ONGC) - Industrial Training",
    icon: ONGC,
    iconBg: "#d1d5e3",
    date: "June 2022 - August 2022",
    points: [
      "Working on trace elemental anomalies and the instruments used to detect them as part of inorganic vertical of geochemistry.",
      "Collaborating with cross-functional teams including researchers from other fields to create high-quality reports on trace anomalous properties in metals.",
      
    ],
  },
  {
    title: "Full Stack Developer Developer",
    company_name: "Exposys data Labs, Bengaluru",
    icon: Exposys,
    iconBg: "#1d1d1f",
    date: "October 2021 - November 2021",
    points: [
      "Developing and maintaining web applications using React.js, SocketIO and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers in my team.",
    ],
  },
  {
    title: "Internship cum Online Training",
    company_name: "Bharat Heavy electrical Limited - Kaushal Program",
    icon: BHEL,
    iconBg: "#d1d5e3",
    date: "October 2021",
    points: [
      "Simulating differential equations like Lotka-Volterra equation and iodine clock reaction for chemical application.",
      "Exploring applications of bifurcation diagrams and logistic maps in chemistry.",
      
    ],
  },
  {
    title: "Researcher Student",
    company_name: "IIT Varanasi",
    icon: IIT,
    iconBg: "#dcd1e3",
    date: "July 2021 - April 2022",
    points: [
      "Simulating differential equations like Lotka-Volterra equation and iodine clock reaction for chemical application.",
      "Exploring applications of bifurcation diagrams and logistic maps in chemistry.",
      "Published a research article on the same. DOI: https://doi.org/10.1007/s43538-022-00081-6",
      
    ],
  },
  {
    title: "Student [IDD(Industrial Chemistry)]",
    company_name: "Indian Institute of Technology (IIT-BHU), Varanasi",
    icon: IIT,
    iconBg: "#dcd1e3",
    date: "July 2020 - Present",
    points: [
      "Pursuing Industrial Chemistry as part of integrated B.Tech. + M.Tech. program.",
      "Specializing in Computational chemistry.",

    ],
  },
  {
    title: "Student [HSC(Science)]",
    company_name: "Amrita Vidyalayam",
    icon: Amrita,
    iconBg: "#d1d5e3",
    date: "March 2020",
    points: [
      "Studied 12th Science and Passed with 95.2 Percentage.",
      
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
    name: "Threads Clone",
    description:
      "Web-based platform that allows users to create a thread, reply to a thread, and create/join communities of various users, providing a convenient and efficient platform for discussions and chat.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: threads,
    source_code_link: "https://github.com/ishaanms/new_threads_repo",
  },
  {
    name: "Pinterest Clone - ShareMe",
    description:
      "Sharme is a photo sharing app just like a pinterest clone. Here you can post pictures, ,save, download and even comment on other photos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: shareme,
    source_code_link: "https://github.com/ishaanms/shareme_clone",
  },
  {
    name: "Reacts and Graphs",
    description:
      "Oscillatory and non-linear differential equation simulator built using ChartJS and ReactJS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chartjs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ode,
    source_code_link: "https://github.com/ishaanms/non_linear_differential_equation_sim",
  },
];

export { services, technologies, experiences, testimonials, projects };
