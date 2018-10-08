// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  let blocks;
  someValue <= 42 ? blocks = (42-someValue) : blocks = (someValue-42);
  return blocks;
}

function distanceFromHqInFeet (someValue) {
  blocks = distanceFromHqInBlocks(someValue);
  feet = blocks*264;
  return feet;
}

function distanceTravelledInFeet(start, end) {
  let blocks;
  start > end ? blocks = start - end : blocks = end - start;
  let feet = blocks * 264
  return feet
}

function calculatesFarePrice(start, end) {
  let feet = distanceTravelledInFeet(start, end);
  if (feet > 2500) {
    return 'cannot travel that far';
  } else if (feet > 2000) {
    return 25;
  } else if (feet > 400 && feet <= 2000) {
    return (feet - 400) * 0.02;
  } else {
    return 0;
  }
}
