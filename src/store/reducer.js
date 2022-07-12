export const reducer = (state = { list: [] }, action = {}) => {
  switch (action.type) {
    case 'ADD-TASK': {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    }

    case 'REMOVE-TASK': {
      let arr = state.list.filter((item) => item.id !== action.payload);
      return {
        ...state,
        list: arr,
      };
    }

    default:
      return state;
  }
};
