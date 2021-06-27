import * as React from 'react';
import { render } from '@testing-library/react';

import { AddCrud } from '..';


describe('<AddCrud  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AddCrud />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
