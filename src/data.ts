export type Category = "Finance & Accounting" | "IT & Data" | "Marketing & Design";
export type Course = {
  name: string;
  category: Category;
  hours: string;
  chapters: number;
  detail: string;
  tag?: string;
};
export const courses: Course[] = [
  {
    name: "Basic Accounting & Tally Foundation",
    category: "Finance & Accounting",
    hours: "50",
    chapters: 7,
    detail:
      "Build a practical foundation in accounting and Tally with 175 practice MCQs and 28 learning videos.",
    tag: "Popular choice",
  },
  {
    name: "Python Fullstack with GenAI",
    category: "IT & Data",
    hours: "50",
    chapters: 7,
    detail: "Build your programming skills and explore full-stack development with generative AI.",
    tag: "Career accelerator",
  },
  {
    name: "AI Digital Marketing with Neuro Technology",
    category: "Marketing & Design",
    hours: "180+",
    chapters: 13,
    detail:
      "Explore AI-powered digital marketing and put your learning into practice with 11+ projects.",
    tag: "In demand",
  },
  {
    name: "Data Analytics with AI",
    category: "IT & Data",
    hours: "50",
    chapters: 7,
    detail:
      "Turn data into insights with hands-on learning, practical assignments, and 175 practice MCQs.",
  },
  {
    name: "Zoho Books",
    category: "Finance & Accounting",
    hours: "60",
    chapters: 17,
    detail:
      "Learn business accounting with Zoho Books through 17 chapters, 107 MCQs, and 21 videos.",
    tag: "Official training tie-up",
  },
  {
    name: "AI Powered UX/UI Design Master Course with WordPress",
    category: "Marketing & Design",
    hours: "101+",
    chapters: 10,
    detail: "Build practical design skills with AI-powered workflows, WordPress, and 8+ projects.",
  },
  {
    name: "Microsoft Excel",
    category: "Finance & Accounting",
    hours: "30",
    chapters: 5,
    detail: "Develop essential spreadsheet skills with 118 MCQs and 20 learning videos.",
  },
  {
    name: "GST Computation",
    category: "Finance & Accounting",
    hours: "46",
    chapters: 7,
    detail: "Understand GST computations through practical learning, 145 MCQs, and 42 videos.",
  },
  {
    name: "GST Return Filing",
    category: "Finance & Accounting",
    hours: "30",
    chapters: 3,
    detail: "Learn practical GST return filing with 101 MCQs and 14 learning videos.",
  },
  {
    name: "Tally Advanced",
    category: "Finance & Accounting",
    hours: "50",
    chapters: 7,
    detail: "Advance your Tally skills with 175 MCQs and 28 learning videos.",
  },
  {
    name: "Payroll or Salary Statement",
    category: "Finance & Accounting",
    hours: "30",
    chapters: 4,
    detail: "Learn payroll and salary statement preparation with 163 MCQs and 22 videos.",
  },
  {
    name: "PF & ESI Return Filing",
    category: "Finance & Accounting",
    hours: "30",
    chapters: 4,
    detail: "Understand statutory return filing with 134 practice MCQs and 16 videos.",
  },
  {
    name: "Financial Statements & MIS",
    category: "Finance & Accounting",
    hours: "50",
    chapters: 6,
    detail: "Build financial reporting skills with 145 MCQs and 22 learning videos.",
  },
  {
    name: "Startup Finance & Fund Raising",
    category: "Finance & Accounting",
    hours: "100",
    chapters: 10,
    detail: "Explore startup finance and fundraising through 292 MCQs and 57 videos.",
  },
  {
    name: "Personal Finance and Literacy",
    category: "Finance & Accounting",
    hours: "30",
    chapters: 6,
    detail: "Develop financial literacy with 177 practice MCQs and 36 videos.",
  },
  {
    name: "Stock Market",
    category: "Finance & Accounting",
    hours: "8",
    chapters: 7,
    detail: "Build a foundation in stock markets with 150 practice MCQs and 6 videos.",
  },
  {
    name: "AI and Automation in Accounting, Finance and Taxation",
    category: "Finance & Accounting",
    hours: "40",
    chapters: 8,
    detail: "Explore modern AI and automation workflows with 175 practice MCQs.",
  },
  {
    name: "Python Basics",
    category: "IT & Data",
    hours: "30",
    chapters: 5,
    detail: "Start your coding journey with 118 practice MCQs and 20 learning videos.",
  },
  {
    name: "JAVA Fullstack with GenAI",
    category: "IT & Data",
    hours: "50",
    chapters: 7,
    detail: "Develop full-stack Java skills with generative AI and practical assignments.",
  },
  {
    name: "AI & Machine Learning",
    category: "IT & Data",
    hours: "50",
    chapters: 7,
    detail:
      "Explore artificial intelligence and machine learning with practical training and 175 MCQs.",
  },
  {
    name: "Data Science with AI",
    category: "IT & Data",
    hours: "50",
    chapters: 7,
    detail: "Build data science skills with AI, hands-on practice, and 175 MCQs.",
  },
  {
    name: "GenAI and Agentic AI",
    category: "IT & Data",
    hours: "50",
    chapters: 7,
    detail: "Explore generative and agentic AI through structured training and 175 practice MCQs.",
  },
  {
    name: "Data Structure Fundamentals",
    category: "IT & Data",
    hours: "50",
    chapters: 13,
    detail: "Strengthen your computer science fundamentals with 175 practice MCQs.",
  },
  {
    name: "Placement Oriented Data Structure",
    category: "IT & Data",
    hours: "50",
    chapters: 7,
    detail: "Prepare for technical interviews with structured learning and 175 practice MCQs.",
  },
  {
    name: "Microsoft Word",
    category: "IT & Data",
    hours: "8",
    chapters: 7,
    detail: "Master document essentials with 156 practice MCQs and 21 learning videos.",
  },
  {
    name: "Microsoft PowerPoint",
    category: "IT & Data",
    hours: "10",
    chapters: 7,
    detail: "Build presentation skills with 139 practice MCQs and 21 videos.",
  },
  {
    name: "Communication Skills and Personality Development",
    category: "IT & Data",
    hours: "40",
    chapters: 9,
    detail: "Develop workplace confidence with 147 practice MCQs and 21 learning videos.",
  },
  {
    name: "Job Readiness Program",
    category: "IT & Data",
    hours: "4",
    chapters: 5,
    detail: "Get ready for your next career step with 115 practice MCQs and 21 videos.",
  },
  {
    name: "Advanced AI Digital Marketing with Neuro Technology",
    category: "Marketing & Design",
    hours: "240+",
    chapters: 20,
    detail: "Take your digital marketing skills further with advanced training and 17+ projects.",
  },
];

