import React from 'react';
import expect, { createSpy } from 'expect';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CountdownForm from './../../components/CountdownForm';

Enzyme.configure({ adapter: new Adapter() });

describe('CountdownForm', () => {
  it('should call onSetCountdown if valid seconds entered', () => {
    const mockFn = jest.fn();
    const countdownForm = mount(<CountdownForm onSetCountdown={mockFn} />);
    const input = countdownForm.find('input');

    input.instance().value = 109;

    countdownForm.find('form').simulate('submit');

    expect(mockFn).toHaveBeenCalledWith(109);
  });
});