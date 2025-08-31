import React from 'react';
import { render, screeen } from '@testing-library/react';
import Header from './Header';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('Header', () => {
  it('renders a default heading', () => {
    render(<Header />);
    expect(screen.getByText('SHOP, CART')).toBeInTheDocument;
  });
});
