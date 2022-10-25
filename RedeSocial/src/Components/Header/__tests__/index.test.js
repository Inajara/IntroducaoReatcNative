import React from 'react';
import { render } from '@testing-library/react-native';

import Header from '../index';

describe('Header', () => {
  test('se renderizado, retorna o titulo', () => {
    const { debug, getByText } = render(<Header />);
    debug();
    const element = getByText('BeautiflyMedia');
    expect(element).toBeTruthy();
  });
});
