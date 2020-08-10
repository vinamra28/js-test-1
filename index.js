const add = {};
add.add = (x) => {
  var i = 0;
  return () => x * i++;
};
module.exports = add;

// class Math {
//   Math () {
//     this.i=0;
//   }
//   multiply(x) {
//     return x*(this.i)++;
//   }
// }

// module.exports = Math;
