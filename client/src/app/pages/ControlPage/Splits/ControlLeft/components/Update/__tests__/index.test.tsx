import * as React from 'react';
import { render } from '@testing-library/react';

import { Update } from '..';

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

describe('<Update  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Update />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
