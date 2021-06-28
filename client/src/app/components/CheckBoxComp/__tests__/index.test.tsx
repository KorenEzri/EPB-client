import * as React from 'react';
import { render } from '@testing-library/react';

import { CheckBoxComp } from '..';


describe('<CheckBoxComp  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CheckBoxComp />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
