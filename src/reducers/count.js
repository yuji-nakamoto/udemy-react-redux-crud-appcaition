import { INCREMENT, DECREMENT } from '../actions'

const initialState = { value: 0 }

export defailt (state = initialState , action) => {
  switch (action.type) {
    cace INCREMENT:
      return { value:state.value + 1 }
    cace DECREMENT:
      return { value:state.value - 1 }
    default:
      return state

  }

}
