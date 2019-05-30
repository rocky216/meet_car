export function addIndex(arr){
  if(!_.isArray(arr)) return arr
  _.each(arr, (item, index)=>{
    item.key = index+1
  })
  return arr
}