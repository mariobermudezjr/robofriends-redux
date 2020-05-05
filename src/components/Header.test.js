import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Header from './Header';

it('expect to render Header component', () => {
  expect(shallow(<Header />).length).toEqual(1);
});

it('expect to render Header component with Snapshot', () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});
