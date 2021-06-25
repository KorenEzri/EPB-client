import * as styles from '../../StyledComponents';
import * as React from 'react';
import styled from 'styled-components/macro';
import { MultiInput } from 'app/components';
import { handleSelectChange } from '../../util';

export function CustomTypeInputs({
  validateName,
  errors,
  properties,
  setProperties,
  register,
  uniqueIdentifiers,
  setUniqueIdentifiers,
  dbSchema,
  setDbSchema,
  setTypeDef,
  typeDef,
}) {
  return (
    <Div>
      <styles.Input>
        <styles.Label>
          Type name <styles.RequiredSpan>*</styles.RequiredSpan>
        </styles.Label>
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
          <styles.ErrorSpan>Type name must be unique.</styles.ErrorSpan>
        ) : errors.name ? (
          <styles.ErrorSpan>Type name is necessary.</styles.ErrorSpan>
        ) : null}
        <styles.Input></styles.Input>
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
        <styles.Label>Comment?</styles.Label>
        <input
          {...register('comment')}
          type="text"
          placeholder="// ...comment"
        />
      </styles.Input>
      <styles.Input>
        <styles.CheckBox
          onClick={() => {
            setDbSchema(!dbSchema);
          }}
        >
          <div className="custom-checkbox">
            <br />
            <input
              type="checkbox"
              className="custom-checkbox__input"
              id="chkbox1"
              checked={dbSchema}
            />
            <styles.Label className="custom-checkbox__label">
              Also create a DB schema.
            </styles.Label>
          </div>
        </styles.CheckBox>
        {dbSchema && (
          <styles.Input>
            <styles.Label>Unique property?</styles.Label>
            <select
              multiple={true}
              onChange={e => {
                handleSelectChange(e, setUniqueIdentifiers, uniqueIdentifiers);
              }}
              value={uniqueIdentifiers}
            >
              {properties.items?.map((property: string) => (
                <option value={property}>{property}</option>
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
        )}
      </styles.Input>
      <styles.Input>
        <styles.CheckBox
          onClick={() => {
            setTypeDef(!typeDef);
          }}
        >
          <div className="custom-checkbox">
            <input
              type="checkbox"
              className="custom-checkbox__input"
              checked={typeDef}
              id="chkbox1"
            />
            <styles.Label className="custom-checkbox__label">
              Also create a GraphQL type definition.
            </styles.Label>
          </div>
        </styles.CheckBox>
        {typeDef && (
          <styles.Input>
            <styles.Label>'input' or 'type'?</styles.Label>
            <input
              {...register('type')}
              type="text"
              placeholder="input || type"
            />
          </styles.Input>
        )}
      </styles.Input>
    </Div>
  );
}

const Div = styled.div``;
