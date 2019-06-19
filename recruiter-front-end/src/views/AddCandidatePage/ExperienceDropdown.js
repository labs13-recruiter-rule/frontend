import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [
  { key: 0, text: '0', value: '0' },
  { key: 1, text: '1', value: '1' },
  { key: 2, text: '2', value: '2' },
  { key: 3, text: '3', value: '3' },
  { key: 4, text: '4', value: '4' },
  { key: 5, text: '5', value: '5' },
  { key: 6, text: '6', value: '6' },
  { key: 7, text: '7', value: '7' },
  { key: 8, text: '8', value: '8' },
  { key: 9, text: '9', value: '9' },
  { key: 10, text: '10', value: '10' },
  { key: 11, text: '11', value: '11' },
  { key: 12, text: '12', value: '12' },
  { key: 13, text: '13', value: '13' },
  { key: 14, text: '14', value: '14' },
  { key: 15, text: '15', value: '15' },
  { key: 16, text: '16', value: '16' },
  { key: 17, text: '17', value: '17' },
  { key: 18, text: '18', value: '18' },
  { key: 19, text: '19', value: '19' },
  { key: 20, text: '20', value: '20' },
  { key: 21, text: '21', value: '21' },
  { key: 22, text: '22', value: '22' },
  { key: 23, text: '23', value: '23' },
  { key: 24, text: '24', value: '24' },
  { key: 25, text: '25', value: '25' },
];

const ExperienceDropdown = () => (
  <Dropdown placeholder="Select Experience" fluid selection options={options} />
);

export default ExperienceDropdown;
