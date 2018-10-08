function distanceFromHqInBlocks(streetNo) {
  return Math.abs(42 - streetNo);
}

function distanceFromHqInFeet(streetNo) {
  return distanceFromHqInBlocks(streetNo) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  blocks = Math.abs(startingBlock - endingBlock);
  return 264 * blocks;
}

function calculatesFarePrice(start, destination) {
  dist = distanceTravelledInFeet(start, destination);
  if (dist < 400) {
    return 0;
  } else if (dist <= 2000) {
    return 0.02 * (dist - 400);
  } else if (dist > 2000 && dist <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
