import * as React from 'react';
import { render } from '@testing-library/react';

import { SchemaInputs } from '..';


describe('<SchemaInputs  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SchemaInputs />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
