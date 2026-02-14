import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('filters news based on input', () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  act(() => {
    ReactDOM.render(<App />, container);
  });

  const input = container.querySelector('input');
  const initialNewsItems = container.querySelectorAll('.news_item');
  expect(initialNewsItems.length).toBe(4);

  // Match one
  act(() => {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    nativeInputValueSetter.call(input, 'ES6');
    input.dispatchEvent(new Event('input', { bubbles: true }));
  });

  let newsItems = container.querySelectorAll('.news_item');
  expect(newsItems.length).toBe(1);
  expect(newsItems[0].textContent).toContain('New ES6 upgrade available');

  // Match none
  act(() => {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    nativeInputValueSetter.call(input, 'XYZ');
    input.dispatchEvent(new Event('input', { bubbles: true }));
  });

  newsItems = container.querySelectorAll('.news_item');
  expect(newsItems.length).toBe(0);

  // Clear filter
  act(() => {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    nativeInputValueSetter.call(input, '');
    input.dispatchEvent(new Event('input', { bubbles: true }));
  });

  newsItems = container.querySelectorAll('.news_item');
  expect(newsItems.length).toBe(4);

  document.body.removeChild(container);
});
