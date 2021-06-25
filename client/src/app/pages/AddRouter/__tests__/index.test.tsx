import * as React from 'react';
import { render } from '@testing-library/react';

import { AddRouter } from '..';


describe('<AddRouter  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AddRouter />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
