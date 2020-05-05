import { shallow, mount, render } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

it('expect to render SearchBox component', () => {
  expect(shallow(<SearchBox />).length).toEqual(1);
});

it('expect to render SearchBox component with Snapshot', () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot();
});
