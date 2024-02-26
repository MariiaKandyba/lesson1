// let x = 0;
// function test() {
//   console.log(x);
// }
// // 1
// globalThis.number = x;
// globalThis.func = test;
//// 2
// module.exports.number  = x;
// module.exports.func  = test;

//// 3

// module.exports = {
//     number: x,
//     func: test,
// }

let name = "Mariia";
function test() {
  console.log(name);
}
module.exports = {
  name: name,
  test: test,
};
