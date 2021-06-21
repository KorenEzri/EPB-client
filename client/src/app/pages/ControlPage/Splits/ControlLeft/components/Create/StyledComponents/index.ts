import styled from 'styled-components/macro';

export const Wrapper = styled.div``;
export const HtmlForm = styled.form``;
export const Label = styled.label`
  margin-bottom: 8px;
`;
export const Input = styled.div`
  letter-spacing: 1.5px;
  margin: 6px;
  display: flex;
  flex-direction: column;
  input,
  textarea,
  select {
    padding: 6px;
    width: 60%;
    background-color: #0f202d;
    color: #85bcd8;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ButtonContainer = styled.div`
  text-align: center;
`;
export const CreateButton = styled.button`
  box-shadow: inset 0px -3px 7px 0px #29bbff;
  background: linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
  background-color: #2dabf9;
  border-radius: 3px;
  border: 1px solid #0b0e07;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 18px;
  font-weight: bold;
  padding: 13px 26px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #263666;
  margin-top: 10px;
  &:hover {
    background: linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
    background-color: #0688fa;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
export const Title = styled.h3`
  text-align: center;
  font-weight: normal;
  letter-spacing: 1px;
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  @-webkit-keyframes slideInDown {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes slideInDown {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
`;
export const RequiredSpan = styled.span`
  padding-left: 5px;
  color: #ff3300 !important;
`;
export const MultiInputContainer = styled.div`
  margin-top: -10px;
`;
export const ErrorSpan = styled.span`
  margin-top: 5px;
  color: #ff3300 !important;
`;

export const CheckBox = styled.div`
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
