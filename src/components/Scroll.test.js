import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Scroll from './Scroll';

it('expect to render Scroll component', () => {
  expect(shallow(<Scroll />).length).toEqual(1);
});

it('expect to render Scroll component with Snapshot', () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
});
