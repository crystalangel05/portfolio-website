const site = {
  name: 'Crystalangel Mujawo',
  shortName: 'Crystalangel',
  role: 'Computer Information Systems student',
  location: 'Harare, Zimbabwe',
  email: 'mujawocrystal@gmail.com',
  phone: '+263789795662',
  phoneDisplay: '+263 78 979 5662',
  linkedin: 'https://www.linkedin.com/in/crystal-mujawo-536446374',
  github: 'https://github.com/crystalangel05',
  availability: 'Open to Remote Opportunities',
  headline: 'Building practical web experiences, one project at a time.',
  subtitle:
    'Computer Information Systems student focused on frontend development, JavaScript, and React.',
  goal:
    'I am building my skills toward becoming a frontend developer and am actively looking for remote frontend development internships, junior opportunities, and entry-level software development roles.',
  about: [
    'I’m a Computer Information Systems student at Africa University with a growing focus on frontend development. I enjoy turning ideas into practical, user-friendly web applications and learning by building real projects.',
    'I’ve worked with HTML, CSS, JavaScript, React, Firebase, SQL, Git, GitHub, APIs, and responsive web design.',
    "I'm especially interested in remote frontend development opportunities where I can contribute to real products, learn from experienced developers, receive feedback, and continue growing as a software developer.",
  ],
  education: {
    degree: 'BSc Computer Information Systems',
    school: 'Africa University',
    years: '2024–2028',
  },
  certifications: [
    'freeCodeCamp Responsive Web Design Certification',
    'freeCodeCamp JavaScript Certification',
  ],
  experience: [
    {
      title: 'Tech Bridge Tech Mentorship Program',
      role: 'Selected participant',
      year: '2026',
      detail:
        'Selected as a participant in a tech mentorship program while continuing to build frontend skills through personal projects.',
    },
    {
      title: 'Handmade slides & footwear business',
      role: 'Founder / operator',
      year: 'Alongside university',
      detail:
        'I run a small handmade slides and footwear business. I manage product creation, orders, pricing, customer communication, sales, and production alongside my studies.',
    },
  ],
  skills: [
    { name: 'HTML5', group: 'Frontend' },
    { name: 'CSS3', group: 'Frontend' },
    { name: 'JavaScript', group: 'Frontend' },
    { name: 'Responsive Web Design', group: 'Frontend' },
    { name: 'React', group: 'Frontend' },
    { name: 'Firebase', group: 'Frontend' },
    { name: 'Firebase', group: 'Currently learning', learning: true },
    { name: 'Django', group: 'Currently learning', learning: true },
    { name: 'Next.js', group: 'Currently learning', learning: true },
    { name: 'SQL', group: 'Tools & data' },
    { name: 'Git', group: 'Tools & data' },
    { name: 'GitHub', group: 'Tools & data' },
    { name: 'Local Storage', group: 'Tools & data' },
    { name: 'API integration', group: 'Tools & data' },
  ],
  projects: [
    {
      name: 'ResumeCraft AI',
      status: 'Live',
      statusKind: 'live',
      description:
        'An AI-powered resume builder that helps users create professional, ATS-friendly resumes.',
      features: [
        'AI-generated professional resume summaries',
        'Resume templates',
        'ATS-friendly resumes',
        'Profile photo upload',
        'Resume customization',
        'PDF download',
        'AI API integration',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'AI API'],
      live: 'https://crystalangel05.github.io/ResumeCraftAI/',
      github: 'https://github.com/crystalangel05/ResumeCraftAI',
    },
    {
      name: 'Expense Tracker',
      status: 'Live',
      statusKind: 'live',
      description: 'A simple web application for tracking income and expenses.',
      features: [
        'Add income and expenses',
        'View and delete transactions',
        'Automatic income and expense totals',
        'Current balance',
        'Data persistence with Local Storage',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      live: 'https://crystalangel05.github.io/expense-tracker/',
      github: 'https://github.com/crystalangel05/expense-tracker',
    },
    {
      name: 'OrderFlow',
      status: 'In Progress',
      statusKind: 'wip',
      description:
        'A business management dashboard for small product-based businesses. Planned around products, orders, customers, inventory, and basic analytics.',
      note:
        'This is my upcoming React project. I am building it because I run a small handmade footwear business and understand the challenges of managing orders, customers, stock, and sales by hand. Features are still being planned and built — nothing here is claimed as complete yet.',
      tech: ['React', 'JavaScript', 'React Router', 'Firebase', 'Local Storage'],
      live: null,
      github: 'https://github.com/crystalangel05/ecommerce-react-website.git',
    },
  ],
  journal: [
    {
      title: 'Learning React while still in university',
      date: 'Sample post',
      tag: 'React',
      excerpt:
        'A placeholder for notes on how I am approaching React: components, props, state, and building small interfaces that feel useful rather than theoretical.',
      draft: true,
    },
    {
      title: 'Why I’m building OrderFlow',
      date: 'Sample post',
      tag: 'OrderFlow',
      excerpt:
        'A placeholder for writing about the messy, real-world problems of running a small handmade business — and how that is shaping a React dashboard I am still working on.',
      draft: true,
    },
    {
      title: 'What building projects taught me that lectures didn’t',
      date: 'Sample post',
      tag: 'Learning',
      excerpt:
        'A placeholder for lessons from shipping ResumeCraft AI and the Expense Tracker: local storage, APIs, responsive layouts, and learning in public as a student.',
      draft: true,
    },
  ],
}

export default site
