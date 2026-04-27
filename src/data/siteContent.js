export const contact = {
  email: 'abhijeetpratapsingh@icloud.com',
  github: 'https://github.com/abhijeetpratapsingh',
  linkedin: 'https://www.linkedin.com/in/psabhijeet/',
  location: 'Bengaluru, India',
}

export function isRealProfileUrl(url) {
  if (!url) return false

  const trimmed = url.trim()

  return trimmed !== 'https://github.com/' && trimmed !== 'https://www.linkedin.com/'
}

export const heroStats = [
  { value: '7 Years', label: 'shipping mobile products' },
  { value: '5+ Apps', label: 'published and maintained' },
  { value: '98%', label: 'crash-free sessions achieved' },
]

export const proofPoints = [
  'Flutter architecture for long-lived mobile products',
  'Offline-first workflows for field and enterprise teams',
  'Practical AI tooling designed around engineering bottlenecks',
]

export const impactMetrics = [
  {
    value: '40%',
    label: 'reduction in app load time through widget and state optimizations',
  },
  {
    value: '70%',
    label: 'faster background sync after SQL and dependency cleanup',
  },
  {
    value: '50%',
    label: 'less manual JavaScript-to-Dart conversion effort with Dartly',
  },
  {
    value: '3,000+',
    label: 'messages per second supported on chatbot infrastructure',
  },
]

export const featuredProjects = [
  {
    slug: 'aurigo-build-mobile',
    title: 'Aurigo Build Mobile',
    eyebrow: 'Offline-first construction operations',
    category: 'Enterprise mobile',
    roleLabel: 'Senior Flutter Engineer',
    team: '4 engineers',
    timeline: '2022 - Present',
    outcomeLabel: 'Config+ shipped in 90 days',
    summary:
      'Built a high-volume field inspection application for low-connectivity environments and led delivery of a JSON-driven configuration system under an aggressive timeline.',
    impact:
      'Delivered Config+ in 90 days and improved sync performance by 70% through query and dependency optimization.',
    stack: ['Flutter', 'Dart', 'SQLite', 'BLoC', 'REST APIs'],
    challenge:
      'Construction inspectors needed a reliable mobile workflow for complex data capture even when network conditions were poor.',
    role:
      'Core Flutter developer responsible for app architecture, key modules, and sync performance improvements.',
    approach: [
      'Designed foundational application modules for offline-first inspection workflows.',
      'Implemented Config+, a dynamic JSON-powered form configuration layer to shorten feature rollout cycles.',
      'Refined data synchronization by optimizing SQL access patterns and removing inefficient third-party libraries.',
    ],
    outcome: [
      'Enabled inspectors to capture and manage large volumes of project data in the field.',
      'Outperformed the original delivery plan by shipping a major capability in 90 days with a 4-person team.',
      'Raised background sync throughput by 70%, improving operational reliability for field users.',
    ],
    learnings:
      'Offline-first systems succeed when architecture, sync behavior, and configurability are treated as product features rather than implementation details.',
  },
  {
    slug: 'dartly',
    title: 'Dartly',
    eyebrow: 'Internal AI developer tooling',
    category: 'AI tooling',
    roleLabel: 'Product engineer',
    team: 'Internal initiative',
    timeline: '2024',
    outcomeLabel: '50% less manual conversion work',
    summary:
      'Designed a GPT-powered internal tool that converts business-specific JavaScript patterns into Dart to accelerate Flutter development.',
    impact:
      'Reduced manual translation time by 50% and created a practical AI workflow for an engineering team.',
    stack: ['LLM Workflows', 'Prompt Engineering', 'Dart', 'JavaScript'],
    challenge:
      'Teams were spending too much time manually translating business-specific JavaScript logic into Dart during product development.',
    role:
      'Designed and developed the internal AI conversion workflow around business-specific code patterns.',
    approach: [
      'Mapped repeatable JavaScript translation patterns that were slowing down implementation.',
      'Built a custom GPT-driven conversion workflow tailored to business rules rather than generic code translation.',
      'Focused on responsible output quality by narrowing the tool to high-value use cases the team could validate quickly.',
    ],
    outcome: [
      'Cut code conversion effort by half for common workflows.',
      'Improved development velocity on Flutter features that depended on pre-existing JavaScript business logic.',
      'Demonstrated how targeted AI tooling can solve narrow but expensive engineering bottlenecks.',
    ],
    learnings:
      'AI tools create the most value when they are scoped to a narrow operational problem with clear validation rules and fast human review loops.',
  },
  {
    slug: 'sitevision',
    title: 'SiteVision',
    eyebrow: 'AI-powered site analysis',
    category: 'Applied AI systems',
    roleLabel: 'Backend + AI engineer',
    team: 'Product collaboration',
    timeline: '2024',
    outcomeLabel: 'Reporting workflow automated',
    summary:
      'Developed an AI backend service to analyze construction imagery for progress reporting, safety compliance, and privacy protection.',
    impact:
      'Automated reporting inputs across manpower, equipment, PPE, and progress detection in a single workflow.',
    stack: ['AI Services', 'Computer Vision', 'Backend Systems', 'Cloud'],
    challenge:
      'Construction teams needed faster and more consistent progress visibility from field imagery without compromising worker privacy.',
    role:
      'Designed and developed the backend service for image analysis and report generation.',
    approach: [
      'Structured a pipeline for manpower and equipment identification across construction scenes.',
      'Included PPE detection and face blurring to address compliance and privacy requirements.',
      'Focused the service on daily reporting workflows instead of generic image analysis output.',
    ],
    outcome: [
      'Created a practical reporting workflow from raw site imagery.',
      'Added safety and privacy protections directly into the analysis pipeline.',
    ],
    learnings:
      'Applied AI systems are most useful when their outputs fit operational reporting workflows, not when they maximize model complexity.',
  },
  {
    slug: 'botmywork-chatbot-builder',
    title: 'BotMyWork Chatbot Builder',
    eyebrow: 'Scalable messaging automation',
    category: 'Platform engineering',
    roleLabel: 'Frontend engineer',
    team: 'Cross-functional product team',
    timeline: '2019 - 2022',
    outcomeLabel: '3,000+ messages per second',
    summary:
      'Contributed to a high-throughput chatbot platform for Facebook Messenger with automation, live chat, and lead generation workflows.',
    impact:
      'Supported a platform capable of handling more than 3,000 messages per second.',
    stack: ['Angular', 'JavaScript', 'AWS Lambda', 'SQS', 'MongoDB'],
    challenge:
      'The platform had to support large-scale conversational automation while staying flexible for marketing and support workflows.',
    role:
      'Contributed to UI development and broader delivery across the software lifecycle.',
    approach: [
      'Built and maintained reusable UI components for the platform.',
      'Worked across reviews, issue resolution, and feature delivery with cross-functional teams.',
      'Contributed to product capabilities such as custom flows, broadcasts, live chat, and lead generation.',
    ],
    outcome: [
      'Helped deliver a scalable chatbot workflow engine for conversational marketing use cases.',
      'Supported a product capable of operating at high messaging throughput.',
    ],
    learnings:
      'Scalable systems need both operational backend capacity and disciplined UI composition so complex workflows stay usable.',
  },
]

