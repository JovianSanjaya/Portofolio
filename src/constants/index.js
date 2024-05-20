import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  git,
  figma,
  docker,
  jobit,
  tripguide,
  aws,
  sql,
  assembly,
  php,
  python,
  sp,
  robocup,
  huawei,
  lifefit,
  hdb,
  fast,
  kube,
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
    title: "Android App Develper",
    icon: web,
  },
  {
    title: "Web App Developer",
    icon: mobile,
  },
  {
    title: "ML Enthusiast",
    icon: backend,
  },
  {
    title: "Full time student",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Assembly",
    icon: assembly,
  },
  {
    name: "PHP",
    icon:  php,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Kubernetes",
    icon: kube,
  },
];

const experiences = [
  {
    title: "Team Lead Android App Developer",
    company_name: "Singapore Polytechnic",
    icon: sp,
    iconBg: "#383E56",
    date: "April 2023 - December 2023",
    points: [
      "Established project specifications and technical direction",
      "Developed interactive and visually appealing prototypes using Figma",
      "Led the development of the Life Fit Mobile app using Android Studio, integrating advanced technologies such as the OpenAI API and Firebase",
      "Managed development tasks efficiently using Git and GitHub, maintaining a streamlined workflow and codebase",
      "Guided team members through troubleshooting technical issues, providing support and fostering a collaborative and productive team environment",
    ],
  },
  {
    title: "Co-Chair Auto-Driving Referee (U19 and U12)",
    company_name: "Robocup Singapore",
    icon: robocup,
    iconBg: "#E6DEDD",
    date: "April 2024",
    points: [
      "Conducted pre-event briefings for referees and teams to ensure understanding of rules and procedures.",
      "Collaborated with other referees to ensure seamless coordination for the competition.",
      "Facilitated effective communication channels to address any issues or concerns.",
      "Conducted post-event evaluations to identify areas for improvement and implement changes for future editions.",
    ],
  },
  {
    title: "Youth Ambassador",
    company_name: "Huawei Singapore",
    icon: huawei,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Being Part of Huawei Tech4City Competition 2024 team.",
      "Participated in Huawei flagship events held in Singapore, gaining exposure to cutting-edge technologies and industry insights.",
      "Promoted Huawei Events to School to raise awareness and generate interest among students in the field of technology.",
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
    name: "Life Fit",
    description:
      "Life Fit is a personalised app that integrates smart technology and community-based caregiving.This app not only offers user-friendly features to improve convenience but also fosters connections between caregivers and recipients",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "pink-text-gradient",
      },
    ],
    image: lifefit,
    source_code_link: "https://github.com/JovianSanjaya/LifeFit",
  },
  {
    name: "Data Analysis of HDB Flats in Singapore",
    description:
      "I am an international student looking for the best place to stay in Singapore. This analysis is intended to compare different areas across Singapore to find the most suitable area for me to stay. ",
    tags: [
      {
        name: "Numpy",
        color: "blue-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: hdb,
    source_code_link: "https://github.com/JovianSanjaya/DataAnalysisOfHdbFlatsInSingapore",
  },
  {
    name: "F.A.S.T (Fire Alarm Sytem Technology)",
    description:
      "The Smart Fire Alarm System is a system that is designed to detect fire incidents, issue real-time alerts, and integrate with hardware sensors. ",
    tags: [
      {
        name: "Raspberry Pi ",
        color: "blue-text-gradient",
      },
      {
        name: "Computer Vision",
        color: "green-text-gradient",
      },
      {
        name: "YOLO Object Detection Algorithm",
        color: "pink-text-gradient",
      },
    ],
    image: fast,
    source_code_link: "https://github.com/JovianSanjaya/F.A.S.T",
  },
];

export { services, technologies, experiences, testimonials, projects };
