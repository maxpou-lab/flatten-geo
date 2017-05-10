import {distanceFromDublinOffice} from './geo'
import {formatCustomer} from './customersFormatter'
import customerList from './customerList.json'

const contactList = customerList
  .map(c => formatCustomer(c))
  .filter(c => distanceFromDublinOffice(c.coordinates) < 100000)
  .sort((a, b) => a.user_id - b.user_id)

console.log(contactList)
