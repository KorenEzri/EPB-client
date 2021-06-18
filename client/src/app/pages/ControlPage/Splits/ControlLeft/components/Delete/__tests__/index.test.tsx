import * as React from 'react';
import { render } from '@testing-library/react';

import { Delete } from '..';

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

describe('<Delete  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Delete />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
