import * as React from 'react';
import styled from 'styled-components/macro';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
// import { messages } from './messages';

interface Props {}

export function ActionForm(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [select, setSelect] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm();
  const onSubmit = async data => {
    console.log(data);
  };
  return (
    <Wrapper>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <Title>Create an action</Title>
      <HtmlForm onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Input>
            <Label>
              Resolver name<RequiredSpan>*</RequiredSpan>
            </Label>
            <input
              {...register('name', {
                required: true,
              })}
              type="text"
              placeholder="Pick a name, any name.."
            />
            {errors.name && <span>Resolver name is necessary.</span>}
          </Input>
          <Input>
            <Label>
              This is going to be a... <RequiredSpan>*</RequiredSpan>
            </Label>
            <select>
              <option value="Query">Query</option>
              <option value="Mutation">Mutation</option>
            </select>
          </Input>
          <Input>
            <Label>..That will receive? (press Enter to add)</Label>
            <input type="text" placeholder="IE name: String, amount: Number" />
          </Input>
          <Input>
            <Label>
              And will return... <RequiredSpan>*</RequiredSpan>
            </Label>
            <input
              type="text"
              placeholder="String, [String], CustomType, etc.."
            />
          </Input>
          <Input>
            <Label>The resolver itself</Label>
            <textarea placeholder="Anything to start it off with?" />
          </Input>
          <Input>
            <Label>Comment?</Label>
            <input type="text" placeholder="// ...comment" />
          </Input>
        </InputContainer>
        <ButtonContainer>
          <CreateButton type="submit">Create</CreateButton>
        </ButtonContainer>
      </HtmlForm>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const HtmlForm = styled.form``;
const Label = styled.label`
  margin-bottom: 8px;
`;
const Input = styled.div`
  letter-spacing: 1.5px;
  margin: 6px;
  display: flex;
  flex-direction: column;
  input,
  textarea,
  select {
    padding: 4px;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  text-align: center;
`;
const CreateButton = styled.button`
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
const Title = styled.h3`
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
const RequiredSpan = styled.span`
  padding-left: 5px;
  color: #ff3300 !important;
`;
