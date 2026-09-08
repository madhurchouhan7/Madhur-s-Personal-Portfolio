export const profile = {
  name: 'Madhur Chouhan',
  role: 'AI engineer & researcher',
  location: 'Indore, India',
  email: 'madhurchouhan7@gmail.com',
  github: 'https://github.com/madhurchouhan7',
  githubUsername: 'madhurchouhan7',
  linkedin: 'https://www.linkedin.com/in/madhur-chouhan07/',
  iitIndore: 'https://www.iiti.ac.in/',
};

export interface Experience {
  org: string;
  role: string;
  period: string;
  description: string;
  link?: string;
}

export const experience: Experience[] = [
  {
    org: 'GDSC AITR',
    role: 'App Developer',
    period: 'Oct 25 - Now · Indore',
    description:
      'Developing cross-platform mobile applications with Flutter, Firebase, and Google Cloud Functions alongside the tech core team.',
  },
  {
    org: 'IEEE APS',
    role: 'Student Member',
    period: 'Dec 25 - Now · Indore',
    description:
      'Active member of the Antennas and Propagation Society — exploring antennas, propagation, and RF systems.',
  },
  {
    org: 'IIT Indore',
    role: 'Research Intern',
    period: 'May 26 - Jul 26 · Indore',
    description:
      'ML-based spectrum sensing using USRP & RTL-SDR for cognitive radio in IoT environments.',
    link: 'https://www.iiti.ac.in/',
  },
];

export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'AI & ML',
    skills: ['PyTorch', 'Scikit-Learn', 'OpenCV', 'Computer Vision'],
  },
  {
    label: 'Language',
    skills: ['Python', 'JavaScript', 'Dart', 'Java'],
  },
  {
    label: 'Mobile',
    skills: ['Flutter', 'Firebase', 'Riverpod', 'Firestore'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
  {
    label: 'DevOps',
    skills: ['Git', 'Docker', 'Linux', 'GitHub Actions'],
  },
  {
    label: 'Tools',
    skills: ['VS Code', 'Postman', 'Figma', 'Jupyter'],
  },
];

export interface Project {
  title: string;
  description: string;
  href: string;
}

export const projects: Project[] = [
  {
    title: 'Spectrum Sensing',
    description: 'ML-based signal classification for cognitive radio',
    href: 'https://github.com/madhurchouhan7',
  },
  {
    title: 'Lung Nodule Classifier',
    description: 'Radiomics + EfficientNetV2 for malignancy prediction',
    href: 'https://github.com/madhurchouhan7',
  },
  {
    title: 'AI Medical Assistant',
    description: 'Telehealth assistant powered by Gemini',
    href: 'https://github.com/madhurchouhan7',
  },
  {
    title: 'WattWise',
    description: 'Smart energy monitoring with AI energy plans',
    href: 'https://wattwise-landing-page.vercel.app/',
  },
  {
    title: 'VacciCare',
    description: 'Child vaccination schedules & reminders',
    href: 'https://vacci-care-landing-page.vercel.app/',
  },
];
