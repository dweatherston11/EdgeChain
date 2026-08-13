// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EdgeChain title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EdgeChain/i);
    expect(titleElement).toBeInTheDocument();
});
