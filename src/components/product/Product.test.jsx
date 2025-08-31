import React from 'react';
import { render, screeen } from '@testing-library/react';
import Product from './Product';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('Product', () => {
  it('renders a default heading', () => {
    render(<Product />);
    expect(screen.getByText('SHOP, CART')).toBeInTheDocument;
  });
});
