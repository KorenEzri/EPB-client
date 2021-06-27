import * as React from 'react';
import styled from 'styled-components/macro';
import { AddActionList } from './AddActionList/Loadable';
const actions = [
  {
    name: 'User auth',
    description:
      'An easy-to-use, very simple authentication mechanism.\nUses JWT to produce access and refresh tokens, and bcrypt to hash passwords.\nHashed passwords are stored in the DB and usernames are stored as well, while public user data is stored in a different collection.',
    dependencies: [
      'jsonwebtoken',
      'bcryptjs',
      'joi',
      'cookie-parser',
      '@types for all packages - if building in Typescript.',
    ],
    link: 'add/userauth'
  },
  {
    name: 'Image upload',
    description:
      'asdaasddadsadasdsadasdasdsadasdasdsasaasdsadasdasdadadadasdadadasds',
    dependencies: ['ads', 'asdaadsa', 'sadadasdsad', 'asddadsa'],
    link: 'add/crud'
  },
  {
    name: 'CRUD operations',
    description:
      'Arm your backend with Create, Read, Update and Delete operations with the click of a button!',
    dependencies: ['No extra dependencies!'],
    link: 'add/crud'
  },
  {
    name: 'Message system',
    description:
      'asdaasddadsadasdsadasdasdsadasdasdsasaasdsadasdasdadadadasdadadasds',
    dependencies: ['ads', 'asdaadsa', 'sadadasdsad', 'asddadsa'],
    link: 'add/crud'
  },
  {
    name: 'Emailing system',
    description:
      'asdaasddadsadasdsadasdasdsadasdasdsasaasdsadasdasdadadadasdadadasds',
    dependencies: ['ads', 'asdaadsa', 'sadadasdsad', 'asddadsa'],
    link: 'add/crud'
  },
];
interface Props {}
export function Add(props: Props) {
  return (
    <Div>
      <AddActionList actions={actions} />
    </Div>
  );
}

const Div = styled.div``;
