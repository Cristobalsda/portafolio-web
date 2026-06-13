"use client";

import {
  SiDjango,
  SiNextdotjs,
  SiNestjs,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiFlutter,
  SiPython,
  SiAmazon,
  SiAstro,
  SiDart,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";

export const skills = [
  { name: "Django", icon: SiDjango, color: "text-green-600" },
  { name: "Python", icon: SiPython, color: "text-blue-600" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800" },
  { name: "NestJS", icon: SiNestjs, color: "text-red-600" },
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-sky-500" },
  { name: "Astro", icon: SiAstro, color: "text-orange-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "MySQL", icon: SiMysql, color: "text-orange-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-amber-500" },
  { name: "AWS", icon: SiAmazon, color: "text-yellow-500" },
  { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
  { name: "Dart", icon: SiDart, color: "text-sky-600" },
];

export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800" },
      { name: "React", icon: SiReact, color: "text-cyan-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "text-sky-500" },
      { name: "Astro", icon: SiAstro, color: "text-orange-500" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "NestJS", icon: SiNestjs, color: "text-red-600" },
      { name: "Django", icon: SiDjango, color: "text-green-600" },
      { name: "Python", icon: SiPython, color: "text-blue-600" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
      { name: "Dart", icon: SiDart, color: "text-sky-600" },
      { name: "Firebase", icon: SiFirebase, color: "text-amber-500" },
    ],
  },
  {
    name: "Datos y Cloud",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      { name: "MySQL", icon: SiMysql, color: "text-orange-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
      { name: "AWS", icon: SiAmazon, color: "text-yellow-500" },
    ],
  },
];
