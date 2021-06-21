// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly
import { SpinnerShow } from '../app/components/Spinner/slice/types';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  spinner_show?: SpinnerShow;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
