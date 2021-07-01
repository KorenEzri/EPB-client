import * as React from 'react';
import * as styles from './Styles';
import styled from 'styled-components';
import * as formStyles from 'app/components/formStyles';
import { CheckBox } from 'app/components';
import { SchemaSelect } from '../../../Pages/FromExisting/SchemaSelect/Loadable';
interface Props {
  actions;
}

export function Crud(props: Props) {
  const { actions } = props;
  const [hide, setHide] = React.useState(false);
  const [select, setSelect] = React.useState(['']);
  const [options, setOptions] = React.useState({
    createOne: false,
    createMany: false,
    readOne: false,
    readMany: false,
    updateOne: false,
    updateMany: false,
    deleteOne: false,
    deleteMany: false,
  });
  return (
    <styles.Wrapper hide={hide}>
      <styles.ActionDiv hide={false}>
        Select a schema
      </styles.ActionDiv>
      <formStyles.Input>
        <formStyles.InputContainer>
          <SchemaSelect inputs={{ setSelect, select }} />
        </formStyles.InputContainer>
      </formStyles.Input>
      <styles.ActionDiv hide={hide}>Choose CRUD Actions</styles.ActionDiv>
      <styles.ActionWrapperHidden hide={hide}>
        <TextContainer>
          <styles.Description>
            {actions.map((action, index) => {
              const label = `${action.name} - ${action.title}`;
              const name = action.name;
              return (
                <Div>
                  <SmallOption>
                    <CheckBox
                      label={label}
                      name={name}
                      setOptions={setOptions}
                      options={options}
                    />
                  </SmallOption>
                </Div>
              );
            })}
          </styles.Description>
        </TextContainer>
      </styles.ActionWrapperHidden>
    </styles.Wrapper>
  );
}
const TextContainer = styled.div`
  background-color: #263e52;
  padding-bottom: 10px;
  margin-top: -20px;
`;
const Div = styled.div``;
const SmallOption = styled.p`
  margin: 12px;
  cursor: pointer;
`;
