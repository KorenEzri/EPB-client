import * as React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as selects from './components';
import { getterSetterQuery, queries } from 'app/network';
import { getterSetterMutation, mutations } from 'app/network';
import { Spinner, SubmitLoader } from 'app/components';
import * as utils from './util';
import { useApolloClient } from '@apollo/client';
import * as formStyles from 'app/components/formStyles';

interface Props {}

export function UserAuthForm(props: Props) {
  const client = useApolloClient();
  const [spinnerShow, setSpinnerShow] = React.useState(false);
  const [error, setError] = React.useState('');
  const [authInputs, setAuthInputs] = React.useState(['']);
  const [userInputs, setUserInputs] = React.useState(['']);
  const [userProperties, setUserProperties] = React.useState(['']);
  const [authProperties, setAuthProperties] = React.useState(['']);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async data => {};

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
          {/* <Spinner> */}
          <UserAuthFormBtnContainer>
            <formStyles.CreateButton
              type="button"
              onClick={handleSubmit(onSubmit)}
            >
              Create
            </formStyles.CreateButton>
          </UserAuthFormBtnContainer>
          {/* </Spinner> */}
        </formStyles.InputContainer>
      </formStyles.HtmlForm>
    </formStyles.Wrapper>
  );
}
const UserAuthFormBtnContainer = styled.div`
  margin: auto;
`;
