import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { SpinnerShow } from './types';

export const initialState: SpinnerShow = {
  show: false,
};

const slice = createSlice({
  name: 'spinner_show',
  initialState,
  reducers: {
    setSpinner(state, action: PayloadAction<SpinnerShow>) {
      state.show = action.payload.show;
    },
  },
});

export const { actions: spinnerActions, reducer } = slice;
export const useSpinnerSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
