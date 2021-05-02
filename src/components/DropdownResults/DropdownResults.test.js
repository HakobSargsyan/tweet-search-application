import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DropdownResults from './DropdownResults';

describe('<DropdownResults />', () => {
  test('it should mount', () => {
    render(<DropdownResults />);
    
    const dropdownResults = screen.getByTestId('DropdownResults');

    expect(dropdownResults).toBeInTheDocument();
  });
});