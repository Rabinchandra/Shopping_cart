export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.product];
    case 'REMOVE_PRODUCT':
      return state.filter((product) => product.id !== action.id);
    case 'INCREMENT_QUANTITY':
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case 'DECREMENT_QUANTITY':
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    default:
      return state;
  }
};
