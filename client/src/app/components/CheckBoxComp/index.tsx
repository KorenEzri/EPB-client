import * as React from 'react';
import * as styles from '../formStyles';
import { CheckBoxDiv } from '../CheckBoxComp/Styles';

export function CheckBox({ name, setOptions, options, label }) {
  const [checked, setChecked] = React.useState(false);
  let checkBoxName = name;
  const splat = checkBoxName.split(' ');
  splat[0] = splat[0].toLowerCase();
  checkBoxName = splat.join('');
  return (
    <div>
      <CheckBoxDiv
        onClick={() => {
          const bool = options[checkBoxName];
          options[checkBoxName] = !bool;
          setChecked(!checked);
          setOptions(options);
        }}
      >
        <div className="custom-checkbox">
          <br />
          <input
            type="checkbox"
            className="custom-checkbox__input"
            id="chkbox1"
            checked={checked}
          />
          <styles.Label className="custom-checkbox__label">
            {label}
          </styles.Label>
        </div>
      </CheckBoxDiv>
    </div>
  );
}
