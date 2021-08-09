/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import axiosMock from 'axios';
import App from '../client/Components/App';
import testData from './testData';
import testDataQA from './testDataQA';

describe('This is my first test', () => {
  test('and it does this', () => {
    expect(true).toBe(true);
  });
  test('and this second test does this', () => {
    expect(false).toBe(false);
  });
});

beforeEach(async () => {
  axiosMock.get.mockResolvedValueOnce({ data: testData.productInfo });
  axiosMock.get.mockResolvedValueOnce({ data: testData.productStyle });
  axiosMock.get.mockResolvedValueOnce({ data: testDataQA });
  axiosMock.get.mockResolvedValueOnce({ data: testData.reviews });
  axiosMock.get.mockResolvedValueOnce({ data: testData.reviewMeta });

  axiosMock.get.mockResolvedValueOnce({ data: testData.productInfo });
  axiosMock.get.mockResolvedValueOnce({ data: testData.productStyle });
  axiosMock.get.mockResolvedValueOnce({ data: testDataQA });
  axiosMock.get.mockResolvedValueOnce({ data: testData.reviews });
  axiosMock.get.mockResolvedValueOnce({ data: testData.reviewMeta });
});
afterEach(cleanup);

test('shows four reviews after clicking the button', async () => {
  // axiosMock.get.mockResolvedValueOnce({data:});
  let component;
  let button;
  await act(async () => {
    component = render(<App />);
  });
  await act(async () => {
    button = component.getByText('More Reviews');
    await fireEvent.click(button);
  });
  const reviews = component.getAllByTestId('reviewCard');
  expect(reviews).toHaveLength(4);
});

test('loads the component and indicates as such, then displays Product Select', async () => {
  let component;
  await act(async () => {
    component = render(<App />);
    expect(component.getAllByText('Loading...').length).toBeTruthy();
  });
  // const [productSelect] = component.getAllByTestId('productSelect');
  // expect(productSelect).toBeTruthy();
});
