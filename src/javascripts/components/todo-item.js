import React from 'react';

export default (props) => {
  const handleDelete = () => {
    props.onDelete(props.uniqueID);
  };

  return (
    <li>
      <p className='todo-name'>{props.name} </p>
      <button className='btn btn-danger btn-sm' onClick={handleDelete}>Delete</button>
    </li>
  );
};
