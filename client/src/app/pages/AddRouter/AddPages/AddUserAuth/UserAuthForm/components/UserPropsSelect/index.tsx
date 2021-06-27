import * as utils from '../../util';
import * as React from 'react';
import { ButtonContainer } from 'app/components/formStyles';
import * as styles from '../../Styles';

interface Props {
  inputs;
}

export function UserPropsSelect(props: Props) {
  const { setUserProperties, userProperties } = props.inputs;
  return (
    <styles.Div>
      <styles.SelectBox
        multiple={true}
        onChange={e => {
          utils.handleSelectChange(e, setUserProperties, userProperties);
        }}
        value={userProperties}
      >
        {utils.possibleProperties.user.map((input, index: number) => {
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
            setUserProperties([]);
          }}
        >
          Clear all
        </styles.ClearSelectBtn>
      </ButtonContainer>
    </styles.Div>
  );
}
