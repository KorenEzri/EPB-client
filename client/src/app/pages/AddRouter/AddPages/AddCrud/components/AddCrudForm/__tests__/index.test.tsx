import * as React from 'react';
import { render } from '@testing-library/react';

import { AddCrudForm } from '..';


describe('<AddCrudForm  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AddCrudForm />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
