export const GET_LOADING = "GET_LOADING"

export function getappAction(params){
  return function(dispatch, getState){
    dispatch({
      type: GET_LOADING,
      appdata:[1,2]
    })
  } 
}