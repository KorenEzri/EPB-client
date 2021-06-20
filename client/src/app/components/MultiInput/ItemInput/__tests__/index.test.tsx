import * as React from 'react';
import { render } from '@testing-library/react';

import { ItemInput } from '..';

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

describe('<ItemInput  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ItemInput />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
