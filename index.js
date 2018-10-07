// Code your solution in this file!

const hq = 42
let distance

function distanceFromHqInBlocks(pickup){
  distance = Math.abs(pickup - hq);
  return distance;
}

function distanceFromHqInFeet(pickup){
  distance = Math.abs((pickup - hq)*264)
  return distance
}

function distanceTravelledInFeet(pickup, dropoff){
  distance =Math.abs((pickup - dropoff)*264)
  return distance
}

function calculatesFarePrice(start, destination){
  let fare
  distanceTravelledInFeet(start, destination)
  if (distance > 2500) {
    fare = "cannot travel that far"
  } else if (distance>2000){
    fare = 25
  } else if (distance>401){
    fare = ((distance - 400) * .02)
  } else {
    fare = 0
  }
  return fare
}

//   describe('calculatesFarePrice(start, destination)', function() {
//     it('gives customers a free sample', function() {
//       expect(calculatesFarePrice(43, 44)).to.equal(0);
//     });
//
//     it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
//       // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
//       expect(calculatesFarePrice(34, 32)).to.equal(2.56);
//     });
//
//     it('charges 25 dollars for a distance over 2000 feet', function() {
//       expect(calculatesFarePrice(50, 58)).to.equal(25);
//     });
//
