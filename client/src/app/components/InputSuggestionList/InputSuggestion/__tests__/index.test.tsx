import * as React from 'react';
import { render } from '@testing-library/react';

import { InputSuggestion } from '..';


describe('<InputSuggestion  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<InputSuggestion />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
