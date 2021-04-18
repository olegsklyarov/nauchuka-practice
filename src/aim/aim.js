export default function getScore({ x, y }) {
  const coordinates = { X: x, Y: y };
  let score;
  // switch (true) {
  //   case Math.sqrt(coordinates.X ** 2 + coordinates.Y ** 2) >= 10:
  //     score = 0;
  //     break;
  //   case Math.sqrt(coordinates.X ** 2 + coordinates.Y ** 2) >= 9:
  //     score = 1;
  //     break;
  //   case Math.sqrt(coordinates.X ** 2 + coordinates.Y ** 2) >= 8:
  //     score = 2;
  //     break;
  //   case Math.sqrt(coordinates.X ** 2 + coordinates.Y ** 2) >= 7:
  //     score = 3;
  //     break;
  //   case Math.sqrt(coordinates.X ** 2 + coordinates.Y ** 2) >= 6:
  //     score = 4;
  //     break;
  //   case Math.sqrt(coordinates.X ** 2 + coordinates.Y ** 2) >= 5:
  //     score = 5;
  //     break;
  //   case Math.sqrt(coordinates.X ** 2 + coordinates.Y ** 2) >= 4:
  //     score = 6;
  //     break;
  //   case Math.sqrt(coordinates.X ** 2 + coordinates.Y ** 2) >= 3:
  //     score = 7;
  //     break;
  //   case Math.sqrt(coordinates.X ** 2 + coordinates.Y ** 2) >= 2:
  //     score = 8;
  //     break;
  //   case Math.sqrt(coordinates.X ** 2 + coordinates.Y ** 2) >= 1:
  //     score = 9;
  //     break;
  //   case Math.sqrt(coordinates.X ** 2 + coordinates.Y ** 2) >= 0:
  //     score = 10;
  //     break;
  //   default:
  //     score = 0;
  // }
  return score;
}

// console.log(getScore({ x: 3.4, y: 5.7 }));
