import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
    edit: {
      todo: {},
      isEdit: false,
    },
  },
  reducers: {
    //To add Data

    add: (state, action) => {
      return {
        ...state,
        allTodos: [action.payload, ...state.allTodos],
      };
    },

    //To remove Data

    remove: (state, action) => {
      return {
        ...state,
        allTodos: state.allTodos.filter((todo) => todo.id !== action.payload),
      };
    },

    //To edit Data
    edit: (state, action) => {
      return {
        ...state,
        edit: { todo: action.payload, isEdit: true },
        // allTodos: state.allTodos.map((todo) =>
        //   todo.id === action.payload.id
        //     ? { ...todo, text: action.payload.text }
        //     : todo
        // ),
      };
    },

    //TO update Data
    update: (state, action) => {
      return {
        ...state,
        allTodos: state.allTodos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
        edit: { todo: {}, isEdit: false },
      };
    },
  },
});

export const { add, remove, edit, update } = todoSlice.actions;

export default todoSlice.reducer;
