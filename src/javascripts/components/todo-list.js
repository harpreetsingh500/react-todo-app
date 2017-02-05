import React from 'react';

import TodoItem from './todo-item';

export default (props) => {
  const newList = props.list.map((item, idx) => {
    return (
      <TodoItem
        uniqueID={idx}
        name={item}
        onDelete={props.onDelete}
      />
    );
  });

  return (
    <ul className='list-unstyled'>
      {newList}
    </ul>
  );
};
