import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const MajorSelection = [
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
];

const MajorDropdown = () => (
  <Dropdown
    placeholder="Select Major"
    fluid
    selection
    options={MajorSelection}
  />
);

export default MajorDropdown;
