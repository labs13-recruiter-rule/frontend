import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const ExperienceSelection = [
  {
    key: '1',
    text: 'Less than 6 Months',
    value: 'Less than 6 Months',
  },
  {
    key: '2',
    text: '6 Months to 1 Year',
    value: '6 Months to 1 Year',
  },
  {
    key: '3',
    text: '1 Year',
    value: '1 Year',
  },
  {
    key: '4',
    text: '2 Years',
    value: '2 Years',
  },
  {
    key: '5',
    text: '3 years',
    value: '3 years',
  },
];

const ExperienceDropdown = () => (
  <Dropdown
    placeholder="Select Experience"
    fluid
    selection
    options={ExperienceSelection}
  />
);

export default ExperienceDropdown;
