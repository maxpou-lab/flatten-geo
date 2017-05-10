import {flatten} from '../../src/flattenArray/flatten'
const assert = require('chai').assert

describe('Flatten', () => {
  it('should flatten an array', () => {
    const actual = [1, [2, [3]], [4, [5], 6], 7]
    const expected = [1, 2, 3, 4, 5, 6, 7]
    assert.deepEqual(flatten(actual), expected)
  })

  it('should not contain any sub-array', () => {
    const actual = [1, [2, 3], [[4, [5]], 6], [[7]]]
    const expected = flatten(actual)

    expected.forEach((element) => {
      assert.isNotArray(element)
    })
  })

  it('should return an empty array with an empty array', () => {
    const actual = []
    const expected = []
    assert.deepEqual(flatten(actual), expected)
  })

  it('should throw a TypeError with everything except array', () => {
    const _undefined = undefined
    const _number = 23
    const _string = 'Hello burger 🍔'
    const _null = null

    assert.throws(() => flatten(_undefined), TypeError)
    assert.throws(() => flatten(_number), TypeError)
    assert.throws(() => flatten(_string), TypeError)
    assert.throws(() => flatten(_null), TypeError)
  })
})
