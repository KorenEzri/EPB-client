import styled from 'styled-components';
export const Div = styled.div``;
export const SelectBox = styled.select`
  outline: none;
  border: none;
  width: 100% !important;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  padding: 6px !important;
`;
export const Option = styled.option`
  padding: 6px;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
  user-select: none;
  border: 1px solid lightblue;
  cursor: pointer;
  text-overflow: ellipsis;
  transition: 250ms;
  &:hover {
    transition: 1ms;
    border: 1px solid whitesmoke;
  }
  &:focus {
    background-color: whitesmoke;
    transition: 250ms;
    color: black;
  }
  &:active {
    background: whitesmoke;
    color: black;
  }
  &:checked {
    background: whitesmoke;
    color: black;
  }
  width: 100%;
`;
export const ClearSelectBtn = styled.button`
  margin-top: 10px;
  box-shadow: inset 0px 1px 3px 0px #91b8b3;
  background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
  background-color: #768d87;
  border-radius: 5px;
  border: 1px solid #566963;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 11px 23px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #2b665e;
  &:hover {
    background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
    background-color: #6c7c7c;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
