import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  action;
}
export function Action(props: Props) {
  return (
    <div
      onMouseEnter={e => {
        const { target } = e;
        if (target && target instanceof HTMLElement) {
          const text = target.textContent;
          if (!text) return;
          const allComments = document.querySelectorAll('.comment');
          allComments.forEach(comment => {
            if (comment instanceof HTMLElement) {
              if (
                comment?.textContent?.split('//')[1].trim() ===
                  `Action: ${text}` ||
                comment?.textContent?.split('//')[1].trim() ===
                  `Action: ${text.toLowerCase()}`
              )
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
      <ActionDiv>{props.action}</ActionDiv>
    </div>
  );
}
const ActionDiv = styled.div`
  cursor: pointer;
  border-bottom: 1px solid black;
  height: 60px;
  line-height: 45px;
  padding: 8px;
  transition: 500ms;
  &:hover {
    transition: 500ms;
    background-color: #4d7696;
  }
  &:active {
    transition: 100ms;
    background-color: #294358;
  }
`;
