import * as React from 'react';
import { render } from '@testing-library/react';

import { MultiInput } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<MultiInput  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<MultiInput />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
