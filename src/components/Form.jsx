// import React from "react";

// const Form = () => {
//   return (
//     <>
//       <form className='my-3'>
//         <input
//           type='text'
//           placeholder='Enter title here'
//           className='form-control my-2 rounded-0'
//         />
//         <textarea className='form-control rounded-0 my-2' ></textarea>
//         <button className='btn btn-success w-100 rounded-0'>Save</button>
//       </form>
//     </>
//   );
// };

// export default Form;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, update } from "../features/todos/todoSlice";

const Form = () => {
  const { edit } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit.isEdit) {
      const updatedTodo = {
        id: edit.todo.id,
        text: text,
      };
      dispatch(update(updatedTodo));
    } else {
      const addTodo = {
        id: crypto.randomUUID(),
        text: text,
      };
      dispatch(add(addTodo));
    }

    setText("");
  };

  useEffect(() => {
    setText(edit.todo.text);
  }, [edit]);

  return (
    <form
      className='my-2'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        className='form-control rounded-0 my-2'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className='btn btn-success w-100 rounded-0 '>Save </button>
    </form>
  );
};

export default Form;
