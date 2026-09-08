import type { Education } from "@/types";

export const education: readonly Education[] = [
  {
    icon: "fas fa-graduation-cap",
    period: "July 2021 - July 2025",
    degree: "Bachelor of Technology in Computer Science",
    institution: "Maulana Abul Kalam Azad University of Technology",
    location: "West Bengal, India",
    gpa: "GPA: 8.07/10",
    courses: [
      "Software Engineering",
      "Operating Systems",
      "Data Structures & Algorithms",
      "Android Development",
      "Web Development",
    ],
  },
  {
    icon: "fas fa-certificate",
    period: "July 2017 - July 2020",
    degree: "Diploma in Engineering",
    institution: "Saroj Mohan Institute of Technology (Techno India Group)",
    location: "Hooghly, India",
    gpa: "GPA: 7.8/10",
    courses: [
      "Basic Programming",
      "Engineering Drawing",
      "Control Systems",
      "Engineering Economics",
    ],
  },
];
