import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ConfirmationModal from './ConfirmationModal';

describe('<ConfirmationModal />', () => {
  test('it should mount', () => {
    render(<ConfirmationModal />);
    
    const confirmationModal = screen.getByTestId('ConfirmationModal');

    expect(confirmationModal).toBeInTheDocument();
  });
});