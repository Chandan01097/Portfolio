import { BriefcaseIcon, GraduationCapIcon } from 'lucide-react';

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string[];
  date: string;
  icon: keyof typeof icons;
  type: 'work' | 'education';
}

export const icons = {
  BriefcaseIcon,
  GraduationCapIcon
};

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: 'B.Tech in Computer Science and Engineering',
    company: 'CV Raman Global University',
    location: 'Bhubaneswar',
    description: [
      'Specialization in Artificial Intelligence and Machine Learning',
      'Current CGPA: 8.81',
      'Developed multiple projects in machine learning and web development',
      'Active participant in technical workshops and coding competitions'
    ],
    date: '2022 - Present',
    icon: 'GraduationCapIcon',
    type: 'education'
  },
  {
    id: 2,
    title: 'Class XII (Science)',
    company: 'College of Basic Science and Humanities',
    location: 'Bhubaneswar',
    description: [
      'Achieved 76.5% in Science stream',
      'Focused on Physics, Chemistry, and Mathematics',
      'Participated in various science exhibitions and competitions'
    ],
    date: '2022',
    icon: 'GraduationCapIcon',
    type: 'education'
  },
  {
    id: 3,
    title: 'Class X',
    company: 'S.B.G. Vidyamandir',
    location: 'Bhubaneswar',
    description: [
      'Secured 84.83% in final examinations',
      'Active participation in school activities and competitions',
      'Developed strong foundation in mathematics and science'
    ],
    date: '2020',
    icon: 'GraduationCapIcon',
    type: 'education'
  }
];