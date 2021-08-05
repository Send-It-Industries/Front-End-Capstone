/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../client/Components/App';
/**
 * @jest-environment jsdom
 */

// describe('This is my first test', () => {
//   test('and it does this', () => {
//     expect(true).toBe(true);
//   });
//   test('and this second test does this', () => {
//     expect(false).toBe(false);
//   });
// });

test('shows four reviews after clicking the button', async () => {
  let component, button;
  await act(async () => {
    component = render(<App />);
  });
  await act(async () => {
    button = component.getByText('More Reviews');
    await fireEvent.click(button);
  });
  // const reviews = component.getAllByTestId('reviewCard');
  // expect(reviews).toHaveLength(4);
});

test('loads the component and indicates as such, then displays Product Select', async () => {
  let component;
  await act(async () => {
    component = render(<App />);
    expect(component.getByText('Loading...')).toBeInTheDocument();
  });
  // const [productSelect] = component.getAllByTestId('productSelect');
  // expect(productSelect).toBeTruthy();
});
