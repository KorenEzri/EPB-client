import * as React from 'react';
import { render } from '@testing-library/react';

import { AddPageSplits } from '..';


describe('<AddPageSplits  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AddPageSplits />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
