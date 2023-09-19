import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App Components', () => {
  const wrapper = render(<App />);
  expect(wrapper).toBeInTheDocument();
});
