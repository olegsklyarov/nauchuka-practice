export default function getPointCoordinats([X, Y, originX, originY]) {
  return [X - originX,originY - Y];
}

