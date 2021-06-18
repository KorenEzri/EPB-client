/**
 *
 * Action
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
// import { messages } from './messages';

const removeHightlight = () => {
  const allTargs = document.querySelectorAll('highlight');
  allTargs.forEach(target => target?.classList.remove('highlight'));
  return;
};
// function highlight(text: string, remove?: boolean) {
//   if (remove) {
//     removeHightlight();
//     return;
//   } else removeHightlight();
//   var inputText = document.getElementsByTagName('body')[0];
//   var innerHTML = inputText.innerHTML;
//   var index = innerHTML.indexOf(text);

//   if (index >= 0) {
//     innerHTML =
//       innerHTML.substring(0, index) +
//       "<span class='highlight'>" +
//       innerHTML.substring(index, index + text.length) +
//       '</span>' +
//       innerHTML.substring(index + text.length);
//     inputText.innerHTML = innerHTML;
//   }
// }

interface Props {
  action;
}

export function Action(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <div
      onMouseEnter={e => {
        const { target } = e;
        if (target && target instanceof HTMLElement) {
          const text = target.textContent;
          if (!text) return;
          const allComments = document.querySelectorAll('.comment');
          allComments.forEach(comment => {
            if (
              comment instanceof HTMLElement &&
              comment?.textContent?.split('//')[1].trim() ===
                `Action: ${text.toLowerCase()}`
            ) {
              comment.classList.add('highlight');
            }
          });
        }
      }}
      onClick={e => {
        const highlighted = document.querySelector('.highlight');
        if (highlighted instanceof HTMLElement) {
          const perma = document.querySelector('.permalight');
          if (perma instanceof HTMLElement)
            perma.classList.remove('permalight');
          highlighted.classList.add('permalight');
          highlighted.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
          });
        }
      }}
      onMouseLeave={() => {
        const allComments = document.querySelectorAll('.comment');
        allComments.forEach(comment => {
          if (comment instanceof HTMLElement) {
            comment.classList.remove('highlight');
          }
        });
      }}
    >
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <ActionDiv>{props.action}</ActionDiv>
    </div>
  );
}

const Div = styled.div``;
const ActionDiv = styled.div`
  cursor: pointer;
  border-bottom: 1px solid black;
  padding: 8px;
  transition: 500ms;
  &:hover {
    transition: 500ms;
    background-color: #263e52;
  }
`;
