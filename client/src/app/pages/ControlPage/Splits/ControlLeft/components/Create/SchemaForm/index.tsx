import * as React from 'react';
import * as styles from '../StyledComponents';
import { useForm } from 'react-hook-form';
import { Spinner, SubmitLoader } from 'app/components';
import { getterSetterMutation, mutations } from 'app/network';
import { useApolloClient } from '@apollo/client';
import { addToAllowedTypes, setUpSchemaData } from '../util';
import { SchemaInputs } from './SchemaInputs/Loadable';

interface Props {
  allowedTypes: string[];
}
export function SchemaForm(props: Props) {
  const client = useApolloClient();
  const [uniqueIdentifiers, setUniqueIdentifiers] = React.useState(['']);
  const [error, setError] = React.useState('');
  const [spinnerShow, setSpinnerShow] = React.useState(false);
  const [properties, setProperties] = React.useState({ items: [] });
  const useFormProps = useForm();
  const { handleSubmit } = useFormProps;

  const onSubmit = async data => {
    data = setUpSchemaData(data, properties, uniqueIdentifiers);
    if (!properties.items.length) {
      setError('Properties are necessary to compose an interface!');
      return;
    }
    try {
      setSpinnerShow(true);
      const schemaRes = await getterSetterMutation(
        client,
        mutations.mCreateSchema,
        data,
      );
      if (schemaRes !== 'OK') setError(schemaRes);
      let timeout: any = 700;
      await getterSetterMutation(client, mutations.mRestartServer, timeout);
      addToAllowedTypes(props.allowedTypes, data.name, '');
      setSpinnerShow(false);
    } catch ({ message }) {
      setSpinnerShow(false);
      setError(message);
    }
  };

  return (
    <styles.Wrapper>
      <styles.Title>Create a database schema</styles.Title>
      <styles.HtmlForm
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <styles.InputContainer>
          <SchemaInputs
            useFormProps={useFormProps}
            properties={properties}
            setProperties={setProperties}
            uniqueIdentifiers={uniqueIdentifiers}
            setUniqueIdentifiers={setUniqueIdentifiers}
          />
        </styles.InputContainer>
        <Spinner
          VisualComponent={SubmitLoader}
          show={spinnerShow}
          error={error}
          setError={setError}
        >
          <styles.ButtonContainer>
            <styles.CreateButton type="button" onClick={handleSubmit(onSubmit)}>
              Create
            </styles.CreateButton>
          </styles.ButtonContainer>
        </Spinner>
      </styles.HtmlForm>
    </styles.Wrapper>
  );
}
