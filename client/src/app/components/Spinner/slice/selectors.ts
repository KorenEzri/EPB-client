import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

export const setSpinner = createSelector(
  [(state: RootState) => state.spinner_show || initialState],
  spinnerShowing => {
    return spinnerShowing.show;
  },
);
