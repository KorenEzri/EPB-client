import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as styles from '../StyledComponents';
import { Spinner, SubmitLoader } from 'app/components';
import { useApolloClient } from '@apollo/client';
import { getterSetterQuery, queries } from 'app/network';
import { getterSetterMutation, mutations } from 'app/network';
import { setUpTypeData } from '../util';
import { CustomTypeInputs } from './CustomTypeInputs/Loadable';

interface Props {
  allowedTypes:string[]
  fetchAllowedTypes
}
export function CustomTypeForm(props: Props) {
  const client = useApolloClient();
  const [resolverNames, setResolverNames] = React.useState<string[]>([]);
  const [spinnerShow, setSpinnerShow] = React.useState(false);
  const [dbSchema, setDbSchema] = React.useState(false);
  const [typeDef, setTypeDef] = React.useState(false);
  const [error, setError] = React.useState('');
  const [properties, setProperties] = React.useState({ items: [] });
  const [uniqueIdentifiers, setUniqueIdentifiers] = React.useState(['']);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  

  const validateName = (v: string) =>
    resolverNames.includes(v) ? false : true;

  const sendQueries = async data => {
    if (!properties.items.length) {
      setError('Properties are necessary to compose an interface!');
      return;
    }
    setSpinnerShow(true);
    data.typeDef = typeDef;
    data.dbSchema = dbSchema;
    const res = await getterSetterMutation(
      client,
      mutations.mCreateInterface,
      data,
    );
    if (res && res !== 'OK') setError(res);
    if (data.dbSchema) {
      const schemaRes = await getterSetterMutation(
        client,
        mutations.mCreateSchema,
        data,
      );
      if (schemaRes !== 'OK') setError(schemaRes);
      setSpinnerShow(false);
    }
    setSpinnerShow(false);
  };
  const onSubmit = async data => {
    if (!properties.items.length) {
      setError('Properties are necessary to compose an interface!');
      return;
    }
    data = setUpTypeData(data, properties, uniqueIdentifiers);

    try {
      await sendQueries(data);
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
    <styles.Wrapper>
      <styles.Title>Create a custom type</styles.Title>
      <styles.HtmlForm
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <styles.InputContainer>
          <CustomTypeInputs
            validateName={validateName}
            errors={errors}
            properties={properties}
            setProperties={setProperties}
            register={register}
            uniqueIdentifiers={uniqueIdentifiers}
            setUniqueIdentifiers={setUniqueIdentifiers}
            dbSchema={dbSchema}
            setDbSchema={setDbSchema}
            setTypeDef={setTypeDef}
            typeDef={typeDef}
          />
        </styles.InputContainer>
        <styles.ButtonContainer>
          <Spinner
            VisualComponent={SubmitLoader}
            show={spinnerShow}
            error={error}
            setError={setError}
          >
            <styles.CreateButton type="button" onClick={handleSubmit(onSubmit)}>
              Create
            </styles.CreateButton>
          </Spinner>
        </styles.ButtonContainer>
      </styles.HtmlForm>
    </styles.Wrapper>
  );
}
