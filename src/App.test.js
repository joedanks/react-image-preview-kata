import React from 'react';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const fakeReader = {};

beforeEach(() => {
  fakeReader.readAsDataURL = () => {};
  window.FileReader = FakeFileReader;
})

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
  expect(previewImg.props()).toHaveProperty('src');
});

test('file input updates preview', () => {
  const component = shallow(<App/>);
  const fileInput = component.find('input');
  const fakeFile = 'fakeFile';
  const givenEvent = {
    target: {
      files: [
        fakeFile
      ]
    }
  };
  const givenReadEvent = {
    target: {
      result: 'result'
    }
  };

  fakeReader.readAsDataURL = () => {
    fakeReader.onload(givenReadEvent);
  }

  fileInput.simulate('change', givenEvent);
  
  expect(fileInput.props().onChange).toEqual(expect.any(Function));
  const previewImg = component.find('img.preview');
  expect(previewImg.props().src).toEqual("result");
})

class FakeFileReader {
  constructor() {
    return fakeReader;
  }
}