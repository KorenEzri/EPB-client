/**
*
* Asynchronously loads the component for InputSuggestionList
*
*/

import { lazyLoad } from 'utils/loadable';

export const InputSuggestionList = lazyLoad(() => import('./index'), module => module.InputSuggestionList);