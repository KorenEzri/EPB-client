import * as React from 'react';
import { useForm } from 'react-hook-form';
// import { useTranslation } from 'react-i18next';
import { MultiInput } from '../../../../../../../components';
import { getterSetterMutation, mutations } from 'app/network';
import { useApolloClient } from '@apollo/client';
import {
  Wrapper,
  Title,
  HtmlForm,
  InputContainer,
  Input,
  Label,
  RequiredSpan,
  ErrorSpan,
  MultiInputContainer,
  ButtonContainer,
  CreateButton,
} from './Styles';
// import { messages } from './messages';

interface Props {
  setRefresh;
  refresh;
}

export function ActionForm(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();
  const client = useApolloClient();
  const [vars, setVars] = React.useState({ items: [] });
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm();
  const onSubmit = async data => {
    data.vars = vars.items;
    console.log(data);
    const res = await getterSetterMutation(
      client,
      mutations.mCreateResolver,
      data,
    );
    if (res === 'OK') {
      props.setRefresh(!props.refresh);
    }
  };

  return (
    <Wrapper>
      {/* {t('')} */}
      {/*  {t(...messages.someThing())}  */}
      <Title>Create an action</Title>
      <HtmlForm
        onSubmit={e => {
          e.preventDefault();
        }}
      >
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
            {errors.name && <ErrorSpan>Resolver name is necessary.</ErrorSpan>}
          </Input>
          <Input>
            <Label>
              This is going to be a... <RequiredSpan>*</RequiredSpan>
            </Label>
            <select
              {...register('type', {
                required: true,
              })}
            >
              <option value="Query">Query</option>
              <option value="Mutation">Mutation</option>
            </select>
          </Input>
          <Input>
            <Label>
              That will return? (can choose from existing typeDefs)
              <RequiredSpan>*</RequiredSpan>
            </Label>
            <input
              {...register('returnType', {
                required: true,
              })}
              type="text"
              placeholder="String, [String], CustomType, etc.."
            />
            {errors.returnType && (
              <ErrorSpan>Return type is necessary.</ErrorSpan>
            )}
          </Input>
          <Input>
            <Label>
              Description
              <RequiredSpan>*</RequiredSpan>
            </Label>
            <input
              type="text"
              {...register('description', {
                required: true,
              })}
              placeholder="IE 'create a new resolver and typeDef in fs.'"
            />
            {errors.description && (
              <ErrorSpan>Return type is necessary.</ErrorSpan>
            )}
          </Input>
          <Input>
            <Label>
              ..And will receive? (press Enter to add, can choose from existing
              typeDefs)
            </Label>
            <MultiInputContainer>
              <MultiInput type="" items={vars} setItems={setVars} />
            </MultiInputContainer>
          </Input>
          <Input>
            <Label>Comment?</Label>
            <input
              {...register('comment', {
                required: false,
              })}
              type="text"
              placeholder="// ...comment"
            />
          </Input>
        </InputContainer>
        <ButtonContainer>
          <CreateButton type="button" onClick={handleSubmit(onSubmit)}>
            Create
          </CreateButton>
        </ButtonContainer>
      </HtmlForm>
    </Wrapper>
  );
}
