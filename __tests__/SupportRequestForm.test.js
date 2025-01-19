import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SupportRequestForm from './SupportRequestForm';

const mockStore = configureStore([]);

describe('SupportRequestForm', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      supportRequest: [],
    });
  });

  test('renders the form correctly', () => {
    render(
      <Provider store={store}>
        <SupportRequestForm />
      </Provider>
    );

    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Issue Type/i)).toBeInTheDocument();
  });

  test('shows validation errors when submitting empty form', async () => {
    render(
      <Provider store={store}>
        <SupportRequestForm />
      </Provider>
    );

    fireEvent.click(screen.getByText(/Submit/i));

    expect(await screen.findByText(/Full Name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Invalid email address/i)).toBeInTheDocument();
  });
});
