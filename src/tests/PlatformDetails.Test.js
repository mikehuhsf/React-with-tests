import React from 'react';
import renderer from 'react-test-renderer';
import PlatformDetails from '../components/PlatformDetails';
import { specifications } from '../tools/mockSpecifications';

it('display specifications info when that info exists', () => {

  const wrapper = renderer.create(<PlatformDetails name='iPhone13' release_date='2021-09-24' specifications={specifications}/>);
  expect(wrapper).toMatchSnapshot();
});
