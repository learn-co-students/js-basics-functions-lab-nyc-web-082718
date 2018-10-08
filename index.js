// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  return Math.abs(distance - 42)
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * 264
}

function calculatesFarePrice(start, destination) {
  let total = distanceTravelledInFeet(start, destination)
  if (total <= 400) {
    return 0
  } else if (total < 2000) {
    return (total - 400) * 0.02
  } else if (total > 2500) {
    return "cannot travel that far"
  } else {
    return 25 
  }
}
