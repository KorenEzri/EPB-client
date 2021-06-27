import * as utils from '../../util';
import * as React from 'react';
import { ButtonContainer } from 'app/components/formStyles';
import * as styles from '../../Styles';

interface Props {
  inputs;
}

export function AuthInputSelect(props: Props) {
  const { setAuthInputs, authInputs } = props.inputs;
  return (
    <styles.Div>
      <styles.SelectBox
        multiple={true}
        onChange={e => {
          utils.handleSelectChange(e, setAuthInputs, authInputs);
        }}
        value={authInputs}
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
            setAuthInputs(['username:string', 'password:string']);
          }}
        >
          Clear all
        </styles.ClearSelectBtn>
      </ButtonContainer>
    </styles.Div>
  );
}
