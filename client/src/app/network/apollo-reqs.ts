import {
  ApolloClient,
  gql,
  MutationOptions,
  OperationVariables,
  QueryOptions,
} from '@apollo/client';

export const queries = {
  qGetResolvers: gql`
    query getResolvers {
      getResolvers
    }
  `,
  qTypeDefs: gql`
    query getTypeDefs {
      getTypeDefs
    }
  `,
  qActions: gql`
    query getActions {
      getActions
    }
  `,
  qResolverNames: gql`
    query getAllResolverNames {
      getAllResolverNames
    }
  `,
  qAllowedTypes: gql`
    query getAllowedTypes {
      getAllowedTypes
    }
  `,
  qDBSchemaNames: gql`
    query getAllDBSchemaNames {
      getAllDBSchemaNames
    }
  `,
  qgetAllSchemaProps: gql`
    query getAllSchemaProps($schemaName: String) {
      getAllSchemaProps(schemaName: $schemaName)
    }
  `,
  qGetAllowedCruds: gql`
    query getAllowedCruds($schemaName: String) {
      getAllowedCruds(schemaName: $schemaName)
    }
  `,
};
export const mutations = {
  mCreateResolver: gql`
    mutation createResolver(
      $name: String
      $comment: String
      $description: String
      $returnType: String
      $type: String
      $properties: [String]
    ) {
      createResolver(
        options: {
          name: $name
          comment: $comment
          description: $description
          returnType: $returnType
          type: $type
          properties: $properties
        }
      )
    }
  `,
  mCreateInterface: gql`
    mutation createCustomType(
      $properties: [String]
      $name: String
      $comment: String
      $typeDef: Boolean
      $dbSchema: Boolean
      $type: String
    ) {
      createCustomType(
        options: {
          properties: $properties
          name: $name
          comment: $comment
          typeDef: $typeDef
          dbSchema: $dbSchema
          type: $type
        }
      )
    }
  `,
  mCreateSchema: gql`
    mutation createSchema(
      $properties: [String]
      $name: String
      $comment: String
      $typeDef: Boolean
      $dbSchema: Boolean
      $type: String
      $uniqueIdentifiers: [String]
    ) {
      createSchema(
        options: {
          properties: $properties
          name: $name
          comment: $comment
          typeDef: $typeDef
          dbSchema: $dbSchema
          type: $type
          uniqueIdentifiers: $uniqueIdentifiers
        }
      )
    }
  `,
  mAddUserAuth: gql`
    mutation addUserAuth(
      $publicUserInputs: [String]
      $authUserInputs: [String]
      $publicUserProperties: [String]
      $authUserProperties: [String]
    ) {
      addUserAuth(
        options: {
          publicUserInputs: $publicUserInputs
          authUserInputs: $authUserInputs
          publicUserProperties: $publicUserProperties
          authUserProperties: $authUserProperties
        }
      )
    }
  `,
  mRestartServer: gql`
    mutation restartServer($timeout: Int) {
      restartServer(timeout: $timeout)
    }
  `,
  mAddCrudOperations: gql`
    mutation addCrudOperations(
      $schemaName: String
      $crudActions: [String]
      $identifier: identifier
    ) {
      addCrudOperations(
        options: {
          schemaName: $schemaName
          crudActions: $crudActions
          identifier: $identifier
        }
      )
    }
  `,
};

export const getterSetterQuery = async (
  client: ApolloClient<object>,
  query: any,
  setter?: (arg0: any) => void,
  extraFunc?: Function,
  vars?,
) => {
  try {
    const qry = query;
    if (vars) {
      const { data } = await client.query({
        query: qry,
        variables: vars,
      });
      const res = data[query.definitions[0].name.value];
      if (setter) setter(res);
      return res;
    } else {
      const { data } = await client.query({
        query: qry,
      });
      const res = data[query.definitions[0].name.value];
      if (setter) setter(res);
      return res;
    }
  } catch ({ message }) {
    console.log(message);
    return message;
  }
};
export const getterSetterMutation = async (
  client: ApolloClient<object>,
  mutation: any,
  vars: MutationOptions<any, OperationVariables>,
  setter?: (arg0: any) => void,
  extraFunc?: Function,
) => {
  try {
    const mt = mutation;
    const { data } = await client.mutate({
      mutation: mt,
      variables: vars,
    });
    const res = data[mutation.definitions[0].name.value];
    if (setter) setter(res);
    return res;
  } catch ({ message }) {
    console.log(message);
    return message;
  }
};
