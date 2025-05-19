export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Sentiment Analysis of Amazon Reviews',
    description: 'Developed a sophisticated sentiment analysis tool for Amazon app reviews using TF-IDF, achieving 84% accuracy with Logistic Regression and 91.86% with LSTM. Implemented a live Streamlit interface and integrated word cloud visualizations.',
    tags: ['Python', 'Machine Learning', 'NLP', 'Streamlit', 'LSTM'],
    imageUrl: 'https://www.altexsoft.com/static/blog-post/2024/4/9f5946d6-d060-4aaa-b1c3-e64795227a1c.webp',
    githubUrl: 'https://github.com/Chandan01097/Sentimental_analysis_of_Amazon_review_data'
  },
  {
    id: 2,
    title: 'Secure File Hider',
    description: 'Built a secure file storage system using Java and MySQL with email-based OTP authentication. Implemented file encryption to ensure only authorized users can access stored files, enhancing data security.',
    tags: ['Java', 'MySQL', 'Security', 'File Encryption'],
    imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/Chandan01097/File_hiding_system_java_project_with_database'
  },
  {
    id: 3,
    title: 'Movie Review Predictor',
    description: 'Created an advanced movie review sentiment prediction system using Python and NLP techniques. Integrated BERT for enhanced analysis accuracy and developed a user-friendly interface for real-time predictions.',
    tags: ['Python', 'NLP', 'BERT', 'Machine Learning'],
    imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/Chandan01097/Sentiment_analysis-NLP-project-on-IMDB-data-set'
  },
  {
    id: 4,
    title: 'Coffee Shop Website',
    description: 'Designed and developed a responsive coffee shop website featuring a navigation bar, search functionality, shopping cart, and various sections including menu, products, blogs, and contact information.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    imageUrl: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/Chandan01097/Coca-Coffe'
  }
];