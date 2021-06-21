import * as React from 'react';
import styled from 'styled-components/macro';
// import { useTranslation } from 'react-i18next';
import { PlusIcon } from './PlusIcon';
// import { messages } from './messages';

export function ItemInput({ items, setItems }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();
  const [textValue, setTextValue] = React.useState('');
  const handleTextChange = (e: { target: { value: string } }) => {
    setTextValue(e.target.value);
  };
  const handleKeyup = (event: { key: any }) => {
    const key = event.key;
    if (key === 'Enter' || key === ',') {
      addTag();
    }
  };
  const handleKeyDown = (event: { key: any }) => {
    const key = event.key;
    if (key === 'Backspace' && !textValue) {
      editPrevTag();
    }
  };
  const addTag = () => {
    let tag = textValue.trim();
    tag = tag.replace(/,/g, '');
    if (!tag) {
      return;
    }
    const taglist = items.items;
    const newTaglist = taglist.concat([tag]);
    setItems({ items: newTaglist });
    setTextValue('');
  };
  const editPrevTag = () => {
    const taglist = items.items;
    const tag = taglist.pop();
    setItems({ items: taglist });
    if (tag) setTextValue(tag);
  };
  const removeTag = e => {
    const tag = e.target.innerText;
    const taglist = items.items;
    const newTaglist = taglist.filter(oldTag => oldTag !== tag);
    setItems({ items: newTaglist });
  };

  return (
    <Div>
      {/* {t('')} */}
      {/*  {t(...messages.someThing())}  */}
      <ul>
        {items.items.map((tag, i) => {
          if (tag === '') return null;
          return (
            <li
              key={`${tag}, ${i}` + Math.random() * 12}
              onClick={e => {
                removeTag(e);
              }}
            >
              {tag}
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        placeholder="amount: Int, currency: String.."
        value={textValue}
        onChange={handleTextChange}
        onKeyUp={handleKeyup}
        onKeyDown={handleKeyDown}
      />
      <span onClick={addTag}>
        <PlusIcon />
      </span>
    </Div>
  );
}

const Div = styled.div`
  ul {
    margin-left: -35px;
    margin-top: -5px;
    li {
      list-style-type: none;
      display: inline;
      position: relative;
      margin: 4px;
      top: 10px;
      padding: 3px;
      border-radius: 6px;
      white-space: nowrap;
      cursor: pointer;
      &:hover::before {
        content: ' [x] ';
        font-weight: bold;
      }
      margin: 4px;
      &:after {
        content: ',';
      }
    }
  }
`;
