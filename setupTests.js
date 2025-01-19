// Import Jest DOM matchers for testing DOM elements
import '@testing-library/jest-dom';

console.log('setupTests.js loaded');
console.log('Expect has toBeInTheDocument:', expect.toBeInTheDocument !== undefined);

// Optional: Mock global browser APIs or setup polyfills if needed
// For example, mocking `window.matchMedia` for components relying on it
if (typeof window.matchMedia === 'undefined') {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
}
/*
jest.mock('@reduxjs/toolkit', () => {
  const actualToolkit = jest.requireActual('@reduxjs/toolkit');
  return {
    ...actualToolkit,
    createSlice: jest.fn(actualToolkit.createSlice),
  };
});*/



