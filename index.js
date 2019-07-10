function calc(method, number, precision) {
  let isString = false
  if (
    (typeof number !== 'string' && typeof number !== 'number') ||
    (typeof precision !== 'string' && typeof precision !== 'number')
  )
    throw new TypeError('Expected value type is not a Number or String')

  if (
    (typeof number === 'string' && /[a-zA-Z]+/.test(number)) ||
    (typeof precision === 'string' && /[a-zA-Z]+/.test(precision))
  )
    throw new TypeError('Expected value contains None-Numbers')

  if (typeof number === 'string') {
    isString = true
    number = parseFloat(number)
  }

  if (typeof precision === 'string') precision = parseFloat(precision)

  if (!Number.isInteger(precision))
    throw new TypeError('Expected precision to be an integer')

  const isRoundingAndNegative = method === 'round' && number < 0

  if (isRoundingAndNegative) number = Math.abs(number)

  let exponent
  ;[number, exponent] = `${number}e`.split('e')
  let result = Math[method](`${number}e${Number(exponent) + precision}`)

  ;[number, exponent] = `${result}e`.split('e')
  result = Number(`${number}e${Number(exponent) - precision}`)

  if (isRoundingAndNegative) result = -result

  return isString ? `${result}` : result
}
const up = (number, precision) => calc('round', number, precision)
const ceil = (number, precision) => calc('ceil', number, precision)
const floor = (number, precision) => calc('floor', number, precision)
export const rounding = {
  up,
  ceil,
  floor
}
console.log(rounding.up(2.0413983, 6))
