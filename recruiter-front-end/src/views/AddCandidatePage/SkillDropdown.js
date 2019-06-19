import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const skills = [
  { key: 'Adaptability', text: 'Adaptability', value: 'Adaptability' },
  { key: 'Adobe XD', text: 'Adobe XD', value: 'Adobe XD' },
  {
    key: 'Analytical Reasoning',
    text: 'Analytical Reasoning',
    value: 'Analytical Reasoning',
  },
  { key: 'Angular', text: 'Angular', value: 'Angular' },
  {
    key: 'Artificial Intelligence',
    text: 'Artificial Intelligence',
    value: 'Artificial Intelligence',
  },
  {
    key: 'Audio Production',
    text: 'Audio Production',
    value: 'Audio Production',
  },
  {
    key: 'Business Analysis',
    text: 'Business Analysis',
    value: 'Business Analysis',
  },
  {
    key: 'Business Development',
    text: 'Business Development',
    value: 'Business Development',
  },
  {
    key: 'Business Intelligence',
    text: 'Business Intelligence',
    value: 'Business Intelligence',
  },
  {
    key: 'Business Management',
    text: 'Business Management',
    value: 'Business Management',
  },
  {
    key: 'Cloud Computing',
    text: 'Cloud Computing',
    value: 'Cloud Computing',
  },
  { key: 'Collaboration', text: 'Collaboration', value: 'Collaboration' },
  {
    key: 'Communications',
    text: 'Communications',
    value: 'Communications',
  },
  {
    key: 'Content Marketing',
    text: 'Content Marketing',
    value: 'Content Marketing',
  },
  { key: 'Creativity', text: 'Creativity', value: 'Creativity' },
  {
    key: 'Critical Thinking',
    text: 'Critical Thinking',
    value: 'Critical Thinking',
  },
  { key: 'CSS', text: 'CSS', value: 'CSS' },
  {
    key: 'Customer Service ',
    text: 'Customer Service ',
    value: 'Customer Service ',
  },
  {
    key: 'Data Engineering',
    text: 'Data Engineering',
    value: 'Data Engineering',
  },
  { key: 'Data Mining', text: 'Data Mining', value: 'Data Mining' },
  { key: 'Data Science', text: 'Data Science', value: 'Data Science' },
  {
    key: 'Database Management',
    text: 'Database Management',
    value: 'Database Management',
  },
  {
    key: 'Digital Marketing',
    text: 'Digital Marketing',
    value: 'Digital Marketing',
  },
  { key: 'Digital Media', text: 'Digital Media', value: 'Digital Media' },
  {
    key: 'Email Marketing',
    text: 'Email Marketing',
    value: 'Email Marketing',
  },
  {
    key: 'Financial Analysis',
    text: 'Financial Analysis',
    value: 'Financial Analysis',
  },
  { key: 'Git', text: 'Git', value: 'Git' },
  { key: 'GitHub', text: 'GitHub', value: 'GitHub' },
  { key: 'Go', text: 'Go', value: 'Go' },
  { key: 'HTML', text: 'HTML', value: 'HTML' },
  {
    key: 'Information Security',
    text: 'Information Security',
    value: 'Information Security',
  },
  { key: 'Java', text: 'Java', value: 'Java' },
  { key: 'Javascript', text: 'Javascript', value: 'Javascript' },
  { key: 'Leadership', text: 'Leadership', value: 'Leadership' },
  {
    key: 'Machine Learning',
    text: 'Machine Learning',
    value: 'Machine Learning',
  },
  { key: 'Management', text: 'Management', value: 'Management' },
  {
    key: 'Market Research',
    text: 'Market Research',
    value: 'Market Research',
  },
  {
    key: 'Mobile Development',
    text: 'Mobile Development',
    value: 'Mobile Development',
  },
  {
    key: 'Natural Language Processing',
    text: 'Natural Language Processing',
    value: 'Natural Language Processing',
  },
  { key: 'Node.js', text: 'Node.js', value: 'Node.js' },
  {
    key: 'People Management',
    text: 'People Management',
    value: 'People Management',
  },
  { key: 'Persuasion', text: 'Persuasion', value: 'Persuasion' },
  { key: 'Photoshop', text: 'Photoshop', value: 'Photoshop' },
  {
    key: 'Problem Solving',
    text: 'Problem Solving',
    value: 'Problem Solving',
  },
  {
    key: 'Project Management',
    text: 'Project Management',
    value: 'Project Management',
  },
  {
    key: 'Public Relations',
    text: 'Public Relations',
    value: 'Public Relations',
  },
  {
    key: 'Public Speaking',
    text: 'Public Speaking',
    value: 'Public Speaking',
  },
  { key: 'Python', text: 'Python', value: 'Python' },
  { key: 'QA', text: 'QA', value: 'QA' },
  { key: 'React', text: 'React', value: 'React' },
  { key: 'React Native', text: 'React Native', value: 'React Native' },
  { key: 'Ruby', text: 'Ruby', value: 'Ruby' },
  { key: 'Sales', text: 'Sales', value: 'Sales' },
  {
    key: 'Search Engine Marketing',
    text: 'Search Engine Marketing',
    value: 'Search Engine Marketing',
  },
  { key: 'SEO', text: 'SEO', value: 'SEO' },
  { key: 'Sketch', text: 'Sketch', value: 'Sketch' },
  { key: 'Social Media', text: 'Social Media', value: 'Social Media' },
  {
    key: 'Social Media Marketing',
    text: 'Social Media Marketing',
    value: 'Social Media Marketing',
  },
  {
    key: 'Software Testing',
    text: 'Software Testing',
    value: 'Software Testing',
  },
  {
    key: 'Statistical Analysis',
    text: 'Statistical Analysis',
    value: 'Statistical Analysis',
  },
  {
    key: 'Time Management',
    text: 'Time Management',
    value: 'Time Management',
  },
  { key: 'Typescript', text: 'Typescript', value: 'Typescript' },
  {
    key: 'User Interface Design',
    text: 'User Interface Design',
    value: 'User Interface Design',
  },
  { key: 'UX Design', text: 'UX Design', value: 'UX Design' },
  {
    key: 'Video Production',
    text: 'Video Production',
    value: 'Video Production',
  },
  {
    key: 'Web Architecture',
    text: 'Web Architecture',
    value: 'Web Architecture',
  },
];

const SkillDropdown = () => (
  <Dropdown
    placeholder="Skills"
    search
    fluid
    multiple
    selection
    allowAdditions
    options={skills}
  />
);

export default SkillDropdown;
