import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useApolloClient } from '@apollo/client';
import styled from 'styled-components';
import { Spinner, SubmitLoader } from 'app/components';
import { getterSetterMutation, mutations } from 'app/network';
import * as selects from './components';
import * as formStyles from 'app/components/formStyles';

interface Props {}

export function UserAuthForm(props: Props) {
  const client = useApolloClient();
  const [spinnerShow, setSpinnerShow] = React.useState(false);
  const [error, setError] = React.useState('');
  const [authInputs, setAuthInputs] = React.useState([
    'username:string',
    'password:string',
  ]);
  const [authProperties, ] = React.useState(['']);
  const [userInputs, setUserInputs] = React.useState(['']);
  const [userProperties, setUserProperties] = React.useState(['']);
  const setUpData = data => {
    if (!authInputs.includes('username:string')) {
      authInputs.push('username:string');
    }
    if (!authInputs.includes('password:string')) {
      authInputs.push('password:string');
    }
    data.authUserInputs = authInputs.filter(val => val !== '');
    data.authUserProperties = authProperties.filter(val => val !== '');
    data.publicUserInputs = userInputs.filter(val => val !== '');
    data.publicUserProperties = userProperties.filter(val => val !== '');
    return data;
  };
  const {
    handleSubmit,
  } = useForm();

  const onSubmit = async data => {
    data = setUpData(data);
    try {
      setSpinnerShow(true);
       await getterSetterMutation(
        client,
        mutations.mAddUserAuth,
        data,
      );
      setSpinnerShow(false);
    } catch ({ message }) {
      setSpinnerShow(false);
      setError(message);
    }
  };

  return (
    <formStyles.Wrapper>
      <formStyles.HtmlForm>
        <formStyles.InputContainer>
          <formStyles.Input>
            <formStyles.Label>
              Step one:
              <br />
              Select user-auth inputs.
            </formStyles.Label>
            <selects.AuthInputSelect inputs={{ authInputs, setAuthInputs }} />
          </formStyles.Input>
          <formStyles.Input>
            <formStyles.Label>
              Step two:
              <br />
              Select public user inputs.
            </formStyles.Label>
            <selects.UserInputSelect inputs={{ userInputs, setUserInputs }} />
          </formStyles.Input>
          <formStyles.Input>
            <formStyles.Label>
              Step three:
              <br />
              Select public user optional properties.
            </formStyles.Label>
            <selects.UserPropsSelect
              inputs={{ userProperties, setUserProperties }}
            />
          </formStyles.Input>
          <Spinner
            error={error}
            setError={setError}
            show={spinnerShow}
            VisualComponent={SubmitLoader}
          >
            <UserAuthFormBtnContainer>
              <formStyles.CreateButton
                type="button"
                onClick={handleSubmit(onSubmit)}
              >
                Create
              </formStyles.CreateButton>
            </UserAuthFormBtnContainer>
          </Spinner>
        </formStyles.InputContainer>
      </formStyles.HtmlForm>
    </formStyles.Wrapper>
  );
}
const UserAuthFormBtnContainer = styled.div`
  margin: auto;
`;
