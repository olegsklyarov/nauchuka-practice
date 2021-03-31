export default function getQuadrant({ x, y }) {
  const coordinats = { x, y };
  let quadrantNum=0;
  if(coordinats.x>0&&coordinats.y>0) {
    quadrantNum=1;
  }
  if(coordinats.x>0&&coordinats.y<0) {
    quadrantNum=4;
  }
  if(coordinats.x<0&&coordinats.y<0) {
    quadrantNum=3;
  }
  if(coordinats.x<0&&coordinats.y>0) {
    quadrantNum=2;
  }
  return quadrantNum;

}

