import * as React from 'react';
import { useForm } from 'react-hook-form';
// import { useTranslation } from 'react-i18next';
import { MultiInput } from 'app/components';
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
  Title,
  Wrapper,
  CheckBox,
} from '../StyledComponents';
import { Spinner, SubmitLoader } from 'app/components';
import { useApolloClient } from '@apollo/client';
import { getterSetterQuery, queries } from 'app/network';
import { getterSetterMutation, mutations } from 'app/network';
// import { messages } from './messages';

interface Props {}

export function CustomTypeForm(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();
  const client = useApolloClient();
  const [resolverNames, setResolverNames] = React.useState<string[]>([]);
  const [spinnerShow, setSpinnerShow] = React.useState(false);
  const [dbSchema, setDbSchema] = React.useState(false);
  const [typeDef, setTypeDef] = React.useState(false);
  const [error, setError] = React.useState('');
  const [properties, setProperties] = React.useState({ items: [] });
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm();
  const validateName = (v: string) =>
    resolverNames.includes(v) ? false : true;
  // placeholder="name: String; workPlace: CustomType3;"
  const onSubmit = async data => {
    try {
      if (!properties.items.length) {
        setError('Properties are necessary to compose an interface!');
        return;
      }
      setSpinnerShow(true);
      data.properties = properties.items;
      data.typeDef = typeDef;
      data.dbSchema = dbSchema;
      const res = await getterSetterMutation(
        client,
        mutations.mCreateInterface,
        data,
      );
      setSpinnerShow(false);
      if (res !== 'OK') {
        setError(res);
      }
    } catch ({ message }) {
      setSpinnerShow(false);
      setError(message);
    }
  };
  React.useEffect(() => {
    (async () => {
      await getterSetterQuery(client, queries.qResolverNames, setResolverNames);
    })();
  });
  return (
    <Wrapper>
      {/* {t('')} */}
      {/*  {t(...messages.someThing())}  */}
      <Title>Create a custom type</Title>
      <HtmlForm
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <InputContainer>
          <Input>
            <Label>
              Type name <RequiredSpan>*</RequiredSpan>
            </Label>
            <input
              {...register('name', {
                required: true,
                validate: {
                  unique: validateName,
                },
              })}
              type="text"
              placeholder="Pick a name, any name.."
            />
            {errors.name && errors.name.type === 'unique' ? (
              <ErrorSpan>Type name must be unique.</ErrorSpan>
            ) : errors.name ? (
              <ErrorSpan>Type name is necessary.</ErrorSpan>
            ) : null}
            <Input></Input>
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
            <input
              {...register('comment')}
              type="text"
              placeholder="// ...comment"
            />
          </Input>
          <Input>
            <CheckBox
              onClick={() => {
                setDbSchema(!dbSchema);
              }}
            >
              <div className="custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-checkbox__input"
                  id="chkbox1"
                  checked={dbSchema}
                />
                <Label className="custom-checkbox__label">
                  Also create a DB schema.
                </Label>
              </div>
            </CheckBox>
          </Input>
          <Input>
            <CheckBox
              onClick={() => {
                setTypeDef(!typeDef);
              }}
            >
              <div className="custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-checkbox__input"
                  checked={typeDef}
                  id="chkbox1"
                />
                <Label className="custom-checkbox__label">
                  Also create a GraphQL type definition.
                </Label>
              </div>
            </CheckBox>
          </Input>
        </InputContainer>
        <ButtonContainer>
          <Spinner
            VisualComponent={SubmitLoader}
            show={spinnerShow}
            error={error}
            setError={setError}
          >
            <CreateButton type="button" onClick={handleSubmit(onSubmit)}>
              Create
            </CreateButton>
          </Spinner>
        </ButtonContainer>
      </HtmlForm>
    </Wrapper>
  );
}
