export const siteConfig = {
  name: "Carlos Cuesta",
  siteName: "Carlos's Corner",
  location: "Barcelona, Spain",
  title: "Front End Engineer",
  tagline: "I'm a Front End Engineer based in Barcelona. I code, write and run bueno.studio.",
  description: "I love working in-between product, engineering and developer experience, currently at Apple.",
  avatar: "/avatar.svg",
  rssUrl: "/rss.xml",
};

export const socialLinks = [
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Email", url: "mailto:hello@example.com", icon: "email" },
  { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
];

export const writings = [
  { 
    title: "Automated macOS Dev Setup", 
    date: "May 03, 2025", 
    views: 1112, 
    slug: "automated-macos-dev-setup",
    description: "How I automated my entire macOS development environment setup with a single script."
  },
  { 
    title: "Building Server-Driven UIs", 
    date: "Oct 04, 2024", 
    views: 2018, 
    slug: "building-server-driven-uis",
    description: "Exploring the architecture and benefits of server-driven UI patterns in modern applications."
  },
  { 
    title: "Writing RFCs", 
    date: "Mar 02, 2024", 
    views: 2223, 
    slug: "writing-rfcs",
    description: "A guide to writing effective Request for Comments documents for technical decisions."
  },
  { 
    title: "React Miami 2023", 
    date: "Apr 22, 2023", 
    views: 2090, 
    slug: "react-miami-2023",
    description: "Highlights and takeaways from React Miami 2023 conference."
  },
  { 
    title: "Effective Refactoring with Codemods", 
    date: "Jan 29, 2023", 
    views: 2082, 
    slug: "effective-refactoring-codemods",
    description: "Using codemods to automate large-scale code refactoring safely and efficiently."
  },
  { 
    title: "Using Generators to Improve Developer Productivity", 
    date: "May 23, 2022", 
    views: 2025, 
    slug: "generators-developer-productivity",
    description: "How code generators can eliminate boilerplate and boost team productivity."
  },
  { 
    title: "Writing Architecture Decision Records", 
    date: "Mar 01, 2022", 
    views: 1570, 
    slug: "architecture-decision-records",
    description: "Documenting architectural decisions to preserve context for future developers."
  },
  { 
    title: "Composing UIs with Finite State Machines", 
    date: "May 03, 2021", 
    views: 6626, 
    slug: "finite-state-machines",
    description: "Building predictable and maintainable UI components using state machines."
  },
];

export const projects = [
  {
    name: "gitmoji",
    description: "An emoji guide for your commit messages.",
    emoji: "😜",
    language: "TypeScript",
    stars: 16596,
    url: "https://github.com/carloscuesta/gitmoji",
  },
  {
    name: "gitmoji-cli",
    description: "A gitmoji interactive cli tool for using emojis on commits.",
    emoji: "💻",
    language: "JavaScript",
    stars: 4797,
    url: "https://github.com/carloscuesta/gitmoji-cli",
  },
  {
    name: "materialshell",
    description: "A material design theme for your terminal.",
    emoji: "✨",
    language: "Shell",
    stars: 843,
    url: "https://github.com/carloscuesta/materialshell",
  },
  {
    name: "react-native-error-boundary",
    description: "A simple React-Native error boundary component",
    emoji: "🐛",
    language: "TypeScript",
    stars: 595,
    url: "https://github.com/carloscuesta/react-native-error-boundary",
  },
  {
    name: "starterkit",
    description: "A Front End development Gulp.js based workflow.",
    emoji: "🚀",
    language: "JavaScript",
    stars: 89,
    url: "https://github.com/carloscuesta/starterkit",
  },
  {
    name: "hyper-materialshell",
    description: "A material design theme for Hyper based on materialshell.",
    emoji: "✨",
    language: "JavaScript",
    stars: 69,
    url: "https://github.com/carloscuesta/hyper-materialshell",
  },
];

export const talks = [
  {
    title: "Building Scalable Design Systems",
    event: "React Summit 2024",
    date: "Jun 14, 2024",
    location: "Amsterdam",
    videoUrl: "https://youtube.com",
    slidesUrl: "https://slides.com",
  },
  {
    title: "The Future of Frontend Architecture",
    event: "JSConf EU",
    date: "May 20, 2023",
    location: "Berlin",
    videoUrl: "https://youtube.com",
    slidesUrl: "https://slides.com",
  },
  {
    title: "State Machines in Production",
    event: "React Miami",
    date: "Apr 22, 2023",
    location: "Miami",
    videoUrl: "https://youtube.com",
    slidesUrl: "https://slides.com",
  },
];

export const workHistory = [
  {
    company: "Apple",
    role: "Senior Software Engineer",
    period: "2025 – Now",
    logo: "/companies/apple.svg",
  },
  {
    company: "N26",
    roles: [
      { title: "Lead Web Engineer", period: "2022 – 2025" },
      { title: "Senior Web Engineer", period: "2021 – 2022" },
    ],
    logo: "/companies/n26.svg",
  },
  {
    company: "Ulabox",
    roles: [
      { title: "Lead Front End Engineer", period: "2018 – 2021" },
      { title: "Front End Engineer", period: "2017 – 2018" },
    ],
    logo: "/companies/ulabox.svg",
  },
  {
    company: "Mediàtic",
    role: "Front End Developer",
    period: "2015 – 2016",
    logo: "/companies/mediatic.svg",
  },
  {
    company: "Friendly Rentals",
    role: "Front End Developer Intern",
    period: "2014 – 2015",
    logo: "/companies/friendly-rentals.svg",
  },
];

export const aboutContent = {
  intro: `Hey there! 👋. I'm Carlos, a Front End Engineer based in Barcelona, that loves to code and build products with a delightful user experience.`,
  current: `Currently working at Apple as a Senior Software Engineer. Before that I worked at N26, building the digital bank the world loves to use.`,
  passion: `I love working in between product, engineering and developer experience. Some things that make me excited are JavaScript, Open Source, CI & CD systems, simplicity, automating things and building meaningful user-centric products.`,
  background: `I was born and raised in Badalona next to the mediterranean sea and come from a background of studying Computer Science.`,
  outside: `Outside of work, I'm obsessed with sports, doing open source and travelling with my family.`,
};

export const photos = [
  { src: "/photos/photo1.svg", alt: "Wife & I ❣️", caption: "Wife & I ❣️" },
  { src: "/photos/photo2.svg", alt: "Miami '23 🏖️", caption: "Miami '23 🏖️" },
  { src: "/photos/photo3.svg", alt: "Longboard 🛹", caption: "Longboard 🛹" },
];

// ISO 3166-1 alpha-3 country codes for visited countries
export const visitedCountries = [
  "ESP", // Spain
  "FRA", // France
  "ITA", // Italy
  "PRT", // Portugal
  "GBR", // United Kingdom
  "DEU", // Germany
  "NLD", // Netherlands
  "BEL", // Belgium
  "CHE", // Switzerland
  "AUT", // Austria
  "GRC", // Greece
  "USA", // United States
  "MEX", // Mexico
  "CUB", // Cuba
  "MAR", // Morocco
  "THA", // Thailand
  "JPN", // Japan
];
