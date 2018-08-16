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
  expect(inputProps.accept).toEqual(expect.stringContaining('image/*'));
});

test('renders image preview', () => {
  const component = shallow(<App/>);
  const previewImg = component.find('img.preview');

  expect(previewImg).toHaveLength(1);
});

test('file input updates preview', () => {
  const component = shallow(<App/>);
  const fileInput = component.find('input');
  const previewImg = component.find('img.preview');
  const givenEvent = {
    target: {
      files: [
        new File(["foo"], "foo.jpeg", {type: "image/jpeg"})
      ]
    }
  };

  fileInput.simulate('change', givenEvent);

  expect(fileInput.props().onChange).toEqual(expect.any(Function));
  expect(previewImg.text()).toEqual("foo");
})
 