// Project types
export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    github: string;
    demo: string | null;
    featured: boolean;
  }
  
  // Education types
  export interface Education {
    degree: string;
    institution: string;
    period: string;
    description: string;
    location: string;
  }
  
  // Experience types
  export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    location: string;
  }
  
  // Skill types
  export interface Skill {
    name: string;
    level: number;
  }
  
  export interface SkillsByCategory {
    [category: string]: Skill[];
  }
  
  // Project data
  export const projects: Project[] = [
    {
      id: 1,
      title: "Interactive UML Editor",
      description: "TEACHING OBJECT-ORIENTED DESIGN THROUGH INTERACTIVE UML: A DUAL-APPROACH FRAMEWORK",
      longDescription: "A comprehensive tool for teaching object-oriented programming concepts through interactive UML diagrams. Features include code-to-diagram generation and direct diagram manipulation with real-time code updates.",
      image: "/images/projects/uml-editor.webp",
      tags: ["Python", "UML", "Education", "Object-Oriented Design"],
      github: "https://github.com/Mkayuni/Thesis",
      demo: null,
      featured: true
    },
    {
      id: 2,
      title: "StockTrack",
      description: "Real-time stock tracking and portfolio management application that provides market data analysis and investment performance monitoring.",
      longDescription: "A comprehensive stock tracking application that allows users to monitor their investments in real-time. Features include portfolio management, market data analysis, performance tracking, and personalized investment insights.",
      image: "/images/projects/stocktrack.webp",
      tags: ["JavaScript", "React", "Node.js", "Financial API", "Data Visualization"],
      github: "https://github.com/Mkayuni/stockTrack",
      demo: null,
      featured: true
    },
    {
      id: 3,
      title: "LotaMalawi",
      description: "Interactive Android app for learning Chichewa through gamified language acquisition inspired by the game Heads Up.",
      longDescription: "An educational mobile application designed to make learning Chichewa, the national language of Malawi, fun and engaging. The app uses a gamified approach similar to 'Heads Up!' to help users acquire vocabulary and phrases.",
      image: "/images/projects/lotamalawi.webp",
      tags: ["Java", "Android", "Education", "Language Learning"],
      github: "https://github.com/Mkayuni/LotoAndroid",
      demo: null,
      featured: true
    },
    {
      id: 4,
      title: "Paista",
      description: "Educational discussion board platform facilitating Q&A interactions between students and instructors for course material engagement.",
      longDescription: "A collaborative platform designed to enhance educational engagement through structured discussions. The platform enables students to ask questions and get answers from instructors and peers, making course material more accessible.",
      image: "/images/projects/paista.webp",
      tags: ["JavaScript", "React", "Node.js", "MongoDB", "Education"],
      github: "https://github.com/Lockwood-02/Paista",
      demo: null,
      featured: true
    },
    {
      id: 5,
      title: "AVL Tree Visualizer",
      description: "A dynamic, interactive web application for visualizing AVL tree operations and rotations.",
      longDescription: "An educational tool for visualizing AVL tree data structures and operations. The application demonstrates insertions, deletions, and automatic tree balancing with animated rotations, helping students understand these complex algorithms.",
      image: "/images/projects/avl-tree.webp",
      tags: ["JavaScript", "Data Structures", "Algorithms", "Education", "Visualization"],
      github: "https://github.com/Mkayuni/avlTree",
      demo: null,
      featured: true
    },
    {
      id: 6,
      title: "Simple File System",
      description: "Thread-safe file system implementation in C with concurrent access management.",
      longDescription: "A lightweight file system implementation written in C that provides thread-safe operations for concurrent access. The system includes features for file creation, deletion, reading, writing, and metadata management.",
      image: "/images/projects/file-system.webp",
      tags: ["C", "Systems Programming", "Concurrency", "File Systems"],
      github: "https://github.com/Mkayuni/Simple-File-System",
      demo: null,
      featured: true
    }
  ];
  
  // Education data
  export const education: Education[] = [
    {
      degree: "MS in Computer Science",
      institution: "Western Kentucky University",
      period: "2022 - Present",
      description: "Focusing on advanced algorithms, machine learning, and software engineering practices.",
      location: "Bowling Green, KY"
    },
    {
      degree: "MBA in Data Analytics & Healthcare Administration",
      institution: "University of Southern Indiana",
      period: "2019 - 2021",
      description: "Combined business administration with specialized focus on data analytics and healthcare systems management.",
      location: "Evansville, IN"
    }
  ];
  
  // Experience data
  export const experience: Experience[] = [
    {
      title: "Teaching Assistant",
      company: "Western Kentucky University",
      period: "2022 - Present",
      description: "Instructing Java and Python programming courses (CS146 and CS170). Guiding students through complex coding concepts and problem-solving techniques. Developing educational tools for improved learning outcomes.",
      location: "Bowling Green, KY"
    },
    {
      title: "Software Development Intern",
      company: "Schneider Electric",
      period: "2021 - 2022",
      description: "Developed a full-stack Tool Capacity Analyzer application using React/Node.js. Implemented systems to calculate machine hours, material usage, and forecast-based metrics. Collaborated in an agile team environment to deliver business-critical solutions.",
      location: "Louisville, KY"
    }
  ];
  
  // Skills data
  export const skillsByCategory: SkillsByCategory = {
    "Programming Languages": [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "C", level: 75 },
      { name: "C++", level: 70 },
      { name: "C#", level: 65 }
    ],
    "Web Technologies": [
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "Django", level: 70 }
    ],
    "Databases & Tools": [
      { name: "SQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Git", level: 90 }
    ]
  };
  
  // Social links
  export const socialLinks = {
    github: "https://github.com/Mkayuni",
    linkedin: "https://www.linkedin.com/in/moses-kayuni-7915709b/",
    email: "Kayunilow11@gmail.com",
    phone: "+260 901 9099"
  };
  
  // Navigation links
  export const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];