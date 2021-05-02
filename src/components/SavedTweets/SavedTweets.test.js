import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SavedTweets from './SavedTweets';

describe('<SavedTweets />', () => {
  test('it should mount', () => {
    render(<SavedTweets />);
    
    const savedTweets = screen.getByTestId('SavedTweets');

    expect(savedTweets).toBeInTheDocument();
  });
});