import * as React from 'react';
import { render } from '@testing-library/react';

import { UserAuthForm } from '..';


describe('<UserAuthForm  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<UserAuthForm />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
