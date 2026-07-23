import {
  FaCss3Alt,
  FaDatabase,
  FaEnvelope,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinkedinIn,
  FaPhp,
  FaPython,
  FaReact,
  FaWordpress,
} from 'react-icons/fa'
import { SiDart, SiDjango, SiFlutter, SiTailwindcss } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { FiCpu, FiLayers, FiServer } from 'react-icons/fi'

const svgDataUri = (svg) => `data:image/svg+xml,${encodeURIComponent(svg)}`

const marketplaceConceptCover = () =>
  svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1040" height="650" viewBox="0 0 1040 650">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#05080f"/>
          <stop offset=".58" stop-color="#08111f"/>
          <stop offset="1" stop-color="#0e1b2d"/>
        </linearGradient>
        <linearGradient id="panel" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#10243a" stop-opacity=".98"/>
          <stop offset="1" stop-color="#08101d" stop-opacity=".98"/>
        </linearGradient>
        <linearGradient id="blue" x1="0" x2="1">
          <stop offset="0" stop-color="#4DB8FF"/>
          <stop offset="1" stop-color="#A4DEFF"/>
        </linearGradient>
        <linearGradient id="soft" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#A4DEFF" stop-opacity=".34"/>
          <stop offset="1" stop-color="#4DB8FF" stop-opacity=".08"/>
        </linearGradient>
        <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#4DB8FF" stroke-opacity=".055" stroke-width="1"/>
        </pattern>
        <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="10" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="1040" height="650" fill="url(#bg)"/>
      <rect width="1040" height="650" fill="url(#grid)"/>
      <circle cx="804" cy="130" r="238" fill="#4DB8FF" opacity=".09"/>
      <circle cx="176" cy="570" r="250" fill="#79CCFF" opacity=".07"/>
      <rect x="70" y="56" width="900" height="538" rx="34" fill="#09111e" stroke="#4DB8FF" stroke-opacity=".34"/>
      <rect x="112" y="102" width="816" height="448" rx="30" fill="url(#panel)" stroke="#4DB8FF" stroke-opacity=".28"/>
      <rect x="148" y="134" width="744" height="58" rx="18" fill="#101f34" stroke="#4DB8FF" stroke-opacity=".16"/>
      <circle cx="180" cy="163" r="7" fill="#4DB8FF"/>
      <circle cx="208" cy="163" r="7" fill="#79CCFF" opacity=".62"/>
      <circle cx="236" cy="163" r="7" fill="#F7FAFC" opacity=".22"/>
      <rect x="744" y="151" width="118" height="24" rx="12" fill="#4DB8FF" fill-opacity=".12" stroke="#4DB8FF" stroke-opacity=".36"/>
      <text x="771" y="168" fill="#DDF3FF" font-family="Manrope, Arial, sans-serif" font-size="11" font-weight="800">CONCEPT</text>
      <text x="150" y="248" fill="#F7FAFC" font-family="Manrope, Arial, sans-serif" font-size="50" font-weight="800">Trendix</text>
      <text x="152" y="286" fill="#A7B3C3" font-family="Manrope, Arial, sans-serif" font-size="18" font-weight="600">Fashion marketplace blueprint</text>
      <rect x="152" y="328" width="78" height="34" rx="17" fill="#4DB8FF" fill-opacity=".14" stroke="#4DB8FF" stroke-opacity=".48"/>
      <text x="173" y="350" fill="#DDF3FF" font-family="Manrope, Arial, sans-serif" font-size="14" font-weight="800">UI/UX</text>
      <rect x="244" y="328" width="82" height="34" rx="17" fill="#4DB8FF" fill-opacity=".08" stroke="#4DB8FF" stroke-opacity=".34"/>
      <text x="266" y="350" fill="#DDF3FF" font-family="Manrope, Arial, sans-serif" font-size="14" font-weight="800">Merise</text>
      <rect x="340" y="328" width="124" height="34" rx="17" fill="#4DB8FF" fill-opacity=".08" stroke="#4DB8FF" stroke-opacity=".34"/>
      <text x="362" y="350" fill="#DDF3FF" font-family="Manrope, Arial, sans-serif" font-size="14" font-weight="800">Architecture</text>
      <rect x="152" y="422" width="248" height="14" rx="7" fill="#F7FAFC" opacity=".15"/>
      <rect x="152" y="458" width="176" height="14" rx="7" fill="#F7FAFC" opacity=".09"/>
      <rect x="516" y="226" width="330" height="232" rx="28" fill="#0A1626" stroke="#79CCFF" stroke-opacity=".34"/>
      <rect x="548" y="258" width="114" height="152" rx="22" fill="#0D1B2C" stroke="#4DB8FF" stroke-opacity=".32"/>
      <rect x="692" y="258" width="114" height="152" rx="22" fill="#0D1B2C" stroke="#4DB8FF" stroke-opacity=".24"/>
      <rect x="574" y="286" width="62" height="66" rx="16" fill="url(#soft)" stroke="#A4DEFF" stroke-opacity=".16"/>
      <path d="M592 346 L605 302 L619 346" fill="none" stroke="#DDF3FF" stroke-opacity=".58" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M724 348 C730 308 769 308 776 348" fill="none" stroke="#DDF3FF" stroke-opacity=".5" stroke-width="4" stroke-linecap="round"/>
      <rect x="572" y="372" width="68" height="10" rx="5" fill="#A4DEFF" opacity=".45"/>
      <rect x="718" y="372" width="68" height="10" rx="5" fill="#A4DEFF" opacity=".34"/>
      <rect x="548" y="436" width="86" height="28" rx="10" fill="#08101d" stroke="#4DB8FF" stroke-opacity=".24"/>
      <text x="569" y="455" fill="#A4DEFF" font-family="Manrope, Arial, sans-serif" font-size="11" font-weight="800">Catalog</text>
      <rect x="654" y="436" width="86" height="28" rx="10" fill="#08101d" stroke="#4DB8FF" stroke-opacity=".24"/>
      <text x="679" y="455" fill="#A4DEFF" font-family="Manrope, Arial, sans-serif" font-size="11" font-weight="800">Cart</text>
      <rect x="760" y="436" width="86" height="28" rx="10" fill="#08101d" stroke="#4DB8FF" stroke-opacity=".24"/>
      <text x="782" y="455" fill="#A4DEFF" font-family="Manrope, Arial, sans-serif" font-size="11" font-weight="800">Order</text>
      <g filter="url(#glow)">
        <circle cx="486" cy="420" r="5" fill="#A4DEFF"/>
        <circle cx="868" cy="236" r="5" fill="#A4DEFF"/>
      </g>
    </svg>
  `)

export const profile = {
  name: 'Khaoula El Hkim',
  logo: 'KHAOULA',
  role: 'Full Stack Developer',
  location: 'Marrakech, Morocco',
  email: 'khaoulaelhkim@gmail.com',
  phone: '0631664446',
  github: 'https://github.com/Elhkim-khaoula',
  // TODO: Replace with the real full LinkedIn profile URL.
  linkedin: '#',
  cv: '/Khaoula_El_Hkim_CV.pdf',
}

export const navLinks = [
  { label: 'Home', href: '#accueil' },
  { label: 'Projects', href: '#projets' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#a-propos' },
  { label: 'Journey', href: '#parcours' },
  { label: 'Contact', href: '#contact' },
]

export const socials = [
  { label: 'GitHub', href: profile.github, icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedin, icon: FaLinkedinIn },
  { label: 'Email', href: `mailto:${profile.email}`, icon: FaEnvelope },
]

export const techStack = [
  { name: 'React', icon: FaReact },
  { name: 'JavaScript', icon: FaJs },
  { name: 'Django', icon: SiDjango },
  { name: 'Python', icon: FaPython },
  { name: 'PHP', icon: FaPhp },
  { name: 'SQL', icon: FaDatabase },
  { name: 'Java', icon: FaJava },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'WordPress', icon: FaWordpress },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Figma', icon: FaFigma },
]

// TODO: Replace # URLs and concept covers with real repositories, demos, and screenshots when available.
export const projects = [
  {
    title: 'Print-on-Demand Platform',
    slug: 'print-on-demand',
    category: 'Application Full Stack',
    description:
      'Full Stack platform for custom print-on-demand products, with authentication and user-focused features.',
    technologies: ['React.js', 'Django', 'Python'],
    image: '/projects/print-on-demand-home.png',
    detailsHref: '#project/print-on-demand',
    details:
      'Artify is a print-on-demand platform with a product storefront, a designer workspace, and a dashboard for tracking designs, sales, and earnings.',
    highlights: ['Product catalog', 'Designer workspace', 'Financial tracking', 'Design uploads'],
    gallery: [
      {
        src: '/projects/print-on-demand-home.png',
        title: 'Home',
        description: 'Premium landing view with navigation to the catalog and designer workspace.',
      },
      {
        src: '/projects/print-on-demand-catalog.png',
        title: 'Catalog',
        description: 'E-commerce product grid with product cards, favorites, categories, and pricing.',
      },
      {
        src: '/projects/print-on-demand-dashboard.png',
        title: 'Designer Dashboard',
        description: 'Overview for balance, active designs, and sold products.',
      },
      {
        src: '/projects/print-on-demand-upload-details.png',
        title: 'Design details',
        description: 'Structured form for the title, category, price, and tags.',
      },
      {
        src: '/projects/print-on-demand-customizer.png',
        title: 'Product customizer',
        description: 'Visual editor for placing artwork on a product before adding it to the cart.',
      },
      {
        src: '/projects/print-on-demand-cart.png',
        title: 'Cart',
        description: 'Cart summary with quantity controls, total price, and checkout access.',
      },
      {
        src: '/projects/print-on-demand-checkout.png',
        title: 'Checkout',
        description: 'Order flow with shipping address, payment method, and secure summary.',
      },
      {
        src: '/projects/print-on-demand-orders.png',
        title: 'My orders',
        description: 'Customer order history with statuses, item counts, and totals.',
      },
      {
        src: '/projects/print-on-demand-designer-portfolio.png',
        title: 'Designer Portfolio',
        description: 'Complete personal catalog view with filters and published designs.',
      },
    ],
    github: '#',
    demo: '#',
  },
{
    title: 'Restaurant Reservation App',
    slug: 'restaurant-reservation',
    category: 'Mobile App',
    description: 'Mobile app designed to manage table reservations and restaurant customers.',
    technologies: ['Flutter', 'Dart'],
    image: '/projects/restaurant-home.jpeg',
    detailsHref: '#project/restaurant-reservation',
    details:
      'Resto Marco is a mobile restaurant experience with animated browsing, menu categories, cart management, checkout, and admin tools for staff and food items.',
    highlights: ['Animated mobile UI', 'Menu categories', 'Cart and checkout', 'Admin dashboard'],
    gallery: [
      {
        src: '/projects/restaurant-home.jpeg',
        title: 'Home',
        description: 'Animated landing screen with featured meals, quick categories, and direct access to the cart.',
      },
      {
        src: '/projects/restaurant-menu.jpeg',
        title: 'Menu Categories',
        description: 'Category selection view for salads, pizzas, dishes, and juices.',
      },
      {
        src: '/projects/restaurant-salads.jpeg',
        title: 'Salads',
        description: 'Product grid for salad items with prices and add-to-cart actions.',
      },
      {
        src: '/projects/restaurant-juices.jpeg',
        title: 'Juices',
        description: 'Juice category view with menu cards, prices, and cart shortcuts.',
      },
      {
        src: '/projects/restaurant-cart.jpeg',
        title: 'Cart',
        description: 'Cart screen with item quantities, totals, and checkout navigation.',
      },
      {
        src: '/projects/restaurant-checkout.jpeg',
        title: 'Checkout',
        description: 'Checkout flow with order summary, customer information, and payment fields.',
      },
      {
        src: '/projects/restaurant-admin-staff.jpeg',
        title: 'Admin Staff',
        description: 'Admin dashboard tab for managing staff members, roles, shifts, and status.',
      },
      {
        src: '/projects/restaurant-admin-food.jpeg',
        title: 'Admin Food',
        description: 'Admin dashboard tab for managing food items, prices, popularity, and actions.',
      },
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'IT Ticket Management',
    slug: 'it-ticket-management',
    category: 'Web App',
    description:
      'CRUD application for creating, editing, tracking, and deleting IT support tickets.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: '/projects/it-tickets-list.jpeg',
    detailsHref: '#project/it-ticket-management',
    details:
      'A web-based IT ticket management interface for creating, viewing, filtering, and organizing support tickets by client, assignee, status, priority, and category.',
    highlights: ['Ticket table', 'Create modal', 'Filtering', 'Status tracking'],
    gallery: [
      {
        src: '/projects/it-tickets-list.jpeg',
        title: 'Ticket List',
        description: 'Main ticket management table with assignees, statuses, priorities, categories, and quick actions.',
      },
      {
        src: '/projects/it-tickets-create.jpeg',
        title: 'Create Ticket',
        description: 'Ticket creation modal with required fields for title, description, priority, category, assignee, status, and client.',
      },
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'Weather App',
    slug: 'weather-app',
    category: 'Front-end',
    description: 'Front-end app displaying real-time weather data from an API.',
    technologies: ['JavaScript', 'API'],
    image: '/projects/weather-marrakech.jpeg',
    detailsHref: '#project/weather-app',
    details:
      'A responsive weather application that lets users search Moroccan cities and view current temperature, humidity, and wind speed through a clean visual interface.',
    highlights: ['City search', 'Weather API', 'Responsive UI', 'Live conditions'],
    gallery: [
      {
        src: '/projects/weather-marrakech.jpeg',
        title: 'Marrakech Weather',
        description: 'Weather result screen showing temperature, humidity, and wind speed for Marrakech.',
      },
      {
        src: '/projects/weather-rabat.jpeg',
        title: 'Rabat Weather',
        description: 'Second city result showing how the interface updates based on the searched location.',
      },
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'Travel Blog',
    slug: 'travel-blog',
    category: 'WordPress',
    description:
      'Travel planning website highlighting destinations and activities across Morocco.',
    technologies: ['WordPress', 'Travel Planning'],
    image: '/projects/travel-blog-home.jpeg',
    detailsHref: '#project/travel-blog',
    details:
      'A WordPress travel blog built around Moroccan destinations, recent tours, destination stories, and a visual memories gallery.',
    highlights: ['WordPress site', 'Morocco travel stories', 'Tour cards', 'Visual gallery'],
    gallery: [
      {
        src: '/projects/travel-blog-home.jpeg',
        title: 'Home',
        description: 'Introductory landing section with personal travel storytelling and Moroccan visual identity.',
      },
      {
        src: '/projects/travel-blog-tours.jpeg',
        title: 'Recent Tours',
        description: 'Tour cards presenting Moroccan experiences, food, destinations, and read-more links.',
      },
      {
        src: '/projects/travel-blog-destinations.jpeg',
        title: 'Destinations',
        description: 'Story-focused destination section featuring the Moroccan Sahara and Akchour.',
      },
      {
        src: '/projects/travel-blog-memories.jpeg',
        title: 'Best Memories',
        description: 'Photo gallery section highlighting colors, traditions, landscapes, and travel moments.',
      },
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'To-Do List',
    slug: 'todo-list',
    category: 'Front-end',
    description: 'Task manager with create, edit, delete, and status tracking features.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: '/projects/todo-list-app.jpeg',
    detailsHref: '#project/todo-list',
    details:
      'A front-end task management app with a polished sky-themed interface, progress tracking, task creation, completion states, editing, and deletion actions.',
    highlights: ['Task creation', 'Progress counter', 'Edit actions', 'Delete actions'],
    gallery: [
      {
        src: '/projects/todo-list-app.jpeg',
        title: 'To-Do Dashboard',
        description: 'Main task board with progress tracking, completed tasks, edit buttons, and delete controls.',
      },
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'Marketplace Trendix',
    slug: 'marketplace-trendix',
    category: 'Design',
    description:
      'Technical architecture and database modeling for a fashion marketplace concept.',
    technologies: ['UI/UX', 'Merise', 'Architecture'],
    image: marketplaceConceptCover(),
    detailsHref: '#project/marketplace-trendix',
    details:
      'Trendix is a fashion marketplace concept project focused on planning the user experience, organizing the technical architecture, and modeling the database before development.',
    highlights: ['Fashion marketplace', 'UI/UX structure', 'Merise modeling', 'Technical architecture'],
    hideScreens: true,
    summary: [
      {
        title: 'Purpose',
        description: 'Define a clear fashion marketplace experience for browsing products, categories, customers, carts, and orders.',
      },
      {
        title: 'Design Work',
        description: 'Prepare the UI/UX structure and user journey without presenting it as a finished live marketplace.',
      },
      {
        title: 'Data Model',
        description: 'Use Merise and architecture planning to structure products, users, orders, categories, and key relationships.',
      },
    ],
    github: '#',
    demo: '#',
  },
]

export const services = [
  {
    title: 'Front-end Development',
    description:
      'Modern, smooth, responsive interfaces built with React.js, JavaScript, HTML, and CSS.',
    icon: FiLayers,
  },
  {
    title: 'Back-end Development',
    description:
      'Business logic, authentication, and API development with Django, Python, and PHP.',
    icon: FiServer,
  },
  {
    title: 'Databases and Design',
    description:
      'UML and Merise modeling, technical architecture, and SQL database management.',
    icon: FiCpu,
  },
]

export const stats = [
  { value: 7, suffix: '', label: 'completed projects' },
  { value: 10, suffix: '+', label: 'technologies' },
  { value: 3, suffix: '', label: 'internship experiences' },
  { value: 2, suffix: '', label: 'training fields' },
]

export const process = [
  {
    number: '01',
    title: 'Analysis',
    description: 'Understand the goals, users, and needs of the project.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Prepare the architecture, database structure, and user experience.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Build the components, features, and integrations of the project.',
  },
  {
    number: '04',
    title: 'Tests',
    description: 'Fix issues, optimize behavior, and improve overall application quality.',
  },
]

export const skillGroups = [
  { title: 'Front-end', skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { title: 'Back-end', skills: ['Django', 'Python', 'PHP', 'Java'] },
  { title: 'Mobile', skills: ['Flutter', 'Dart'] },
  { title: 'Databases', skills: ['SQL', 'Merise', 'UML'] },
  { title: 'Tools', skills: ['Git', 'GitHub', 'Figma', 'VS Code', 'WordPress', 'Agile Scrum'] },
]

export const skillIcons = {
  'React.js': FaReact,
  JavaScript: FaJs,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  'Tailwind CSS': SiTailwindcss,
  Django: SiDjango,
  Python: FaPython,
  PHP: FaPhp,
  Java: FaJava,
  Flutter: SiFlutter,
  Dart: SiDart,
  SQL: FaDatabase,
  GitHub: FaGithub,
  Figma: FaFigma,
  'VS Code': VscVscode,
  WordPress: FaWordpress,
}

export const experience = [
  {
    place: 'HaroVision',
    date: 'September 2025',
    role: 'Observation Intern',
    description: 'Designed and developed a CRUD ticket management website with JavaScript.',
  },
  {
    place: 'ONEE',
    date: 'May 2024 - July 2024',
    role: 'Water Branch Intern',
    description:
      'Technical study for sizing the drinking water network of the Harbil rural municipality.',
  },
  {
    place: 'Agence du Bassin Hydraulique du Tensift',
    date: 'May 2023 - June 2023',
    role: 'Final-Year Internship',
    description:
      'Technical study on flood risks and protection measures in the Essaouira region.',
  },
]

export const education = [
  {
    place: 'Ecole Racine',
    date: '2024 - Present',
    title: 'Specialized Technician in Full Stack Software Development',
  },
  {
    place: 'FST Marrakech',
    date: '2022 - 2023',
    title: 'Bachelor Degree in Water and Environment',
  },
  {
    place: 'FST Marrakech',
    date: '2021 - 2022',
    title: 'DEUST',
  },
]

export const faq = [
  {
    question: 'What type of opportunity are you looking for?',
    answer:
      'I am looking for a development internship, freelance mission, or junior opportunity in Full Stack, front-end, or back-end web development.',
  },
  {
    question: 'Which technologies do you mainly use?',
    answer:
      'I mainly use React.js, JavaScript, Django, Python, PHP, and SQL, with additional experience in Java, Flutter, Dart, and WordPress.',
  },
  {
    question: 'Are you available for an internship?',
    answer: 'Yes, I am available for an internship or a first professional opportunity.',
  },
  {
    question: 'Where are you based?',
    answer: 'I am based in Marrakech, Morocco.',
  },
  {
    question: 'How can I view your projects?',
    answer:
      'My projects are presented in the Projects section. GitHub and demo links will be added progressively.',
  },
]

export const aboutText = [
  'I am Khaoula El Hkim, a software development graduate passionate about building modern web applications. I specialize in Full Stack technologies, especially React.js, Django, Python, PHP, and SQL.',
  'My scientific background in Water and Environment helped me develop strong analytical thinking, rigor, and a structured approach to problem solving.',
  'Familiar with Agile Scrum, Git, GitHub, Figma, and Merise/UML modeling, I am looking for an internship or a first professional opportunity within a dynamic team.',
]

export const aboutIcons = [FaReact, SiDjango, FaPython, FaPhp, FaDatabase, FaFigma]
