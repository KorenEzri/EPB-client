import * as React from 'react';
import { render } from '@testing-library/react';

import { CustomTypeForm } from '..';

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

describe('<CustomTypeForm  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CustomTypeForm />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
