import {distance, distanceFromDublinOffice} from '../../src/geo/geo'
const assert = require('chai').assert

describe('Geo', () => {
  it('should give the distance between 2 points', () => {
    const howth = {
      latitude: '53.361562',
      longitude: '-6.052621'
    }
    const bray = {
      latitude: '53.203277',
      longitude: '-6.097401'
    }
    const giantCauseway = {
      latitude: '55.2406415',
      longitude: '-6.5109554'
    }

    assert.equal(distance(howth, bray), 17850)
    assert.equal(distance(howth, giantCauseway), 211049)
    assert.equal(distance(bray, giantCauseway), 228133)
  })

  it('should give the distance between one point and Dublin\'s office', () => {
    const dublinOffice = {
      latitude: '53.3393',
      longitude: '-6.2576841'
    }
    const galwayBayBrewery = {
      latitude: '53.288816',
      longitude: '-9.005679'
    }
    const oHaraBrewery = {
      latitude: '52.697141',
      longitude: '-6.976211'
    }

    assert.equal(distanceFromDublinOffice(dublinOffice), 0)
    assert.equal(distanceFromDublinOffice(galwayBayBrewery), 182627)
    assert.equal(distanceFromDublinOffice(oHaraBrewery), 86073)
  })

  it('should works with value equal to zero', () => {
    const middleEarth = {
      latitude: 0,
      longitude: 0
    }

    assert.isNumber(distanceFromDublinOffice(middleEarth))
  })

  it('should be NaN with wrong/undefined data', () => {
    const erroredPosition = {
      latitude: 'banana',
      longitude: 0
    }

    const multiStringPosition = {
      latitude: 'banana',
      longitude: 'kiwi'
    }

    const emptyObject = {}

    const undefinedPosition = {
      latitude: undefined,
      longitude: undefined
    }

    assert.isNaN(distanceFromDublinOffice(erroredPosition))
    assert.isNaN(distanceFromDublinOffice(multiStringPosition))
    assert.isNaN(distanceFromDublinOffice(emptyObject))
    assert.isNaN(distanceFromDublinOffice(undefinedPosition))
  })
})
