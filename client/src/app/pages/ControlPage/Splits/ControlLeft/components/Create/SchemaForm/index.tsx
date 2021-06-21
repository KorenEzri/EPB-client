import * as React from 'react';
import { useForm } from 'react-hook-form';
import {
  ButtonContainer,
  CreateButton,
  ErrorSpan,
  HtmlForm,
  Input,
  InputContainer,
  Label,
  MultiInputContainer,
  RequiredSpan,
  Wrapper,
  Title,
} from '../StyledComponents';
import { MultiInput } from 'app/components';
// import { useTranslation } from 'react-i18next';
// import { messages } from './messages';

interface Props {}

export function SchemaForm(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();
  const [properties, setProperties] = React.useState({ items: [] });
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm();
  // placeholder="name: String; workPlace: CustomType3;"
  const onSubmit = async data => {
    if (!properties.items[0]) {
      console.log('here');
      errors.properties = '1';
      console.log(errors);
      return;
    }
    console.log(data);
  };
  return (
    <Wrapper>
      {/* {t('')} */}
      {/*  {t(...messages.someThing())}  */}
      <Title>Create a database schema</Title>
      <HtmlForm onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Input>
            <Label>
              Type name <RequiredSpan>*</RequiredSpan>
            </Label>
            <input
              {...register('name', {
                required: true,
              })}
              type="text"
              placeholder="Pick a name, any name.."
            />
            {errors.name && <ErrorSpan>Type name is necessary.</ErrorSpan>}
          </Input>
          <Input>
            <Label>
              Properties (Press Enter to add) <RequiredSpan>*</RequiredSpan>
            </Label>
            <MultiInputContainer>
              <MultiInput type="" items={properties} setItems={setProperties} />
            </MultiInputContainer>
            {errors.properties && (
              <ErrorSpan>At least one property is necessary.</ErrorSpan>
            )}
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
