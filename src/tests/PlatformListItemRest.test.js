import React from 'react';
import renderer from 'react-test-renderer';
import PlatformListItem from "../components/PlatformListItemRest";
import { shallow } from '../enzyme';

it("renders a drop down when clicked", () => {
    const wrapper = renderer.create(<PlatformListItem id={1} name='iPhone13'/>);
    expect(wrapper).toMatchSnapshot();
})

it('should find 1 button named the input name', () => {
    const wrapper = shallow(<PlatformListItem id={1} name='iPhone11' />);
    //console.log(wrapper);
    expect(wrapper.find('.platform-button').render().text()).toEqual('iPhone11');
  });   