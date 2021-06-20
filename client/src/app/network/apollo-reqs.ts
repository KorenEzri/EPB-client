import {
  ApolloClient,
  gql,
  MutationOptions,
  OperationVariables,
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
};
export const mutations = {
  mCreateResolver: gql`
    mutation createResolver(
      $name: String
      $comment: String
      $resolver: String
      $returnType: String
      $type: String
      $vars: [String]
    ) {
      createResolver(
        options: {
          name: $name
          comment: $comment
          resolver: $resolver
          returnType: $returnType
          type: $type
          vars: $vars
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
) => {
  try {
    const qry = query;
    const { data } = await client.query({
      query: qry,
    });
    const res = data[query.definitions[0].name.value];
    if (setter) setter(res);
    return res;
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
