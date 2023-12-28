export const pageNumbersGenerator = (totalCount: number, selectedNumber: number) => {
  const arr = Array.from({ length: totalCount }, (value, index) => index + 1)
  const length = arr.length
  const number = selectedNumber + 1

  if (number < 5) {
    return arr.slice(0, 5)
  }

  if (number >= length - 3) {
    return arr.slice(length - 5, length)
  }

  return arr.slice(number - 3, number + 2)
}
