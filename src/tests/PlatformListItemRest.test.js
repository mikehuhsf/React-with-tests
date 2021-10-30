import React from 'react';
import renderer from 'react-test-renderer';
import PlatformListItem from "../components/PlatformListItemRest";
import { specifications } from '../tools/mockSpecifications';
import { shallow } from '../enzyme';

it("renders a drop down when clicked", () => {
    const wrapper = renderer.create(<PlatformListItem name='iPhone13' release_date='2021-09-24' specifications={specifications}/>);
    expect(wrapper).toMatchSnapshot();
})

it('should find 1 href named name', () => {
    const wrapper = shallow(<PlatformListItem />);
    expect(wrapper.find('.button-increment').text()).toEqual('Increment');

  });