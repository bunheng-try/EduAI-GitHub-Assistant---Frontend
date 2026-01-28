export type Classroom = {
  id: string
  name: string
  color?: string
}

export type Assignment = {
  id: string
  classroomId: string
  title: string
  status: string
  dueDate?: string
  totalSubmitted: number
}

export type Challenge = {
  id: string;
  assignmentId: string;
  title: string;
  description?: string;
  author: string;
  date: Date;
}


export const classrooms: Classroom[] = [
  { id: "c1", name: "Gen 11 - Software Engineering" },
  { id: "c2", name: "Gen 12 - Computer Science" },
  { id: "c3", name: "ICT Foundation" },
  { id: "c4", name: "Web Development" },
  { id: "c5", name: "Mobile App Development" },
  { id: "c6", name: "Data Structures" },
]


export const assignments: Assignment[] = [
  {
    id: "a1",
    classroomId: "c1",
    title: "JavaScript Fundamentals",
    status: "active",
    dueDate: "2026-01-20",
    totalSubmitted: 18,
  },
  {
    id: "a2",
    classroomId: "c1",
    title: "To-Do List App",
    status: "active",
    dueDate: "2026-01-25",
    totalSubmitted: 15,
  },
  {
    id: "a3",
    classroomId: "c1",
    title: "Midterm Mini Project",
    status: "draft",
    totalSubmitted: 0,
  },

  {
    id: "a4",
    classroomId: "c2",
    title: "Algorithm Practice",
    status: "active",
    dueDate: "2026-01-22",
    totalSubmitted: 25,
  },
  {
    id: "a5",
    classroomId: "c2",
    title: "Sorting & Searching",
    status: "active",
    dueDate: "2026-01-28",
    totalSubmitted: 21,
  },

  {
    id: "a6",
    classroomId: "c3",
    title: "ICT Basics Quiz",
    status: "closed",
    totalSubmitted: 30,
  },

  {
    id: "a7",
    classroomId: "c4",
    title: "HTML & CSS Layout",
    status: "active",
    dueDate: "2026-02-02",
    totalSubmitted: 12,
  },
  {
    id: "a8",
    classroomId: "c4",
    title: "Responsive Website",
    status: "draft",
    totalSubmitted: 0,
  },

  {
    id: "a9",
    classroomId: "c5",
    title: "Flutter UI Practice",
    status: "active",
    dueDate: "2026-02-05",
    totalSubmitted: 9,
  },
]


export const challenges: Challenge[] = [
  // a1 — JavaScript Fundamentals
  {
    id: "ch1",
    assignmentId: "a1",
    title: "Variables and Data Types",
    description: "Declare variables and identify data types.",
    author: "Mr. Sokha",
    date: new Date("2026-01-10"),
  },
  {
    id: "ch2",
    assignmentId: "a1",
    title: "Conditional Statements",
    description: "Practice if-else conditions.",
    author: "Mr. Sokha",
    date: new Date("2026-01-11"),
  },
  {
    id: "ch3",
    assignmentId: "a1",
    title: "Loops Practice",
    description: "Solve problems using for and while loops.",
    author: "Mr. Sokha",
    date: new Date("2026-01-12"),
  },

  // a2 — To-do List App
  {
    id: "ch4",
    assignmentId: "a2",
    title: "Create Task Model",
    description: "Design task structure and states.",
    author: "Ms. Lina",
    date: new Date("2026-01-15"),
  },
  {
    id: "ch5",
    assignmentId: "a2",
    title: "Add & Delete Tasks",
    description: "Implement add and delete functionality.",
    author: "Ms. Lina",
    date: new Date("2026-01-16"),
  },
  {
    id: "ch6",
    assignmentId: "a2",
    title: "Persist Data",
    description: "Save tasks using local storage.",
    author: "Ms. Lina",
    date: new Date("2026-01-17"),
  },

  // a4 — Algorithm Practice
  {
    id: "ch7",
    assignmentId: "a4",
    title: "Linear Search",
    description: "Implement linear search algorithm.",
    author: "Dr. Dara",
    date: new Date("2026-01-18"),
  },
  {
    id: "ch8",
    assignmentId: "a4",
    title: "Binary Search",
    description: "Implement binary search algorithm.",
    author: "Dr. Dara",
    date: new Date("2026-01-19"),
  },

  // a7 — HTML & CSS
  {
    id: "ch9",
    assignmentId: "a7",
    title: "Flexbox Layout",
    description: "Create layout using flexbox.",
    author: "Ms. Nary",
    date: new Date("2026-01-20"),
  },
  {
    id: "ch10",
    assignmentId: "a7",
    title: "Grid System",
    description: "Build page using CSS grid.",
    author: "Ms. Nary",
    date: new Date("2026-01-21"),
  },

  // a9 — Flutter
  {
    id: "ch11",
    assignmentId: "a9",
    title: "Basic Widgets",
    description: "Use Column, Row, and Container widgets.",
    author: "Mr. Chan",
    date: new Date("2026-01-23"),
  },
  {
    id: "ch12",
    assignmentId: "a9",
    title: "Navigation",
    description: "Implement page navigation.",
    author: "Mr. Chan",
    date: new Date("2026-01-24"),
  },
]
