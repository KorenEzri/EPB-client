import * as React from 'react';
import { render } from '@testing-library/react';

import { CustomTypeInputs } from '..';


describe('<CustomTypeInputs  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CustomTypeInputs />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
