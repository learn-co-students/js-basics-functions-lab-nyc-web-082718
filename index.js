// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
  return 264 * distanceFromHqInBlocks(street);
}

function distanceTravelledInFeet(start, destination) {
  return 264 * Math.abs(start - destination);
}

function calculatesFarePrice(start, destination) {
  const dist = distanceTravelledInFeet(start, destination);
  let fare;
  if (dist < 400) {
    fare = 0;
  } else if (dist < 2000) {
    fare = 0.02 * (dist - 400);
  } else if (dist < 2500) {
    fare = 25;
  } else {
    fare = 'cannot travel that far';
  }
  return fare;
}
