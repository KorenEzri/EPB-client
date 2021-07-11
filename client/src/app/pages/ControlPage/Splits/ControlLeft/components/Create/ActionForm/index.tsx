import * as React from 'react';
import { useForm } from 'react-hook-form';
import { MultiInput } from '../../../../../../../components';
import { getterSetterQuery, queries } from 'app/network';
import { getterSetterMutation, mutations } from 'app/network';
import {
  Label,
  CreateButton,
  ButtonContainer,
  ErrorSpan,
  RequiredSpan,
  Input,
  InputContainer,
} from 'app/components/formStyles';
import { Spinner, SubmitLoader } from 'app/components';
import { useApolloClient } from '@apollo/client';
import { Wrapper, Title, HtmlForm, MultiInputContainer } from './Styles';
import { InputSuggestionList } from 'app/components/InputSuggestionList/Loadable';
import { addToAllowedTypes } from '../util';

interface Props {
  allowedTypes: string[];
}
export function ActionForm(props: Props) {
  const { allowedTypes } = props;
  const client = useApolloClient();
  const [resolverNames, setResolverNames] = React.useState<string[]>([]);
  const [textValue, setTextValue] = React.useState<string | undefined>();
  const [searchResult, setSearchResults] = React.useState<string[] | undefined>(
    [],
  );
  const [spinnerShow, setSpinnerShow] = React.useState(false);
  const [error, setError] = React.useState('');
  const [vars, setVars] = React.useState({ items: [] });
  const validateName = (v: string) =>
    resolverNames.includes(v) ? false : true;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  React.useEffect(() => {
    (async () => {
      await getterSetterQuery(client, queries.qResolverNames, setResolverNames);
    })();
  });
  const handleResultSuggestions = async e => {
    const input = e.target.value;
    setTextValue(input);
    const searchSuggestions = allowedTypes.filter(val => {
      if (val === input) return val;
      else return val.includes(input);
    });
    searchSuggestions.length = 6;
    if (!input) {
      setSearchResults(undefined);
      return;
    }
    setSearchResults(searchSuggestions);
  };
  const checkTypes = (types: string[]) => {
    return types
      .map((type: string) => {
        if (type.split('|').length > 1) {
          if (!(type.split(':').length > 1)) return `returnType: ${type}`;
          return type;
        }
      })
      .filter(v => v != null);
  };
  const onSubmit = async data => {
    const invalidOrTypes = checkTypes([data.returnType])?.concat(
      checkTypes(vars.items),
    );
    if (invalidOrTypes.length) {
      const res = window.prompt(
        `It seems you have chosen to use the "||" or "|" operator in your type definitions.\n\nWhile auto-generation of Typescript interfaces and DB schemas supports these operators, auto-generation of GraphQL scalar types is not supported yet. If you proceed, you'll have to create them yourself.\nAre you sure you want to proceed?\n\nTypes affected:\n${invalidOrTypes}\n\nType "OK" to confirm.`,
      );
      if (res !== 'OK') return;
    }
    try {
      setSpinnerShow(true);
      data.properties = vars.items;
      data.returnType = textValue;
      const res = await getterSetterMutation(
        client,
        mutations.mCreateResolver,
        data,
      );
      let timeout: any = {timeout:700};

      await getterSetterMutation(client, mutations.mRestartServer, timeout);
      addToAllowedTypes(
        allowedTypes,
        data.name,
        data.type === 'Query' ? 'type' : 'input',
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

  return (
    <Wrapper>
      {/* {t('')} */}
      {/*  {t(...messages.someThing())}  */}
      <Title>Create an action</Title>
      <HtmlForm
        onSubmit={e => {
          e.preventDefault();
        }}
        autoComplete="off"
      >
        <InputContainer>
          <Input>
            <Label>
              Resolver name<RequiredSpan>*</RequiredSpan>
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
              <ErrorSpan>Resolver name must be unique.</ErrorSpan>
            ) : errors.name ? (
              <ErrorSpan>Resolver name is necessary.</ErrorSpan>
            ) : null}
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
              onChange={e => {
                handleResultSuggestions(e);
              }}
              type="text"
              value={textValue}
              placeholder="String, [String], CustomType, etc.."
            />
            <InputSuggestionList
              setter={setTextValue}
              value={textValue}
              searchResults={searchResult}
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
              <ErrorSpan>Description is necessary.</ErrorSpan>
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
