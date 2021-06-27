import * as React from 'react';
import { render } from '@testing-library/react';

import { FromExisting } from '..';


describe('<FromExisting  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<FromExisting />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
