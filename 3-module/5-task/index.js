function getMinMax(str) {
  let arr = str.split(' ')
  .filter(item => isFinite(item))
  .sort( (a, b) => a - b );

  return {
    min: +arr[0],
    max: +arr.at(-1)
  }
}
