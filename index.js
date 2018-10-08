// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  if (someValue > 42) {
    return someValue - 42;
  } else {
    return 42 - someValue;
  }
}

function distanceFromHqInFeet (someValue) {
  return (distanceFromHqInBlocks(someValue)) * 264;
}

function distanceTravelledInFeet (startingBlock, endingBlock) {
  let result;
  if (endingBlock > startingBlock) {
    result = endingBlock - startingBlock;
  } else {
    result = startingBlock - endingBlock;
  }
  return (result * 264)
}

function calculatesFarePrice (startingBlock, endingBlock) {
  let distance = distanceTravelledInFeet(startingBlock, endingBlock);

  if (distance > 2500) {
    return "cannot travel that far";
  } else if (distance > 2000) {
    return 25;
  } else if (distance > 400) {
    return .02 * (distance - 400);
  } else {
    return 0;
  }
}
