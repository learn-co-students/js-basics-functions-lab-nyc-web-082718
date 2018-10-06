let distanceFromHqInBlocks = function(block) {
  return Math.abs(42 - block);
}

let distanceFromHqInFeet = function(block) {
  return distanceFromHqInBlocks(block) * 264;
}

let distanceTravelledInFeet = function(start, end) {
  return Math.abs(end - start) * 264;
}

let calculatesFarePrice = function(start, destination) {
  let dist = distanceTravelledInFeet(start, destination);

  if (dist > 2500) {
    return 'cannot travel that far';
  } else if (dist > 2000) {
    return 25;
  } else if (dist > 400 && dist <= 2000) {
    return (dist - 400) * 0.02;
  } else {
    return 0;
  }
}