export const experience = [
  {
    company: 'Aurigo Software Private Limited',
    role: 'Senior Software Engineer II',
    period: "Dec 2024 - Present",
    details:
      'Flutter engineering across mobile architecture, performance, publishing, internal AI tooling, and construction-tech product delivery.',
    achievements: [
      'Led Flutter delivery across offline-first mobile workflows used in construction operations.',
      'Worked on performance, release readiness, and internal AI tooling that improved team execution.',
    ],
  },
  {
    company: 'Aurigo Software Private Limited',
    role: 'Senior Software Engineer I',
    period: "Mar 2022 - Dec 2024",
    details:
      'Built and stabilized cross-platform apps with BLoC, Provider, REST integrations, testing, and UX collaboration.',
    achievements: [
      'Shipped Config+ in 90 days with a 4-person team to accelerate configurable form delivery.',
      'Improved sync performance by 70% through SQL tuning and dependency cleanup.',
    ],
  },
  {
    company: 'CedCoss Technology Private Limited',
    role: 'Senior Software Developer',
    period: "Mar 2019 - Mar 2022",
    details:
      'Worked on web applications and chatbot product workflows, reusable UI systems, reviews, and release support.',
    achievements: [
      'Contributed to a chatbot product capable of supporting more than 3,000 messages per second.',
      'Built reusable UI workflows across automation, live chat, and lead generation features.',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Mobile',
    items: ['Flutter', 'Dart', 'BLoC', 'Provider', 'Riverpod', 'FCM', 'SQLite', 'Hive'],
  },
  {
    title: 'AI',
    items: ['Prompt Engineering', 'LLM Tooling', 'Generative AI Workflows', 'Applied AI Product Design'],
  },
  {
    title: 'Cloud & Backend',
    items: ['AWS', 'Firebase', 'Supabase', 'MongoDB', 'Firestore', 'REST APIs'],
  },
  {
    title: 'Web',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SASS', 'LESS'],
  },
  {
    title: 'Engineering Practice',
    items: ['OOP', 'SOLID', 'Testing', 'Performance Optimization', 'CI/CD', 'Agile Delivery'],
  },
]

export const certifications = [
  'Angular (Intermediate) - HackerRank',
  'Angular: Building Large Applications - LinkedIn',
  'Angular: Progressive Web Apps - LinkedIn',
  'Learning Amazon Web Services Lambda - LinkedIn',
  'ChatGPT Masterclass: A Complete ChatGPT Guide - Udemy',
  'Flutter BLoC, TDD & Clean Architecture - Udemy',
]

export const resumeSections = {
  summary:
    'Senior Software Engineer and Flutter + AI Engineer in Bengaluru, India with nearly 7 years of experience building cross-platform mobile applications, Dart architecture, offline-first workflows, and practical AI-powered internal tools. Focused on scalable architecture, performance, and product-ready execution.',
  education: 'B.Tech. (Computer Science), Goel Institute of Technology & Management, Lucknow - 2018',
  keyAreas: [
    'Mobile Application Architecture',
    'Cross-Platform Development',
    'Generative AI',
    'Performance Optimization',
    'RESTful API Integration',
    'Cloud Integration',
    'Continuous Integration and Deployment',
  ],
}
