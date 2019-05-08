import {
  TODO_ADD
} from './actions'

export const initialState = {}

const mutations = {
  [TODO_ADD] (state, { data }) {
    return {
      ...state,
      data
    }
  },
}

export default (state = initialState, { type, ...other }) => {
  return (type in mutations)
    ? mutations[type](state, other)
    : state
}
