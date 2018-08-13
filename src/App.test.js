import React from 'react';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

test('renders without crashing', () => {
  const component = shallow(<App/>);
  
  expect(component.props().className).toEqual('App'); 
});

test('renders file input', () => {
  const component = shallow(<App/>);
  const fileInput = component.find('input');
  const inputProps = fileInput.props();
  
  expect(fileInput).toHaveLength(1);
  expect(inputProps.type).toEqual('file');
  expect(inputProps.accept).toEqual(expect.stringContaining('image/png'));
})
 