import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'High School / GED', value: 'High School / GED' },
  { key: 2, text: 'Some College', value: 'Some College' },
  { key: 3, text: "Associate's", value: "Associate's" },
  { key: 4, text: "Bachelor's Degree", value: "Bachelor's Degree" },
  { key: 5, text: "Master's Degree", value: "Master's Degree" },
  { key: 6, text: 'PhD', value: 'PhD' },
];

const DegreeDropdown = () => (
  <Dropdown placeholder="Select Degree" fluid selection options={options} />
);

export default DegreeDropdown;
