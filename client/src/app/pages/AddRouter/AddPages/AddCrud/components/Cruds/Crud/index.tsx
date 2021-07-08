import * as React from 'react';
import * as styles from './Styles';
import styled from 'styled-components';
import * as formStyles from 'app/components/formStyles';
import { CheckBox } from 'app/components';
import { getterSetterMutation, mutations } from 'app/network';
import { useApolloClient } from '@apollo/client';
import { SchemaSelect } from '../../../Pages/FromExisting/SchemaSelect/Loadable';
interface Props {
  actions;
}

export function Crud(props: Props) {
  const client = useApolloClient();
  const submitCreationRequest = async () => {
    let crudOptions: any = {};
    let crudActions:any[] = []
    for (const action in options) {
      if (Object.prototype.hasOwnProperty.call(options, action)) {
        const element = options[action];
        if (element) crudActions.push(action)
      }
    }
    crudOptions.crudActions = crudActions
    crudOptions.schemaName = select;
    crudOptions.identifier = identifier;
    try {
      // setSpinnerShow(true);
      console.log(crudOptions)
      const res = await getterSetterMutation(
        client,
        mutations.mAddCrudOperations,
        crudOptions,
      );
      // setSpinnerShow(false);
    } catch ({ message }) {
      // setSpinnerShow(false);
      // setError(message);
    }
  };
  const { actions } = props;
  const [hide, setHide] = React.useState(false);
  const [select, setSelect] = React.useState('');
  const [identifier, setIdentifier] = React.useState({ name: '', type: '' });
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
      <styles.ActionDiv hide={false}>Select a schema</styles.ActionDiv>
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
          <SubmitButton
            onClick={async () => {
              await submitCreationRequest();
            }}
          >
            Create
          </SubmitButton>
        </TextContainer>
        {/* <IDPropertyDiv>
          <styles.ActionDiv hide={hide}>
            <p>Choose an identifying property</p>
          </styles.ActionDiv>
          </IDPropertyDiv> */}
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
const SubmitButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #a4e271;
  background: linear-gradient(to bottom, #89c403 5%, #77a809 100%);
  background-color: #89c403;
  border-radius: 6px;
  border: 1px solid #74b807;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #528009;
  &:hover {
    background: linear-gradient(to bottom, #77a809 5%, #89c403 100%);
    background-color: #77a809;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
const IDPropertyDiv = styled.div`
margin-bottom: 50px;
height: 10px;


`