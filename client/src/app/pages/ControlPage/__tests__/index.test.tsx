import * as React from 'react';
import { render } from '@testing-library/react';

import { ControlPage } from '..';

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

describe('<ControlPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ControlPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
