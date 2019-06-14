import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DegreeSelection = [
  {
    key: '1',
    text: 'High School Diploma / GED or equivalent',
    value: 'High School Diploma / GED or equivalent',
  },
  {
    key: '2',
    text: 'Some College or equivalent',
    value: 'Some College or equivalent',
  },
  {
    key: '3',
    text: "Associate's Degree or equivalent",
    value: "Associate's Degree or equivalent",
  },
  {
    key: '4',
    text: "Bachelor's Degree or equivalent",
    value: "Bachelor's Degree or equivalent",
  },
  {
    key: '5',
    text: "Master's Degree or equivalent",
    value: "Master's Degree or equivalent",
  },
  {
    key: '6',
    text: 'PhD or equivalent',
    value: 'PhD or equivalent',
  },
];

const DegreeDropdown = () => (
  <Dropdown
    placeholder="Select Degree"
    fluid
    selection
    options={DegreeSelection}
  />
);

export default DegreeDropdown;
