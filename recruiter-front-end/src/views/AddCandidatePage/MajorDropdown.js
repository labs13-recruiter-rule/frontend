import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const majors = [
  { key: 1, text: 'Accounting', value: 'Accounting' },
  { key: 2, text: 'Advertising', value: 'Advertising' },
  { key: 3, text: 'Aerospace Engineering', value: 'Aerospace Engineering' },
  { key: 4, text: 'Anthropology', value: 'Anthropology' },
  { key: 5, text: 'Architecture', value: 'Architecture' },
  { key: 6, text: 'Biology', value: 'Biology' },
  {
    key: 7,
    text: 'Biomedical Engineering',
    value: 'Biomedical Engineering',
  },
  { key: 8, text: 'Biotechnology', value: 'Biotechnology' },
  {
    key: 9,
    text: 'Business Administration',
    value: 'Business Administration',
  },
  { key: 10, text: 'Business Management', value: 'Business Management' },
  { key: 11, text: 'Chemical Engineering', value: 'Chemical Engineering' },
  { key: 12, text: 'Chemistry', value: 'Chemistry' },
  { key: 13, text: 'Civil Engineering', value: 'Civil Engineering' },
  { key: 14, text: 'Communications', value: 'Communications' },
  { key: 15, text: 'Computer Engineering', value: 'Computer Engineering' },
  { key: 16, text: 'Computer Science', value: 'Computer Science' },
  {
    key: 17,
    text: 'Construction Management',
    value: 'Construction Management',
  },
  { key: 18, text: 'Data Science', value: 'Data Science' },
  { key: 19, text: 'Economics', value: 'Economics' },
  { key: 20, text: 'Education', value: 'Education' },
  { key: 21, text: 'English', value: 'English' },
  { key: 22, text: 'Finance', value: 'Finance' },
  { key: 23, text: 'Food Science', value: 'Food Science' },
  { key: 24, text: 'Government', value: 'Government' },
  { key: 25, text: 'History', value: 'History' },
  {
    key: 26,
    text: 'Hospitality Management  ',
    value: 'Hospitality Management  ',
  },
  { key: 27, text: 'Human Resources', value: 'Human Resources' },
  {
    key: 28,
    text: 'Industrial Engineering',
    value: 'Industrial Engineering',
  },
  { key: 29, text: 'Information Systems', value: 'Information Systems' },
  {
    key: 30,
    text: 'Information Technologies',
    value: 'Information Technologies',
  },
  {
    key: 31,
    text: 'Management Information Systems',
    value: 'Management Information Systems',
  },
  { key: 32, text: 'Marketing', value: 'Marketing' },
  {
    key: 33,
    text: 'Materials Engineering',
    value: 'Materials Engineering',
  },
  { key: 34, text: 'Materials Science', value: 'Materials Science' },
  { key: 35, text: 'Mathematics', value: 'Mathematics' },
  {
    key: 36,
    text: 'Mechanical Engineering',
    value: 'Mechanical Engineering',
  },
  { key: 37, text: 'Nuclear Engineering', value: 'Nuclear Engineering' },
  { key: 38, text: 'Nursing', value: 'Nursing' },
  {
    key: 39,
    text: 'Petroleum Engineering',
    value: 'Petroleum Engineering',
  },
  { key: 40, text: 'Philosophy', value: 'Philosophy' },
  { key: 41, text: 'Physics', value: 'Physics' },
  { key: 42, text: 'Political Science', value: 'Political Science' },
  { key: 43, text: 'Psychology', value: 'Psychology' },
  { key: 44, text: 'Public Relations', value: 'Public Relations' },
  { key: 45, text: 'Social Work', value: 'Social Work' },
  { key: 46, text: 'Sociology', value: 'Sociology' },
  { key: 47, text: 'Software Engineering', value: 'Software Engineering' },
  { key: 48, text: 'Sports Management', value: 'Sports Management' },
  { key: 49, text: 'Statistics', value: 'Statistics' },
  { key: 50, text: 'Systems Engineering', value: 'Systems Engineering' },
];

const MajorDropdown = () => (
  <Dropdown placeholder="Select Major" fluid selection options={majors} />
);

export default MajorDropdown;
