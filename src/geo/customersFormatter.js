/**
 * Format a customer object (move latitute/longitude into a sub property)
 *
 * @param {Object} customer
 * @returns {Object} formated customer
 */
export function formatCustomer (customer) {
  return {
    user_id: customer.user_id,
    name: customer.name,
    coordinates: {
      latitude: customer.latitude,
      longitude: customer.longitude
    }
  }
}
