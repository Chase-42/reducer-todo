export const initialState = [
  {
    item: 'Wake up',
    id: 123,
    completed: false,
  },
  {
    item: 'Make coffee',
    id: 124,
    completed: false,
  },
  {
    item: 'Code',
    id: 1235,
    completed: false,
  },
  {
    item: 'Repeat',
    id: 1246,
    completed: false,
  },
];

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          item: action.payload.item,
          id: Date.now(),
          completed: false,
        },
      ];
    case TOGGLE_COMPLETED:
      return state.map((todo) => {
        if (todo.id === action.payload.item_id) {
          return { item: todo.item, completed: !todo.completed, id: todo.id };
        }
        return todo;
      });
    case CLEAR_COMPLETED:
      return state.filter((todo) => {
        if (todo.completed === false) {
          return todo;
        }
        return null;
      });
    default:
      return state;
  }
};
