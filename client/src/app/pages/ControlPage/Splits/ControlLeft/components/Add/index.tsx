import * as React from 'react';
import styled from 'styled-components/macro';
import { AddActionList } from './AddActionList/Loadable';
const actionsMock = [
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
  },
  {
    name: 'Image upload',
    description:
      'asdaasddadsadasdsadasdasdsadasdasdsasaasdsadasdasdadadadasdadadasds',
    dependencies: ['ads', 'asdaadsa', 'sadadasdsad', 'asddadsa'],
  },
  {
    name: 'CRUD operations',
    description:
      'asdaasddadsadasdsadasdasdsadasdasdsasaasdsadasdasdadadadasdadadasds',
    dependencies: ['ads', 'asdaadsa', 'sadadasdsad', 'asddadsa'],
  },
  {
    name: 'Message system',
    description:
      'asdaasddadsadasdsadasdasdsadasdasdsasaasdsadasdasdadadadasdadadasds',
    dependencies: ['ads', 'asdaadsa', 'sadadasdsad', 'asddadsa'],
  },
  {
    name: 'Emailing system',
    description:
      'asdaasddadsadasdsadasdasdsadasdasdsasaasdsadasdasdadadadasdadadasds',
    dependencies: ['ads', 'asdaadsa', 'sadadasdsad', 'asddadsa'],
  },
];
interface Props {}
export function Add(props: Props) {
  return (
    <Div>
      <AddActionList actions={actionsMock} />
    </Div>
  );
}

const Div = styled.div``;
