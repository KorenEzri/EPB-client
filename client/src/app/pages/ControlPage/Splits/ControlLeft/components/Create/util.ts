export const checkTypes = (types: string[]) => {
  return types
    .map((type: string) => {
      if (type.split('|').length > 1) {
        if (!(type.split(':').length > 1)) return `returnType: ${type}`;
        return type;
      }
    })
    .filter(v => v != null);
};
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
export const setUpTypeData = (data, properties, uniqueIdentifiers) => {
  const invalidOrTypes = checkTypes(properties.items);
  if (invalidOrTypes.length) {
    const res = window.prompt(
      `It seems you have chosen to use the "||" or "|" operator in your type definitions.\n\nWhile auto-generation of Typescript interfaces and DB schemas supports these operators, auto-generation of GraphQL scalar types is not supported yet. If you proceed, you'll have to create them yourself.\nAre you sure you want to proceed?\n\nTypes affected:\n${invalidOrTypes}\n\nType "OK" to confirm.`,
    );
    if (res !== 'OK') return;
  }

  data.properties = properties.items;
  data.uniqueIdentifiers = uniqueIdentifiers;
  if (!data.type) data.type = 'null';
  return data;
};

export const setUpSchemaData = (data, properties, uniqueIdentifiers) => {
  const invalidOrTypes = checkTypes([data.returnType])?.concat(
    checkTypes(properties.items),
  );
  if (invalidOrTypes.length) {
    const res = window.prompt(
      `It seems you have chosen to use the "||" or "|" operator in your type definitions.\n\nWhile auto-generation of Typescript interfaces and DB schemas supports these operators, auto-generation of GraphQL scalar types is not supported yet. If you proceed, you'll have to create them yourself.\nAre you sure you want to proceed?\n\nTypes affected:\n${invalidOrTypes}\n\nType "OK" to confirm.`,
    );
    if (res !== 'OK') return;
  }
  data.uniqueIdentifiers = uniqueIdentifiers;
  data.properties = properties.items;
  data.type = 'none';
  data.dbSchema = true;
  data.typeDef = false;
};
