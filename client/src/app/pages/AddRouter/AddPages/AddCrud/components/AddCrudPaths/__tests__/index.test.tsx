import * as React from 'react';
import { render } from '@testing-library/react';

import { AddCrudPaths } from '..';


describe('<AddCrudOptions  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AddCrudPaths />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
