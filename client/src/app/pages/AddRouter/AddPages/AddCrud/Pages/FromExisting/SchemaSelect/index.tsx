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
        setSelect(schemaNames[0])
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
          const option = Array.from(e.target.selectedOptions)[0];
          if (!(option instanceof HTMLOptionElement)) return;
          const optionValue = option.value;
          setSelect(optionValue)
          // utils.handleSelectChange(e, setSelect, select);
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
