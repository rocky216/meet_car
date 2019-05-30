const initialState = {
  spinning: true
}

export default function (state = initialState, action){
  switch (action.type) {
    case 'GET_LOADING':
      return Object.assign({},state, action)
    default:
        return state
  }
}