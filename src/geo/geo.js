/**
 * Convert a coordinate in radians
 *
 * @param {number|string} coordinate
 * @returns {number}
 */
function toRadians (coordinate) {
  return coordinate * Math.PI / 180
}

/**
 * Compute distance between 2 nodes
 * It uses the great-circle distance formula
 *
 * @param {Object} node - nodeA
 * @param {Object} node - nodeb
 * @param {number|string} node.latitude - The node's latitude
 * @param {number|string} node.longitude - The node's longitude
 * @returns {number} distance in m
 */
function distance (nodeA, nodeB) {
  const EARTHRADIUS = 6371e3
  const φ1 = toRadians(nodeA.latitude)
  const φ2 = toRadians(nodeB.latitude)
  const λ1 = toRadians(nodeA.longitude)
  const λ2 = toRadians(nodeB.longitude)
  const Δλ = Math.abs(λ2 - λ1)

  return Math.round(EARTHRADIUS * Math.acos(
    Math.sin(φ1) * Math.sin(φ2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ)))
}

/**
 * Compute distance between 1 nodes and Dublin office
 *
 * @param {Object} node
 * @param {number|string} node.latitude - The node's latitude
 * @param {number|string} node.longitude - The node's longitude
 * @returns {number} distance in m
 */
function distanceFromDublinOffice (node) {
  const DUBLINOFFICE = {
    latitude: '53.3393',
    longitude: '-6.2576841'
  }

  return distance(DUBLINOFFICE, node)
}

export { distance, distanceFromDublinOffice }
