const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova",
    location: "Kolkata",
    type: "Full Time",
    experience: "1–3 Years",
    salary: "₹6–10 LPA",
    posted: "2 days ago",
    logo: "TN",
    description:
      "TechNova is looking for a talented Frontend Developer to build modern, responsive and user-friendly web applications.",
    responsibilities: [
      "Build responsive web applications using modern frontend technologies.",
      "Develop reusable and maintainable React components.",
      "Collaborate with designers and backend developers.",
      "Optimize applications for performance and accessibility."
    ],
    requirements: [
      "Strong knowledge of HTML, CSS and JavaScript.",
      "Experience with React.js.",
      "Understanding of Git and GitHub.",
      "Good problem-solving skills."
    ],
    skills: ["React", "JavaScript", "HTML", "CSS", "Git"]
  },

  {
    id: 2,
    title: "Software Engineering Intern",
    company: "CodeSphere",
    location: "Bengaluru",
    type: "Internship",
    experience: "Entry Level",
    salary: "₹20–30K / month",
    posted: "3 days ago",
    logo: "CS",
    description:
      "CodeSphere is looking for enthusiastic students who want to gain practical experience working on real-world software projects.",
    responsibilities: [
      "Assist developers in building software features.",
      "Write and test basic application code.",
      "Identify and fix bugs.",
      "Participate in team discussions and code reviews."
    ],
    requirements: [
      "Basic programming knowledge.",
      "Understanding of software development fundamentals.",
      "Willingness to learn new technologies.",
      "Good communication skills."
    ],
    skills: ["Java", "Python", "Git", "Problem Solving"]
  },

  {
    id: 3,
    title: "UI/UX Designer",
    company: "PixelWorks",
    location: "Hyderabad",
    type: "Full Time",
    experience: "1–3 Years",
    salary: "₹5–8 LPA",
    posted: "4 days ago",
    logo: "PW",
    description:
      "PixelWorks is seeking a creative UI/UX Designer to create intuitive and engaging digital experiences.",
    responsibilities: [
      "Create wireframes and high-fidelity designs.",
      "Design intuitive user interfaces.",
      "Conduct user research and usability testing.",
      "Collaborate with developers and product teams."
    ],
    requirements: [
      "Experience with Figma or similar design tools.",
      "Strong understanding of UI/UX principles.",
      "Good visual and communication skills.",
      "Understanding of responsive design."
    ],
    skills: ["Figma", "UI Design", "UX Design", "Prototyping"]
  },

  {
    id: 4,
    title: "Backend Developer",
    company: "CloudCore",
    location: "Pune",
    type: "Full Time",
    experience: "3+ Years",
    salary: "₹7–12 LPA",
    posted: "5 days ago",
    logo: "CC",
    description:
      "CloudCore is looking for a Backend Developer to build reliable APIs and scalable server-side applications.",
    responsibilities: [
      "Develop and maintain backend APIs.",
      "Design and manage database systems.",
      "Improve application performance and security.",
      "Collaborate with frontend developers."
    ],
    requirements: [
      "Strong knowledge of Node.js.",
      "Experience with Express.js.",
      "Understanding of databases and APIs.",
      "Knowledge of authentication and security."
    ],
    skills: ["Node.js", "Express", "MongoDB", "REST API"]
  },

  {
    id: 5,
    title: "React Developer Intern",
    company: "WebNest",
    location: "Remote",
    type: "Internship",
    experience: "Entry Level",
    salary: "₹15–25K / month",
    posted: "1 week ago",
    logo: "WN",
    description:
      "WebNest is looking for a React Developer Intern who wants to learn and contribute to modern web applications.",
    responsibilities: [
      "Assist in developing React interfaces.",
      "Create reusable UI components.",
      "Work with developers to implement new features.",
      "Test and improve existing interfaces."
    ],
    requirements: [
      "Basic knowledge of HTML and CSS.",
      "Understanding of JavaScript.",
      "Basic knowledge of React.",
      "Interest in frontend development."
    ],
    skills: ["React", "JavaScript", "HTML", "CSS"]
  },

  {
    id: 6,
    title: "Full Stack Developer",
    company: "ByteWorks",
    location: "Mumbai",
    type: "Full Time",
    experience: "1–3 Years",
    salary: "₹8–14 LPA",
    posted: "1 day ago",
    logo: "BW",
    description:
      "ByteWorks is looking for a Full Stack Developer to work across frontend and backend systems.",
    responsibilities: [
      "Build frontend interfaces and backend services.",
      "Develop REST APIs.",
      "Work with databases and application logic.",
      "Collaborate with product and design teams."
    ],
    requirements: [
      "Knowledge of React.js.",
      "Experience with Node.js and Express.",
      "Understanding of MongoDB or similar databases.",
      "Knowledge of Git."
    ],
    skills: ["React", "Node.js", "Express", "MongoDB", "Git"]
  },

  {
    id: 7,
    title: "Product Designer",
    company: "Northstar",
    location: "Remote",
    type: "Full Time",
    experience: "3+ Years",
    salary: "₹9–15 LPA",
    posted: "2 days ago",
    logo: "NS",
    description:
      "Northstar is looking for an experienced Product Designer to shape digital products from concept to launch.",
    responsibilities: [
      "Design complete product experiences.",
      "Create user flows and prototypes.",
      "Work with product managers and engineers.",
      "Improve existing product experiences."
    ],
    requirements: [
      "Strong product design portfolio.",
      "Advanced Figma skills.",
      "Understanding of UX research.",
      "Strong communication skills."
    ],
    skills: ["Figma", "Product Design", "UX Research", "Prototyping"]
  },

  {
    id: 8,
    title: "Java Developer",
    company: "InnovaTech",
    location: "Chennai",
    type: "Full Time",
    experience: "1–3 Years",
    salary: "₹7–11 LPA",
    posted: "3 days ago",
    logo: "IT",
    description:
      "InnovaTech is hiring a Java Developer to develop reliable enterprise software applications.",
    responsibilities: [
      "Develop Java applications.",
      "Build and maintain backend services.",
      "Write clean and testable code.",
      "Work with database systems."
    ],
    requirements: [
      "Strong knowledge of Java.",
      "Understanding of OOP concepts.",
      "Knowledge of SQL.",
      "Experience with Spring Boot is a plus."
    ],
    skills: ["Java", "Spring Boot", "SQL", "OOP"]
  },

  {
    id: 9,
    title: "Data Analyst",
    company: "DataBridge",
    location: "Delhi",
    type: "Full Time",
    experience: "1–3 Years",
    salary: "₹6–9 LPA",
    posted: "4 days ago",
    logo: "DB",
    description:
      "DataBridge is looking for a Data Analyst to turn business data into useful insights.",
    responsibilities: [
      "Analyze business datasets.",
      "Create reports and dashboards.",
      "Identify trends and patterns.",
      "Present insights to stakeholders."
    ],
    requirements: [
      "Knowledge of Excel and SQL.",
      "Basic Python knowledge.",
      "Strong analytical skills.",
      "Understanding of data visualization."
    ],
    skills: ["SQL", "Python", "Excel", "Data Analysis"]
  },

  {
    id: 10,
    title: "Python Developer Intern",
    company: "LogicLabs",
    location: "Remote",
    type: "Internship",
    experience: "Entry Level",
    salary: "₹18–25K / month",
    posted: "5 days ago",
    logo: "LL",
    description:
      "LogicLabs is offering an internship for students interested in Python development.",
    responsibilities: [
      "Assist in developing Python applications.",
      "Write simple scripts and utilities.",
      "Test application features.",
      "Work with senior developers."
    ],
    requirements: [
      "Basic Python knowledge.",
      "Understanding of programming fundamentals.",
      "Problem-solving ability.",
      "Willingness to learn."
    ],
    skills: ["Python", "Programming", "Git", "SQL"]
  },

  {
    id: 11,
    title: "Mobile App Developer",
    company: "AppForge",
    location: "Bengaluru",
    type: "Full Time",
    experience: "1–3 Years",
    salary: "₹7–13 LPA",
    posted: "6 days ago",
    logo: "AF",
    description:
      "AppForge is looking for a Mobile App Developer to create high-quality mobile experiences.",
    responsibilities: [
      "Develop mobile applications.",
      "Implement new app features.",
      "Fix bugs and improve performance.",
      "Work with designers and backend engineers."
    ],
    requirements: [
      "Experience with mobile development.",
      "Understanding of APIs.",
      "Knowledge of Git.",
      "Good debugging skills."
    ],
    skills: ["React Native", "JavaScript", "APIs", "Git"]
  },

  {
    id: 12,
    title: "Graphic Designer",
    company: "CreativeHouse",
    location: "Kolkata",
    type: "Part Time",
    experience: "Entry Level",
    salary: "₹25–40K / month",
    posted: "1 week ago",
    logo: "CH",
    description:
      "CreativeHouse is looking for a Graphic Designer to create engaging visual content.",
    responsibilities: [
      "Design social media graphics.",
      "Create marketing materials.",
      "Develop visual concepts.",
      "Collaborate with the marketing team."
    ],
    requirements: [
      "Strong visual design skills.",
      "Knowledge of design software.",
      "Creative thinking.",
      "Good attention to detail."
    ],
    skills: ["Photoshop", "Illustrator", "Figma", "Graphic Design"]
  },

  {
    id: 13,
    title: "DevOps Engineer",
    company: "CloudGrid",
    location: "Hyderabad",
    type: "Full Time",
    experience: "3+ Years",
    salary: "₹10–17 LPA",
    posted: "2 days ago",
    logo: "CG",
    description:
      "CloudGrid is hiring a DevOps Engineer to improve infrastructure, deployment and application reliability.",
    responsibilities: [
      "Manage cloud infrastructure.",
      "Build CI/CD pipelines.",
      "Monitor production systems.",
      "Improve deployment processes."
    ],
    requirements: [
      "Experience with cloud platforms.",
      "Knowledge of Docker.",
      "Understanding of CI/CD.",
      "Linux administration skills."
    ],
    skills: ["AWS", "Docker", "Linux", "CI/CD"]
  },

  {
    id: 14,
    title: "Machine Learning Intern",
    company: "NeuralWorks",
    location: "Pune",
    type: "Internship",
    experience: "Entry Level",
    salary: "₹20–30K / month",
    posted: "3 days ago",
    logo: "NW",
    description:
      "NeuralWorks is looking for a Machine Learning Intern to support research and development projects.",
    responsibilities: [
      "Prepare and analyze datasets.",
      "Assist with machine learning experiments.",
      "Build basic data processing pipelines.",
      "Document experimental results."
    ],
    requirements: [
      "Python knowledge.",
      "Basic understanding of machine learning.",
      "Knowledge of statistics is helpful.",
      "Strong analytical thinking."
    ],
    skills: ["Python", "Machine Learning", "Pandas", "NumPy"]
  },

  {
    id: 15,
    title: "Product Manager",
    company: "Elevate",
    location: "Mumbai",
    type: "Full Time",
    experience: "3+ Years",
    salary: "₹12–20 LPA",
    posted: "4 days ago",
    logo: "EL",
    description:
      "Elevate is looking for a Product Manager to lead digital products from strategy through execution.",
    responsibilities: [
      "Define product roadmaps.",
      "Work with engineering and design teams.",
      "Analyze customer feedback.",
      "Track product performance."
    ],
    requirements: [
      "Experience in product management.",
      "Strong communication skills.",
      "Analytical thinking.",
      "Understanding of software development."
    ],
    skills: ["Product Management", "Strategy", "Analytics", "Agile"]
  },

  {
    id: 16,
    title: "QA Engineer",
    company: "TestCraft",
    location: "Chennai",
    type: "Full Time",
    experience: "1–3 Years",
    salary: "₹5–9 LPA",
    posted: "5 days ago",
    logo: "TC",
    description:
      "TestCraft is looking for a QA Engineer to ensure the reliability and quality of software products.",
    responsibilities: [
      "Create and execute test cases.",
      "Identify and document software bugs.",
      "Perform regression testing.",
      "Collaborate with developers."
    ],
    requirements: [
      "Understanding of software testing.",
      "Knowledge of test case design.",
      "Basic automation knowledge.",
      "Good attention to detail."
    ],
    skills: ["Testing", "Selenium", "Automation", "Jira"]
  },

  {
    id: 17,
    title: "WordPress Developer",
    company: "WebStudio",
    location: "Remote",
    type: "Part Time",
    experience: "1–3 Years",
    salary: "₹30–45K / month",
    posted: "6 days ago",
    logo: "WS",
    description:
      "WebStudio is looking for a WordPress Developer to create and maintain professional websites.",
    responsibilities: [
      "Build and customize WordPress websites.",
      "Maintain existing websites.",
      "Optimize website performance.",
      "Implement responsive designs."
    ],
    requirements: [
      "Experience with WordPress.",
      "Knowledge of HTML and CSS.",
      "Basic PHP knowledge.",
      "Understanding of responsive design."
    ],
    skills: ["WordPress", "HTML", "CSS", "PHP"]
  },

  {
    id: 18,
    title: "Cloud Engineer",
    company: "SkyStack",
    location: "Bengaluru",
    type: "Full Time",
    experience: "3+ Years",
    salary: "₹11–18 LPA",
    posted: "1 week ago",
    logo: "SS",
    description:
      "SkyStack is looking for a Cloud Engineer to manage scalable and secure cloud infrastructure.",
    responsibilities: [
      "Manage cloud infrastructure.",
      "Monitor cloud services.",
      "Improve system reliability.",
      "Automate infrastructure tasks."
    ],
    requirements: [
      "Experience with AWS or Azure.",
      "Knowledge of Linux.",
      "Understanding of networking.",
      "Experience with infrastructure automation."
    ],
    skills: ["AWS", "Azure", "Linux", "Cloud"]
  },

  {
    id: 19,
    title: "Content Strategist",
    company: "StoryLab",
    location: "Remote",
    type: "Full Time",
    experience: "1–3 Years",
    salary: "₹5–8 LPA",
    posted: "2 days ago",
    logo: "SL",
    description:
      "StoryLab is looking for a Content Strategist to develop content strategies that connect with target audiences.",
    responsibilities: [
      "Develop content strategies.",
      "Research target audiences.",
      "Plan editorial calendars.",
      "Measure content performance."
    ],
    requirements: [
      "Strong writing skills.",
      "Content marketing knowledge.",
      "Research ability.",
      "Good communication skills."
    ],
    skills: ["Content Strategy", "Writing", "SEO", "Research"]
  },

  {
    id: 20,
    title: "Cybersecurity Analyst",
    company: "SecureNet",
    location: "Delhi",
    type: "Full Time",
    experience: "1–3 Years",
    salary: "₹7–12 LPA",
    posted: "3 days ago",
    logo: "SN",
    description:
      "SecureNet is hiring a Cybersecurity Analyst to help protect systems and applications from security threats.",
    responsibilities: [
      "Monitor security events.",
      "Investigate potential security incidents.",
      "Perform security assessments.",
      "Maintain security documentation."
    ],
    requirements: [
      "Understanding of cybersecurity fundamentals.",
      "Knowledge of networking.",
      "Strong analytical skills.",
      "Security certifications are a plus."
    ],
    skills: ["Cybersecurity", "Networking", "Linux", "Security"]
  },

  {
    id: 21,
    title: "React Native Developer",
    company: "MobileCore",
    location: "Hyderabad",
    type: "Full Time",
    experience: "1–3 Years",
    salary: "₹8–14 LPA",
    posted: "4 days ago",
    logo: "MC",
    description:
      "MobileCore is looking for a React Native Developer to build cross-platform mobile applications.",
    responsibilities: [
      "Develop React Native applications.",
      "Build reusable mobile components.",
      "Integrate APIs.",
      "Improve application performance."
    ],
    requirements: [
      "Experience with React Native.",
      "Strong JavaScript knowledge.",
      "Understanding of REST APIs.",
      "Knowledge of mobile development."
    ],
    skills: ["React Native", "React", "JavaScript", "REST APIs"]
  },

  {
    id: 22,
    title: "Business Analyst",
    company: "GrowthPoint",
    location: "Pune",
    type: "Full Time",
    experience: "3+ Years",
    salary: "₹8–13 LPA",
    posted: "5 days ago",
    logo: "GP",
    description:
      "GrowthPoint is looking for a Business Analyst to bridge business requirements and technical solutions.",
    responsibilities: [
      "Gather business requirements.",
      "Analyze business processes.",
      "Prepare reports and documentation.",
      "Work with technical teams."
    ],
    requirements: [
      "Strong analytical skills.",
      "Good communication skills.",
      "Knowledge of business analysis techniques.",
      "Understanding of software projects."
    ],
    skills: ["Business Analysis", "SQL", "Analytics", "Documentation"]
  },

  {
    id: 23,
    title: "Frontend Developer Intern",
    company: "LaunchPad",
    location: "Remote",
    type: "Internship",
    experience: "Entry Level",
    salary: "₹15–25K / month",
    posted: "6 days ago",
    logo: "LP",
    description:
      "LaunchPad is looking for a Frontend Developer Intern to help create modern web interfaces.",
    responsibilities: [
      "Build basic frontend components.",
      "Convert designs into web pages.",
      "Fix UI issues.",
      "Learn and work with modern frontend tools."
    ],
    requirements: [
      "Basic HTML and CSS.",
      "JavaScript fundamentals.",
      "Interest in React.",
      "Basic Git knowledge."
    ],
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },

  {
    id: 24,
    title: "Database Administrator",
    company: "DataCore",
    location: "Chennai",
    type: "Full Time",
    experience: "3+ Years",
    salary: "₹9–15 LPA",
    posted: "1 week ago",
    logo: "DC",
    description:
      "DataCore is looking for a Database Administrator to maintain secure, reliable and high-performing databases.",
    responsibilities: [
      "Manage database systems.",
      "Monitor database performance.",
      "Perform backups and recovery.",
      "Maintain database security."
    ],
    requirements: [
      "Strong SQL knowledge.",
      "Experience with database administration.",
      "Understanding of backups and recovery.",
      "Knowledge of database security."
    ],
    skills: ["SQL", "MongoDB", "PostgreSQL", "Database"]
  },

  {
    id: 25,
    title: "Software Developer",
    company: "CodeWave",
    location: "Kolkata",
    type: "Full Time",
    experience: "1–3 Years",
    salary: "₹6–11 LPA",
    posted: "2 days ago",
    logo: "CW",
    description:
      "CodeWave is looking for a Software Developer to contribute to scalable software products.",
    responsibilities: [
      "Develop software features.",
      "Write clean and maintainable code.",
      "Test application functionality.",
      "Collaborate with development teams."
    ],
    requirements: [
      "Knowledge of at least one programming language.",
      "Understanding of data structures.",
      "Knowledge of Git.",
      "Good problem-solving skills."
    ],
    skills: ["Java", "Python", "Git", "Data Structures"]
  },

  {
    id: 26,
    title: "Marketing Intern",
    company: "BrandWorks",
    location: "Mumbai",
    type: "Internship",
    experience: "Entry Level",
    salary: "₹15–22K / month",
    posted: "3 days ago",
    logo: "BR",
    description:
      "BrandWorks is looking for a Marketing Intern to support digital marketing campaigns.",
    responsibilities: [
      "Assist with marketing campaigns.",
      "Create social media content.",
      "Research competitors and markets.",
      "Track campaign performance."
    ],
    requirements: [
      "Interest in digital marketing.",
      "Good communication skills.",
      "Basic knowledge of social media.",
      "Creative thinking."
    ],
    skills: ["Digital Marketing", "Social Media", "Content", "Analytics"]
  },

  {
    id: 27,
    title: "AI Engineer",
    company: "FutureLabs",
    location: "Bengaluru",
    type: "Full Time",
    experience: "3+ Years",
    salary: "₹14–22 LPA",
    posted: "4 days ago",
    logo: "FL",
    description:
      "FutureLabs is looking for an AI Engineer to develop intelligent systems and machine learning solutions.",
    responsibilities: [
      "Develop machine learning models.",
      "Build AI-powered applications.",
      "Process and analyze datasets.",
      "Deploy and monitor AI systems."
    ],
    requirements: [
      "Strong Python knowledge.",
      "Experience with machine learning.",
      "Understanding of data processing.",
      "Knowledge of AI frameworks."
    ],
    skills: ["Python", "Machine Learning", "AI", "TensorFlow"]
  },

  {
    id: 28,
    title: "Visual Designer",
    company: "DesignWorks",
    location: "Remote",
    type: "Full Time",
    experience: "1–3 Years",
    salary: "₹6–10 LPA",
    posted: "5 days ago",
    logo: "DW",
    description:
      "DesignWorks is looking for a Visual Designer to create polished and consistent visual experiences.",
    responsibilities: [
      "Create visual designs for digital products.",
      "Develop design systems.",
      "Create marketing visuals.",
      "Collaborate with product teams."
    ],
    requirements: [
      "Strong visual design skills.",
      "Experience with Figma.",
      "Understanding of typography and layout.",
      "Strong portfolio."
    ],
    skills: ["Figma", "Visual Design", "Typography", "Branding"]
  },

  {
    id: 29,
    title: "Technical Writer",
    company: "DevDocs",
    location: "Remote",
    type: "Part Time",
    experience: "1–3 Years",
    salary: "₹30–50K / month",
    posted: "6 days ago",
    logo: "DD",
    description:
      "DevDocs is looking for a Technical Writer to create clear documentation for developers and users.",
    responsibilities: [
      "Write technical documentation.",
      "Create API documentation.",
      "Work with software engineers.",
      "Maintain documentation standards."
    ],
    requirements: [
      "Excellent writing skills.",
      "Ability to understand technical concepts.",
      "Basic programming knowledge.",
      "Strong attention to detail."
    ],
    skills: ["Technical Writing", "Documentation", "APIs", "Markdown"]
  },

  {
    id: 30,
    title: "Systems Engineer",
    company: "InfraCore",
    location: "Hyderabad",
    type: "Full Time",
    experience: "3+ Years",
    salary: "₹9–16 LPA",
    posted: "1 week ago",
    logo: "IC",
    description:
      "InfraCore is looking for a Systems Engineer to maintain reliable IT infrastructure and systems.",
    responsibilities: [
      "Manage system infrastructure.",
      "Monitor servers and services.",
      "Troubleshoot technical issues.",
      "Maintain system documentation."
    ],
    requirements: [
      "Strong Linux knowledge.",
      "Understanding of networking.",
      "System administration experience.",
      "Good troubleshooting skills."
    ],
    skills: ["Linux", "Networking", "Systems", "Cloud"]
  },

  {
    id: 31,
    title: "SEO Specialist",
    company: "SearchLabs",
    location: "Delhi",
    type: "Full Time",
    experience: "1–3 Years",
    salary: "₹5–9 LPA",
    posted: "2 days ago",
    logo: "SE",
    description:
      "SearchLabs is looking for an SEO Specialist to improve organic search visibility and website performance.",
    responsibilities: [
      "Develop SEO strategies.",
      "Perform keyword research.",
      "Analyze website performance.",
      "Optimize website content."
    ],
    requirements: [
      "Understanding of SEO principles.",
      "Knowledge of keyword research.",
      "Basic analytics knowledge.",
      "Strong analytical skills."
    ],
    skills: ["SEO", "Google Analytics", "Keyword Research", "Content"]
  },

  {
    id: 32,
    title: "Angular Developer",
    company: "AppWorks",
    location: "Pune",
    type: "Full Time",
    experience: "1–3 Years",
    salary: "₹7–12 LPA",
    posted: "3 days ago",
    logo: "AW",
    description:
      "AppWorks is looking for an Angular Developer to build scalable and responsive enterprise applications.",
    responsibilities: [
      "Develop Angular applications.",
      "Create reusable frontend components.",
      "Integrate backend APIs.",
      "Improve application performance."
    ],
    requirements: [
      "Strong knowledge of Angular.",
      "Good TypeScript knowledge.",
      "Understanding of REST APIs.",
      "Knowledge of Git."
    ],
    skills: ["Angular", "TypeScript", "JavaScript", "REST APIs"]
  }
];

const categoryMap = {
  1: "Software & Technology",
  2: "Software & Technology",
  3: "Design & Creative",
  4: "Software & Technology",
  5: "Software & Technology",
  6: "Software & Technology",
  7: "Design & Creative",
  8: "Software & Technology",
  9: "Data & Analytics",
  10: "Software & Technology",
  11: "Software & Technology",
  12: "Design & Creative",
  13: "Engineering",
  14: "Data & Analytics",
  15: "Finance & Business",
  16: "Software & Technology",
  17: "Software & Technology",
  18: "Engineering",
  19: "Marketing",
  20: "Software & Technology",
  21: "Software & Technology",
  22: "Finance & Business",
  23: "Software & Technology",
  24: "Data & Analytics",
  25: "Software & Technology",
  26: "Marketing",
  27: "Software & Technology",
  28: "Design & Creative",
  29: "Software & Technology",
  30: "Engineering",
  31: "Marketing",
  32: "Software & Technology"
};

const categorizedJobs = jobs.map((job) => ({
  ...job,
  category: categoryMap[job.id]
}));

export default categorizedJobs;