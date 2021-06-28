export const handleSelectChange = (
  e: {
    target: { selectedOptions: Iterable<unknown> | ArrayLike<unknown> };
  },
  setter: (arg0: any) => void,
  array: string[],
) => {
  const option = Array.from(e.target.selectedOptions)[0];
  if (!(option instanceof HTMLOptionElement)) return;
  const optionValue = option.value;
  if (array.includes(optionValue)) {
    const newCategoryList = array.filter(
      (prop: string) => prop !== optionValue,
    );
    setter(newCategoryList);
  } else setter(array.concat([optionValue]));
};
export const possibleInputs = {
  auth: [
    { inputName: 'username', inputType: 'string', validations: true },
    { inputName: 'password', inputType: 'string', validations: true },
    { inputName: 'email', inputType: 'string', validations: true },
    { inputName: 'birthdate', inputType: 'Date', validations: true },
  ],
  user: [
    { inputName: 'firstName', inputType: 'string', validations: true },
    { inputName: 'lastName', inputType: 'string', validations: true },
    { inputName: 'nickName', inputType: 'string', validations: true },
    { inputName: 'phone', inputType: 'string', validations: false },
    {
      inputName: 'avatar',
      inputType: '{id: string, title: string, link: string, delete:string}',
      validations: false,
    },
    { inputName: 'email', inputType: 'string', validations: true },
    { inputName: 'language', inputType: 'string', validations: false },
    { inputName: 'gender', inputType: 'string', validations: true },
    { inputName: 'birthdate', inputType: 'Date', validations: true },
    { inputName: 'address', inputType: 'string', validations: false },
  ],
};
export const possibleProperties = {
  auth: [],
  user: [
    { inputName: 'isActive', inputType: 'boolean', validations: false },
    { inputName: 'lastConnected', inputType: 'Date', validations: false },
  ],
};
export const necessaryProperties = {
  auth: [
    { inputName: 'access_token', inputType: 'string', validations: false },
  ],
};
