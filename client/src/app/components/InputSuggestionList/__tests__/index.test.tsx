import * as React from 'react';
import { render } from '@testing-library/react';

import { InputSuggestionList } from '..';


describe('<InputSuggestionList  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<InputSuggestionList />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
