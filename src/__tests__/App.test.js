import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders location search field', () => {
  render(<App />);
  const inputElement = screen.getByTestId('location-input');

  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute('type', 'text');
});

// test('successfully finds a valid city', () => {
//   render(<App />);
//   const inputElement = screen.getByTestId('location-input');
//   userEvent.type('inputElement', 'New York, NY, USA');

//   expect(inputElement).toBeInTheDocument();
//   expect(inputElement).toHaveAttribute('type', 'text');
// })
