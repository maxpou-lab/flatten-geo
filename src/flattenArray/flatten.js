/**
 * Flatten a multidimensional array
 *
 * @export
 * @param {Object[]} data
 * @returns {Object[]}
 */
export function flatten (data) {
  return data.reduce((accumulator, currentItem) => {
    if (Array.isArray(currentItem)) {
      return accumulator.concat(flatten(currentItem))
    }
    return accumulator.concat(currentItem)
  }, [])
}
