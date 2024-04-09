import {
  csharp,
  creator,
  javascript,
  html,
  git,
  figma,
  docker,
  rust,
  linux,
  wpf,
  mysql,
  python,
  antarctic,
  task,
  vprofile,
  website,
  multi,
  leader
} from "../assets";

const services = [
  {
    title: "Object Oriented Programming",
    icon: csharp,
  },
  {
    title: "Diverse Technical Skills",
    icon: creator,
  },
  {
    title: "Multicultural Background",
    icon: multi,
  },
  {
    title: "Leadership",
    icon: leader,
  }
];

const technologies = [
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "WPF",
    icon: wpf,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Python",
    icon: python,
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
];

const projects = [
  {
    name: "Antarctic Theme",
    description:
      "Light-Mode color scheme aim to provide a great experience of developers and users who seek an alternative to dark mode.",
    image: antarctic,
    source_code_link: "https://github.com/AntarcticTheme",
  },
    {
    name: "This website",
    description:
      "This web application, developed using React, Vite, Tailwind CSS, and Framer Motion, serves as a showcase of my expertise. While drawing inspiration from the JavaScript Mastery project tutorial, I've customized the project to my own ideas.",
    image: website,
    source_code_link: "https://github.com/dariusbarbus/student-website",
  },
  {
    name: "Home Pager",
    description:
      "Home Pager is a minimalist html home page template where users can add their own links to have a personalized homepage.",
    image: task,
    source_code_link: "https://github.com/dariusbarbus/Home-Pager",
  },
    {
    name: "Website Deployment - VProfile",
    description:
      "Multi-tier web application stack using Valgrant to create VM's for different services. Project from a Udemy DevOps Course by Imran Teli.",
    image: vprofile,
    source_code_link: "https://github.com/dariusbarbus/vprofile-project",
  },
];

export { services, technologies, projects };
