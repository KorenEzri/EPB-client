import * as utils from './util';
import * as React from 'react';
import { ButtonContainer } from 'app/components/formStyles';
import * as styles from './Styles';
import { getterSetterQuery, queries } from 'app/network';
import { useApolloClient } from '@apollo/client';

interface Props {
  inputs;
}

export function SchemaSelect(props: Props) {
  const [schemaNames, setSchemaNames] = React.useState<string[]>([])
  const client = useApolloClient();
  React.useEffect(() => {
    (async () => {
      try {
        await getterSetterQuery(client, queries.qDBSchemaNames, setSchemaNames);
      } catch ({ message }) {
        console.log(message);
      }
    })();
  });
  const { setSelect, select } = props.inputs;
  return (
    <styles.Div>
      <styles.SelectBox
        onChange={e => {
          utils.handleSelectChange(e, setSelect, select);
        }}
        value={select}
      >
        {schemaNames?.map((schema, index: number) => {
          return (
            <>
              <styles.Option
                value={schema}
                key={`${index}${schema}`}
                title={schema}
              >
                {schema}
              </styles.Option>
            </>
          );
        })}
      </styles.SelectBox>

    </styles.Div>
  );
}
