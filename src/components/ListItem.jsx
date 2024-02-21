// import React from "react";
import { useDispatch } from "react-redux";
import { edit, remove } from "../features/todos/todoSlice";

const ListItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDlt = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(remove(id));
    }
  };

  const handleEdit = (todo) => {
    dispatch(edit(todo));
  };

  return (
    <li className='list-group-item rounded-0 w-100 '>
      {todo.text}

      <button
        className='btn btn-danger btn-sm rounded-0 float-end'
        onClick={() => handleDlt(todo.id)}
      >
        Delete
      </button>
      <button
        className='btn btn-warning btn-sm rounded-0 float-end mx-2'
        onClick={() => handleEdit(todo)}
      >
        Edit
      </button>
    </li>
  );
};

export default ListItem;
