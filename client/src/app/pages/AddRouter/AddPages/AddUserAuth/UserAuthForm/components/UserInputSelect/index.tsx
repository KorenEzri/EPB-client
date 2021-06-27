import * as utils from '../../util';
import * as React from 'react';
import { ButtonContainer } from 'app/components/formStyles';
import * as styles from '../../Styles';

interface Props {
  inputs;
}

export function UserInputSelect(props: Props) {
  const { setUserInputs, userInputs } = props.inputs;

  return (
    <styles.Div>
      <styles.SelectBox
        multiple={true}
        onChange={e => {
          utils.handleSelectChange(e, setUserInputs, userInputs);
        }}
        value={userInputs}
      >
        {utils.possibleInputs.user.map((input, index: number) => {
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
            setUserInputs([]);
          }}
        >
          Clear all
        </styles.ClearSelectBtn>
      </ButtonContainer>
    </styles.Div>
  );
}
