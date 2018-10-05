// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  let result
  (42-block>0) ? result = (42-block) : result = (block-42)
  return result
}
function distanceFromHqInFeet(block) {
  return 264 * distanceFromHqInBlocks(block)
}
function distanceTravelledInFeet(block1,block2){
  let result
  (block1 > block2) ? result = (block1 - block2) * 264 : result = (block2-block1)*264
  return result
}

function calculatesFarePrice(block1,block2) {
  switch (true){
    case distanceTravelledInFeet(block1,block2) < 400:
      return 0
    case distanceTravelledInFeet(block1,block2) > 2500:
      return `cannot travel that far`
    case distanceTravelledInFeet(block1,block2) > 2000:
      return 25
    default:
      return 0.02*(distanceTravelledInFeet(block1,block2)-400)
  }
}
