import {
  TODO_FETCH
} from './actions'

export const initialState = {
  list: []
}

const mutations = {
  [TODO_FETCH] (state, { payload }) {
    return {
      ...state,
      list: payload
    }
  },
}

export default (state = initialState, { type, ...other }) => {
  return (type in mutations)
    ? mutations[type](state, other)
    : state
}
