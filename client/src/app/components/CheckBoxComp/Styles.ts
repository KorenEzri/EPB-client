import styled from 'styled-components';
export const CheckBoxDiv = styled.div`
  .custom-checkbox {
    user-select: none;
  }

  .custom-checkbox__input {
    position: absolute;
    opacity: 0%;
    z-index: -1;
  }

  .custom-checkbox__label {
    cursor: pointer;

    display: flex;
    align-items: center;

    padding-left: 25px;
  }

  /* ::before for checkbox frame */
  .custom-checkbox__label::before {
    content: ' ';

    position: absolute;

    height: 18px;
    width: 18px;

    transform: translate(-25px, 0px);

    border: 2px solid lightgray;
    border-radius: 2px;

    transition: all 0.1s ease-out;
  }

  /* ::after for checkbox OK symbol inside the frame */
  .custom-checkbox__label::after {
    content: ' ';

    position: absolute;

    height: 6px;
    width: 10px;

    transform: translate(-21px, -1px) rotate(-45deg);
  }

  /* Checked (enabled) */
  .custom-checkbox__input:enabled:checked + .custom-checkbox__label::before {
    background-color: var(--blue);
    border-color: var(--blue);
  }

  .custom-checkbox__input:checked + .custom-checkbox__label::after {
    border-bottom: 3px solid var(--page-background);
    border-left: 3px solid var(--page-background);
  }

  /* Active, Hover (enabled) */
  .custom-checkbox__input:enabled + .custom-checkbox__label:hover::before,
  .custom-checkbox__input:enabled + .custom-checkbox__label:active:before {
    border-color: var(--blue);
  }

  /* Focus border */
  .custom-checkbox__input:focus + .custom-checkbox__label::before {
    box-shadow: 0 0 0px 2px var(--page-background),
      0 0 0px 4px var(--light-blue);
  }
  /* #0068FF */
  /* #ACDAFA */
  --blue: hsl(216deg 100% 50%);
  --blue-grad: hsl(216deg 100% 43%);
  --light-blue: hsl(205deg 89% 83%);
  --disable-gray: hsl(0deg 0% 60%);
  --page-background: white;

  box-sizing: border-box;

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
