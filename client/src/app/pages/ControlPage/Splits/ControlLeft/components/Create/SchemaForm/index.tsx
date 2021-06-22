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
  const [uniqueIdentifiers, setUniqueIdentifiers] = React.useState(['']);
  const [properties, setProperties] = React.useState({ items: [] });
  const handleSelectChange = (e: {
    target: { selectedOptions: Iterable<unknown> | ArrayLike<unknown> };
  }) => {
    const option = Array.from(e.target.selectedOptions)[0];
    if (!(option instanceof HTMLOptionElement)) return;
    const optionValue = option.value;
    if (uniqueIdentifiers.includes(optionValue)) {
      const newCategoryList = uniqueIdentifiers.filter(
        (prop: string) => prop !== optionValue,
      );
      setUniqueIdentifiers(newCategoryList);
    } else setUniqueIdentifiers(uniqueIdentifiers.concat([optionValue]));
  };
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm();
  const checkTypes = (types: string[]) => {
    return types
      .map((type: string) => {
        if (type?.split('|').length > 1) {
          if (!(type?.split(':').length > 1)) return `returnType: ${type}`;
          return type;
        }
      })
      .filter(v => v != null);
  };
  // placeholder="name: String; workPlace: CustomType3;"
  const onSubmit = async data => {
    const invalidOrTypes = checkTypes([data.returnType])?.concat(
      checkTypes(properties.items),
    );
    if (invalidOrTypes.length) {
      const res = window.prompt(
        `It seems you have chosen to use the "||" or "|" operator in your type definitions.\n\nWhile auto-generation of Typescript interfaces and DB schemas supports these operators, auto-generation of GraphQL scalar types is not supported yet. If you proceed, you'll have to create them yourself.\nAre you sure you want to proceed?\n\nTypes affected:\n${invalidOrTypes}\n\nType "OK" to confirm.`,
      );
      if (res !== 'OK') return;
    }
    data.uniqueIdentifiers = uniqueIdentifiers;
    data.properties = properties;
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
            <Label>Unique property?</Label>
            <select
              multiple={true}
              onChange={handleSelectChange}
              value={uniqueIdentifiers}
            >
              {properties.items?.map((property: string, index: number) => (
                <option value={property} key={`${index}${property}`}>
                  {property}
                </option>
              ))}
            </select>
            <ButtonContainer
              onClick={() => {
                setUniqueIdentifiers(['']);
              }}
            >
              Clear
            </ButtonContainer>
          </Input>
          <Input>
            <Label>Comment?</Label>
            <input
              {...register('comment', {})}
              type="text"
              placeholder="// ...comment"
            />
          </Input>
        </InputContainer>
        <ButtonContainer>
          <CreateButton type="submit">Create</CreateButton>
        </ButtonContainer>
      </HtmlForm>
    </Wrapper>
  );
}
