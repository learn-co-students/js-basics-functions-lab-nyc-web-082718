// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  if (street > 42) {
    return street - 42;
  } else {
    return 42 - street;
  }
}


function distanceFromHqInFeet(blockNumber){
    return distanceFromHqInBlocks(blockNumber) * 264;
  }


function distanceTravelledInFeet(startBlock, endBlock){
  if (endBlock > startBlock) {
    return ((endBlock - startBlock) * 264);
  } else {
    return ((startBlock - endBlock) * 264)
  }
}

function calculatesFarePrice(startBlock, endBlock){
  const distance = distanceTravelledInFeet(startBlock, endBlock);

  if (distance <= 400) {
    return 0;
  } else if
    (400 < distance && distance <= 2000) {
      return ((distance - 400) * .02);
  } else if
    (2000 < distance && distance < 2500) {
      return 25;
  } else {
    return 'cannot travel that far';
  }
}
