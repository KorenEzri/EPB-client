import * as React from 'react';
import { render } from '@testing-library/react';

import { Action } from '..';

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

describe('<Action  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Action />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
