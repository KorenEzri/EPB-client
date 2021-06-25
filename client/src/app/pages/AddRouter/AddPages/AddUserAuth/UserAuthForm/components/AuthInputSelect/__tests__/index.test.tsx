import * as React from 'react';
import { render } from '@testing-library/react';

import { AuthInputSelect } from '..';


describe('<AuthInputSelect  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AuthInputSelect />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
