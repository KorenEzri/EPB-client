import * as React from 'react';
import { render } from '@testing-library/react';

import { UserInputSelect } from '..';


describe('<UserInputSelect  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<UserInputSelect />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
