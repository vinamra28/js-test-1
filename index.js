export function add(x) {
  var i = 0;
  return () => x * i++;
}
