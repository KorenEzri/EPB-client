import * as React from 'react';
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
  const { handleSelect, select } = props.inputs;
  return (
    <styles.Div>
      <styles.SelectBox
        onChange={e => {
          const option = Array.from(e.target.selectedOptions)[0];
          if (!(option instanceof HTMLOptionElement)) return;
          const optionValue = option.value;
          handleSelect(optionValue)
        }}
        value={select}
      >
        {schemaNames.length > 0 && <option>Select a schema</option>}
        {schemaNames?.length > 0 ? 
        
        schemaNames.map((schema, index: number) => {
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
        }) : <option value="" title="No schemas found!">No schemas found!</option>}
      </styles.SelectBox>

    </styles.Div>
  );
}