export const students = [
  {
    name: "Madhumitha",
    image: "madhumitha.png",
    before: "Fresher, MSc (Arts & Science)",
    course: "Tally & GST",
    role: "Accountant",
    salary: "4.0",
  },
  {
    name: "Raksana",
    image: "raksana.png",
    before: "Online Support Associate",
    course: "Tally & GST",
    role: "Accountant",
    salary: "3.5",
  },
  {
    name: "Bharath",
    image: "bharath.png",
    before: "9-year career gap",
    course: "Full Stack",
    role: "Full Stack Developer",
    salary: "5.5",
  },
  {
    name: "Jayaprasanna",
    image: "jayaprasanna.png",
    before: "Quality Analyst",
    course: "Finance Course",
    role: "Accountant",
    salary: "3.8",
  },
  {
    name: "Pooja R",
    image: "pooja.png",
    before: "BCA Graduate",
    course: "Finance Course",
    role: "Finance Trainer",
    salary: "4.0",
  },
  {
    name: "Joy Praveena",
    image: "joy.png",
    before: "Homemaker",
    course: "Tally & GST",
    role: "Accountant",
    salary: "4.5",
  },
];

export const reviews = [
  {
    name: "Akshara Krishnan",
    course: "Accounting & Taxation",
    text: "I had an excellent experience with Srikara Training and Placement Academy. The training programs for Tally, GST, and Income Tax are highly practical and comprehensive. The instructors explain complex tax concepts and accounting workflows in a very simple, understandable way.",
  },
  {
    name: "Revathy Jayakumar",
    course: "Python & Data Analytics",
    text: "I had a great experience with the Python with Data Analytics course. The trainer explained everything clearly and made it easy to understand. We got to work on real-time projects and practice a lot, which helped me learn better. I feel more confident now.",
  },
  {
    name: "Mugunth Panneer",
    course: "Digital Marketing",
    text: "This is one of the best academies in the town. I underwent a digital marketing course here and have got two job offers now. These guys were really helpful as well as friendly. The practical examples they provide are too good and easily understandable.",
  },
  {
    name: "Fathima Nasrin",
    course: "Full Stack Python",
    text: "Full Stack Python—excellent teaching, lots of coding practice. The instructors were always reachable for doubts. Placement cell scheduled interviews regularly, and I got a good offer after 10 interviews.",
  },
  {
    name: "Nande Nande",
    course: "Data Analytics",
    text: "Data Analyst training was top-notch—hands-on with Python, SQL, and visualization tools. Instructors were patient and encouraging. Placement team connected me with two employers, and I got placed in a reputable firm.",
  },
  {
    name: "Srimathi Murugesan",
    course: "Full Stack Python",
    text: "Full Stack Python course exceeded expectations. I gained confidence in backend and frontend. Job placement help was outstanding—training for interviews, referrals, and employer tie-ups.",
  },
];
