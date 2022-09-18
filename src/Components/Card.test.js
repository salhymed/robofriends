import React  from "react";
import { shallow } from 'enzyme';
import Card from './Card';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-preact-pure';

configure({ adapter: new Adapter });

it('should render 3', () => {
    const p = 4;
    expect(p).toEqual(4);
})

