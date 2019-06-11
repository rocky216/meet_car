export const GET_LOADING = "GET_LOADING"


export function getSelectKey(params){
  return function (dispatch, getState){
    dispatch({
      type: GET_LOADING,
      selectKey: params
    })
  }
}

