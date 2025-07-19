export const techCardsItems = [
  {
    name: "Python",
    description: "Best language",
    imageUrl: "/imgs/logos/python-logo.svg",
    bgColor: "bg-[#336791]/20",
  },
  {
    name: "TypeScript",
    description: "JavaScript but better",
    imageUrl: "/imgs/logos/typescript.svg",
    bgColor: "bg-[#3178C6]/20",
  },
  {
    name: "React",
    description: "JavaScript Library",
    imageUrl: "/imgs/logos/react.svg",
    bgColor: "bg-[#61DAFB]/20",
  },
  {
    name: "NextJS",
    description: "React framework",
    imageUrl: "/imgs/logos/nextjs.svg",
    bgColor: "bg-dark-200/10 dark:bg-white/10",
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    imageUrl: "/imgs/logos/tailwind.svg",
    bgColor: "bg-[#0EA5E9]/20",
  },
  {
    name: "Git",
    description: "Version control",
    imageUrl: "/imgs/logos/git.svg",
    bgColor: "bg-[#F1502F]/20",
  },
  {
    name: "Supabase",
    description: "Backend tool",
    imageUrl: "/imgs/logos/supabase.svg",
    bgColor: "bg-[#3ECF8E]/20",
  },
  {
    name: "NodeJS",
    description: "Backend",
    imageUrl: "/imgs/logos/node-js.svg",
    bgColor: "bg-[#689F63]/30",
  },
  {
    name: "MongoDB",
    description: "NoSQL database",
    imageUrl: "/imgs/logos/mongodb.svg",
    bgColor: "bg-[#599636]/30",
  },
  {
    name: "Prisma",
    description: "ORM",
    imageUrl: "/imgs/logos/prisma.svg",
    bgColor: "bg-[#0C344B]/20",
  },
  {
    name: "PostgreSQL",
    description: "OR database system",
    imageUrl: "/imgs/logos/postgresql.svg",
    bgColor: "bg-[#336791]/20",
  },
];

export const portfolioProjects = [
  {
    id: "diagnosai",
    heading: "DiagnosAI",
    subheading: "ai-powered medical diagnosis assistant",
    description:
      "An intelligent healthcare application that assists medical professionals with preliminary diagnosis using machine learning algorithms. The system analyzes patient symptoms, medical history, and diagnostic data to provide accurate insights and treatment recommendations.",
    imageUrl: "/imgs/projects/portfolio-mockup1.png",
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Jupyter Notebook",
    ],
    liveDemoUrl: "https://diagnosai-demo.vercel.app",
    sourceCodeUrl: "https://github.com/SamuelLaki/DiagnosAI",
  },
  {
    id: "pantryvision",
    heading: "PantryVision",
    subheading: "smart pantry management with computer vision",
    description:
      "A mobile application that uses computer vision to track pantry items, suggest recipes based on available ingredients, and manage grocery lists. Features include expiration date tracking, nutritional analysis, and meal planning capabilities.",
    imageUrl: "/imgs/projects/portfolio-mockup2.png",
    techStack: [
      "Django",
      "Python",
      "Bootstrap",
      "HTML/CSS",
      "SQLite",
      "LogMeal API",
      "Google AI",
    ],
    liveDemoUrl: "",
    sourceCodeUrl: "https://github.com/SamuelLaki/PantryVision",
  },
  {
    id: "chordtutor",
    heading: "ChordTutor",
    subheading: "interactive music learning platform",
    description:
      "A comprehensive guitar learning application with interactive lessons, chord recognition, and progress tracking. Features include a virtual fretboard, audio analysis for pitch detection, and personalized learning paths for students of all levels.",
    imageUrl: "/imgs/projects/portfolio-mockup3.jpg",
    techStack: [
      "Flask",
      "Python",
      "HTML/CSS",
      "JavaScript",
      "Bootstrap",
    ],
    liveDemoUrl: "",
    sourceCodeUrl: "https://github.com/SamuelLaki/ChordTutor",
  },
  {
    id: "ringfaceid",
    heading: "RingFaceID",
    subheading: "smart doorbell facial recognition system",
    description:
      "An intelligent face recognition system that integrates with Amazon Ring doorbells to automatically identify visitors and announce their names via text-to-speech. The system captures doorbell footage, detects faces using MTCNN, recognizes visitors using FaceNet deep learning model, and provides voice announcements for identified visitors.",
    imageUrl: "/imgs/projects/portfolio-mockup4.png",
    techStack: [
      "Python",
      "TensorFlow",
      "FaceNet",
      "MTCNN",
      "OpenCV",
      "Ring API",
      "Google TTS",
    ],
    liveDemoUrl: "",
    sourceCodeUrl: "https://github.com/SamuelLaki/RingFaceID",
  },
];


