import {formatCustomer} from '../../src/geo/customersFormatter'
const assert = require('chai').assert

describe('Customers Formatter', () => {
  it('should format a customer object', () => {
    const actual = {
      latitude: '47.205581',
      user_id: 42,
      name: 'Maxence Poutord',
      longitude: '-1.564041'
    }

    const expected = {
      user_id: 42,
      name: 'Maxence Poutord',
      coordinates: {
        latitude: '47.205581',
        longitude: '-1.564041'
      }
    }

    assert.deepEqual(formatCustomer(actual), expected)
  })

  it('should be set to undefined when a property is missing', () => {
    const actual = {
      latitude: '47.205581',
      name: 'Maxence Poutord',
      longitude: '-1.564041'
    }

    const formatedCustomer = formatCustomer(actual)

    assert.isUndefined(formatedCustomer.user_id)
  })

  it('should be set to undefined when multiple properties are missing', () => {
    const actual = {
      longitude: '-1.564041'
    }

    const formatedCustomer = formatCustomer(actual)

    assert.isUndefined(formatedCustomer.user_id)
    assert.isUndefined(formatedCustomer.name)
    assert.isUndefined(formatedCustomer.coordinates.latitude)
    assert.isDefined(formatedCustomer.coordinates.longitude)
  })

  it('should only contain an empty backbone when data are wrong', () => {
    const actual = 'TypeError: Cannot read property \'reduce\' of undefined'

    const formatedCustomer = formatCustomer(actual)

    assert.property(formatedCustomer, 'user_id')
    assert.property(formatedCustomer, 'name')
    assert.property(formatedCustomer, 'coordinates')
    assert.property(formatedCustomer.coordinates, 'latitude')
    assert.property(formatedCustomer.coordinates, 'longitude')

    assert.isUndefined(formatedCustomer.user_id)
    assert.isUndefined(formatedCustomer.name)
    assert.isUndefined(formatedCustomer.coordinates.latitude)
    assert.isUndefined(formatedCustomer.coordinates.longitude)
  })
})
