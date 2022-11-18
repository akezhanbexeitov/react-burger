const initialState = {
    bun: {},
    ingredients: []
  };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'add':
        if (action.payload.type === 'bun') {
          return {
            ...state,
            bun: {
              name: action.payload.name,
              image: action.payload.image,
              price: action.payload.price
            }
          }
        } else {
          return {
            ...state,
            ingredients: [
              ...state.ingredients,
              {
                name: action.payload.name,
                image: action.payload.image,
                price: action.payload.price,
                id: action.payload.id,
                key: action.payload.key
              }
            ]
          }
        }
      case 'reset':
        return {
          bun: {},
          ingredients: []
        }
      default:
        return state;
    }
  }

export default rootReducer