// Code your solution in this file!
function distanceFromHqInBlocks(street){
  return Math.abs(42 - street)
};

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
};

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * 264
};

function calculatesFarePrice(start, destination){
  distance = distanceTravelledInFeet(start, destination)
  if (distance < 400) {
    price = 0
  }

  else if(400 < distance && distance < 2000){
    price = (distance - 400) * .02
  }

  else if(2500 > distance && distance > 2000){
    price = 25
  }

  else if(distance > 2500){
    return 'cannot travel that far'
  }

  return price
};
