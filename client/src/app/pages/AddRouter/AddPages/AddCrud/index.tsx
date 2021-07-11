import * as React from 'react';
import styled from 'styled-components/macro';
import { AddPageSplits } from '../../AddPageSplits/Loadable';
import {AddCrudPaths} from "./components/AddCrudPaths/Loadable"
import {useHistory} from "react-router-dom"
interface Props {}

export function AddCrud(props: Props) {
  const history = useHistory();
  return (
    <Div>
      <HeaderButton onClick={()=>{history.push("/")}}>Back</HeaderButton>
      <AddPageSplits leftTitle="Add CRUD operations" LeftContent={AddCrudPaths}  rightContent={'Right'} />
    </Div>
  );
}

const Div = styled.div``;
const  HeaderButton = styled.button`
letter-spacing: 1px;
box-shadow: 0px 1px 0px 0px #f0f7fa;
background: linear-gradient(to bottom, #298baf 5%, #026c92 100%);
background-color: #16495c;
border: 1px solid #024979;
display: inline-block;
cursor: pointer;
color: #ffffff;
font-family: Arial;
font-size: 14px;
border-radius: 4px;
height: 60px;
text-decoration: none;
text-shadow: 0px -1px 0px #2c2e3a;
outline: none !important;
@media (max-width: 640px) {
  font-size: 10px;
  height: 40px;
  min-width: 60px;
}
&:hover {
  background: linear-gradient(to bottom, #035b7a 5%, #217ea0 100%);
  background-color:#02698f;
}
&:active {
  position: relative;
  top: 1px;
}
box-shadow: inset 0px 0px 15px 3px #23395e;
background: linear-gradient(to bottom, #2e466e 5%, #415989 100%);
background-color: #2e466e;
border-radius: 4px;
border: 1px solid #1f2f47;
display: inline-block;
cursor: pointer;
color: #ffffff;
font-family: Arial;
font-size: 15px;
padding: 6px 13px;
text-decoration: none;
text-shadow: 0px 1px 0px #263666;
&:hover {
  background: linear-gradient(to bottom, #415989 5%, #2e466e 100%);
  background-color: #415989;
}
&:active {
  position: absolute;
  top: 1px;
}
position: absolute;
`;