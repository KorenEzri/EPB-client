import { gql } from '@apollo/client';

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

export const getterSetter = async (
  client: {
    query: (arg0: { query: any }) => PromiseLike<{ data: any }> | { data: any };
  },
  query: any,
  setter: (arg0: any) => void,
  extraFunc?: Function,
) => {
  const qry = query;
  const { data } = await client.query({
    query: qry,
  });
  console.log(query);
  setter(data[query.definitions[0].name.value]);
};
