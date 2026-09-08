import type { Certification, LeetCodeProfile } from "@/types";

export const leetcode: LeetCodeProfile = {
  href: "https://leetcode.com/u/rahul_06-/",
  stats: [
    {
      label: "Problems Solved",
      value: "273",
      suffix: "/3822",
      icon: "fas fa-check-circle",
    },
    {
      label: "Acceptance Rate",
      value: "94",
      suffix: "/ 19%",
      icon: "fas fa-trophy",
    },
    {
      label: "Easy",
      value: "126",
      suffix: "/922",
      icon: "fas fa-star",
      variant: "easy",
      valueColor: "#22c55e",
    },
    {
      label: "Medium",
      value: "124",
      suffix: "/1997",
      icon: "fas fa-star",
      variant: "medium",
      valueColor: "#f59e0b",
    },
    {
      label: "Hard",
      value: "23",
      suffix: "/903",
      icon: "fas fa-star",
      variant: "hard",
      valueColor: "#ef4444",
    },
  ],
};

export const certifications: readonly Certification[] = [
  {
    icon: "fas fa-robot",
    title: "Generative AI",
    issuer: "Great Learning",
    date: "Issued Jul 2025",
    credentialId: "ENDRXTTK",
    skills: ["Artificial Intelligence", "Generative AI", "AI for Learning"],
  },
  {
    icon: "fab fa-java",
    title: "Java",
    issuer: "HackerRank",
    date: "Issued Mar 2023",
    credentialId: "CFB630438426",
  },
  {
    icon: "fas fa-database",
    title: "Oracle Certified Expert Database SQL",
    issuer: "HackerRank",
    date: "Issued Mar 2023",
    credentialId: "D5520657F7C4",
  },
  {
    icon: "fas fa-puzzle-piece",
    title: "Problem Solving",
    issuer: "HackerRank",
    date: "Issued Mar 2023",
    credentialId: "0F9777E85884",
  },
  {
    icon: "fas fa-server",
    title: "Developing SQL Databases",
    issuer: "HackerRank",
    date: "Issued Feb 2023",
    credentialId: "DB4DEE20E891",
  },
  {
    icon: "fas fa-database",
    title: "Developing SQL Databases",
    issuer: "TestDome",
    date: "Issued Nov 2023 · Expired Nov 2025",
    credentialId:
      "www.testdome.com/certificates/a45c200eab5b4d829529331ec2516776",
  },
];
