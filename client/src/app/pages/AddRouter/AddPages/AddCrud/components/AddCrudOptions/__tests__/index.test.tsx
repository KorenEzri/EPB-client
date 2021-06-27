import * as React from 'react';
import { render } from '@testing-library/react';

import { AddCrudOptions } from '..';


describe('<AddCrudOptions  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AddCrudOptions />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
