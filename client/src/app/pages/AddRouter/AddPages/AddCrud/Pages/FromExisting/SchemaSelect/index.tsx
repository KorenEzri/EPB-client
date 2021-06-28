import * as utils from './util';
import * as React from 'react';
import { ButtonContainer } from 'app/components/formStyles';
import * as styles from './Styles';

interface Props {
  inputs;
}

export function SchemaSelect(props: Props) {
  const { setSelect, select } = props.inputs;
  return (
    <styles.Div>
      <styles.SelectBox
        multiple={true}
        onChange={e => {
          utils.handleSelectChange(e, setSelect, select);
        }}
        value={select}
      >
        {utils.possibleInputs.auth.map((input, index: number) => {
          const inputName = input.inputName;
          const inputType = input.inputType;
          return (
            <>
              <styles.Option
                value={`${inputName}:${inputType}`}
                key={`${index}${inputName}`}
                title={inputType}
              >
                {inputName} - type {inputType}
              </styles.Option>
            </>
          );
        })}
      </styles.SelectBox>
      <ButtonContainer>
        <styles.ClearSelectBtn
          type="button"
          onClick={() => {
            setSelect(['']);
          }}
        >
          Clear all
        </styles.ClearSelectBtn>
      </ButtonContainer>
    </styles.Div>
  );
}
