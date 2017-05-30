function getTriangleArea(a, h) {
  var result;
  if(a <= 0 || h <= 0) {
    result = 'Wrong data!';
  } else {
    return a * h / 2;
  }
}

var triangle1Area = getTriangleArea(5, 2);
var triangle2Area = getTriangleArea(6, 4);
var triangle3Area = getTriangleArea(18, 10);

console.log(getTriangleArea(10,6));

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);