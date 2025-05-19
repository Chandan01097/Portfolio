export interface TechItem {
  id: number;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  proficiency: number; // 1-5
}

export const techStackData: TechItem[] = [
  // Programming Languages
  {
    id: 1,
    name: 'Python',
    icon: '🐍',
    category: 'backend',
    proficiency: 5
  },
  {
    id: 2,
    name: 'Java',
    icon: '☕',
    category: 'backend',
    proficiency: 4
  },
  {
    id: 3,
    name: 'C',
    icon: '⚡',
    category: 'backend',
    proficiency: 4
  },
  
  // Frontend
  {
    id: 4,
    name: 'HTML5',
    icon: '🌐',
    category: 'frontend',
    proficiency: 4
  },
  {
    id: 5,
    name: 'CSS3',
    icon: '🎨',
    category: 'frontend',
    proficiency: 4
  },
  {
    id: 6,
    name: 'JavaScript',
    icon: '🟨',
    category: 'frontend',
    proficiency: 4
  },
  
  // Frameworks & Libraries
  {
    id: 7,
    name: 'Spring Boot',
    icon: '🍃',
    category: 'backend',
    proficiency: 4
  },
  {
    id: 8,
    name: 'Scikit-learn',
    icon: '🤖',
    category: 'other',
    proficiency: 4
  },
  {
    id: 9,
    name: 'Keras',
    icon: '🧠',
    category: 'other',
    proficiency: 4
  },
  {
    id: 10,
    name: 'BERT',
    icon: '📚',
    category: 'other',
    proficiency: 4
  },
  
  // Databases
  {
    id: 11,
    name: 'MySQL',
    icon: '🐬',
    category: 'backend',
    proficiency: 4
  },
  {
    id: 12,
    name: 'MongoDB',
    icon: '🍃',
    category: 'backend',
    proficiency: 4
  },
  
  // Tools
  {
    id: 13,
    name: 'Streamlit',
    icon: '📊',
    category: 'tools',
    proficiency: 4
  },
  {
    id: 14,
    name: 'Git',
    icon: '📚',
    category: 'tools',
    proficiency: 4
  }
];