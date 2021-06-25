import * as styles from '../../StyledComponents';
import * as React from 'react';
import styled from 'styled-components/macro';
import { handleSelectChange } from '../../util';
import { MultiInput } from 'app/components';

export function SchemaInputs({
  useFormProps,
  properties,
  setProperties,
  uniqueIdentifiers,
  setUniqueIdentifiers,
}) {
  const {
    register,
    formState: { errors },
  } = useFormProps;

  return (
    <Div>
      <styles.Input>
        <styles.Label>
          Type name <styles.RequiredSpan>*</styles.RequiredSpan>
        </styles.Label>
        <input
          {...register('name', {
            required: true,
          })}
          type="text"
          placeholder="Pick a name, any name.."
        />
        {errors.name && (
          <styles.ErrorSpan>Type name is necessary.</styles.ErrorSpan>
        )}
      </styles.Input>
      <styles.Input>
        <styles.Label>
          Properties (Press Enter to add){' '}
          <styles.RequiredSpan>*</styles.RequiredSpan>
        </styles.Label>
        <styles.MultiInputContainer>
          <MultiInput type="" items={properties} setItems={setProperties} />
        </styles.MultiInputContainer>
        {errors.properties && (
          <styles.ErrorSpan>
            At least one property is necessary.
          </styles.ErrorSpan>
        )}
      </styles.Input>
      <styles.Input>
        <styles.Label>Unique property?</styles.Label>
        <select
          multiple={true}
          onChange={e => {
            handleSelectChange(e, setUniqueIdentifiers, uniqueIdentifiers);
          }}
          value={uniqueIdentifiers}
        >
          {properties.items?.map((property: string, index: number) => (
            <option value={property} key={`${index}${property}`}>
              {property}
            </option>
          ))}
        </select>
        <styles.ButtonContainer
          onClick={() => {
            setUniqueIdentifiers(['']);
          }}
        >
          Clear
        </styles.ButtonContainer>
      </styles.Input>
      <styles.Input>
        <styles.Label>Comment?</styles.Label>
        <input
          {...register('comment', {})}
          type="text"
          placeholder="// ...comment"
        />
      </styles.Input>
    </Div>
  );
}

const Div = styled.div``;
