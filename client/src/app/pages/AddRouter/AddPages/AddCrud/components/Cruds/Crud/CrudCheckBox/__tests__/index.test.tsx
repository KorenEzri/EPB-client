import * as React from 'react';
import { render } from '@testing-library/react';

import { CruDcheckbox } from '..';


describe('<CruDcheckbox  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CruDcheckbox />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
