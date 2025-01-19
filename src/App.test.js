import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import supportRequestReducer from './redux/slices/supportRequestSlice';

import '@testing-library/jest-dom';

// Create a Redux store for testing
const store = configureStore({
  reducer: {
    supportRequest: supportRequestReducer,
  },
});

console.log('Store:', store);

test('renders SupportRequestForm by default', () => {
  render(
    <Provider store={store}>
      <App store={store} />
    </Provider>
  );

  // Assert that the default route renders the form
  expect(screen.getByText(/Full Name/i)).toBeInTheDocument();
});
