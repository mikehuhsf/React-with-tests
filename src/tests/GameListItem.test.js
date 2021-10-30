import React from 'react';
import renderer from 'react-test-renderer';
import GameListItem from "../components/GameListItem";
import { shallow } from '../enzyme';

it("renders a drop down when clicked", () => {
    const wrapper = renderer.create(<GameListItem id={1} title='amongus'/>);
    expect(wrapper).toMatchSnapshot();
})

it('should find 1 button named the input title', () => {
    const wrapper = shallow(<GameListItem id={1} title='amongus' />);
    //console.log(wrapper);
    expect(wrapper.find('.game-button').render().text()).toEqual('amongus');
  });
  
//   it('should drop down details after a click', () => {
//     const wrapper = shallow(<GameListItem id={1} title='Minecraft' />);
//     //console.log(wrapper);
//     wrapper.find('.game-button').simulate('click');
//     wrapper.update();
//     renderer.create(wrapper);
//     expect(wrapper.find('.details').render().text()).toEqual('Current count: 2');
//   });