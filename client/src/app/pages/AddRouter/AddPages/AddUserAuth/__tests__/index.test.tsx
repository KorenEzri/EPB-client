import * as React from 'react';
import { render } from '@testing-library/react';

import { AddUserAuth } from '..';


describe('<AddUserAuth  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AddUserAuth />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
