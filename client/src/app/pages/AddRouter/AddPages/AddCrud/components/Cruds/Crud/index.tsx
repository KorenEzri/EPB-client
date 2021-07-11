import * as React from 'react';
import * as styles from './Styles';
import styled from 'styled-components';
import * as formStyles from 'app/components/formStyles';
import { CheckBox } from 'app/components';
import { Spinner, SubmitLoader } from 'app/components';
import { getterSetterMutation, mutations } from 'app/network';
import { getterSetterQuery, queries } from 'app/network';
import { useApolloClient } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { SchemaSelect } from '../../../Pages/FromExisting/SchemaSelect/Loadable';
interface Props {
  actions;
}
const replaceAllInString = (
  str: string,
  find: string | string[],
  replace: string | string[],
) => {
  if (Array.isArray(find) && Array.isArray(replace)) {
    find.forEach((toFind, index) => {
      const escapedFind = toFind.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
      str = str.replace(new RegExp(escapedFind, 'g'), replace[index]);
    });
    return str;
  } else if (typeof replace === 'string' && typeof find === 'string') {
    const escapedFind = find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
    return str.replace(new RegExp(escapedFind, 'g'), replace);
  } else return 'err';
};

export function Crud(props: Props) {
  const client = useApolloClient();
  const submitCreationRequest = async (identifierNameType: any) => {
    let crudOptions: any = {};
    let crudActions: any[] = [];
    for (const action in options) {
      if (Object.prototype.hasOwnProperty.call(options, action)) {
        const element = options[action];
        if (element) crudActions.push(action);
      }
    }
    crudOptions.crudActions = crudActions;
    crudOptions.schemaName = select;
    crudOptions.identifier = identifierNameType;
    try {
      setSpinnerShow(true);
      const res = await getterSetterMutation(
        client,
        mutations.mAddCrudOperations,
        crudOptions,
      );
      let timeout: any = 700;
      await getterSetterMutation(client, mutations.mRestartServer, timeout);
      setSpinnerShow(false);
      if (res) {
        setError(res);
      } else setError('No response received from server.');
    } catch ({ message }) {
      setSpinnerShow(false);
      setError(message);
    }
  };
  const { actions } = props;
  const [hide, setHide] = React.useState(false);
  const [select, setSelect] = React.useState('');
  const [spinnerShow, setSpinnerShow] = React.useState(false);
  const [schemaProperties, setSchemaProperties] = React.useState(['']);
  const [error, setError] = React.useState('');
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
  const handleSelect = async (value: string) => {
    await getterSetterQuery(
      client,
      queries.qgetAllSchemaProps,
      setSchemaProperties,
      undefined,
      { schemaName: value },
    );
    setSelect(value)
  };
  const setSelectedOption = (optionValue: string) => {
    console.log(optionValue)
    if (optionValue.split('{').length > 1) {
      const identifierType = replaceAllInString(
        optionValue,
        ['{', '}', ','],
        ['', '', ''],
      )
        .split(' ')[3]
        .trim()
        .toLowerCase();
      const splatOptionValue = optionValue.split(': ');
      const identifierName = splatOptionValue[0];
      return { name: identifierName, type: identifierType };
    } else {
      const splatOptionValue = optionValue.split(': ');
      const identifierName = splatOptionValue[0];
      const identifierType = splatOptionValue[1];
      return { name: identifierName, type: identifierType };
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();
  const onSubmit = async data => {
    const { identifier } = data;
    if (!identifier) {
      data.identifier = setSelectedOption(schemaProperties[0]);
    } else {

      data.identifier = (setSelectedOption(identifier))
    }
    await submitCreationRequest(data.identifier);
  };
  return (
    <styles.Wrapper hide={hide}>
      <styles.ActionDiv hide={false}>Select a schema</styles.ActionDiv>
      <formStyles.Input>
        <formStyles.InputContainer>
          <SchemaSelect inputs={{ handleSelect, register, watch,  }} />
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
        <IDPropertyDiv>
          <styles.ActionDiv hide={hide}>
            Choose an identifying property
          </styles.ActionDiv>
          <formStyles.InputContainer>
            <formStyles.Input>
              <select
                {...register('identifier')}
              >
                {schemaProperties.map((property, index) => {
                  return (
                    <option
                      selected={index === 0 ? true : false}
                      value={property}
                      key={`${index}${property}SchemaProp`}
                    >
                      {property}
                    </option>
                  );
                })}
              </select>
            </formStyles.Input>
          </formStyles.InputContainer>
          <Spinner
            error={error}
            setError={setError}
            show={spinnerShow}
            VisualComponent={SubmitLoader}
          >
            <SubmitButton onClick={handleSubmit(onSubmit)}>Create</SubmitButton>
          </Spinner>
        </IDPropertyDiv>
      </styles.ActionWrapperHidden>
    </styles.Wrapper>
  );
}
const TextContainer = styled.div`
  background-color: #263e52;
  padding-bottom: 10px;
  option {
    cursor: pointer;
  }
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
  background: #263e52;
  height: 250px;
  select {
    width: 100%;
  }
`;
