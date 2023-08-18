import React, { useContext } from 'react'
import { SendName} from '../App'
function Child() {
const value = useContext(SendName)
console.log(value);

  return (
    <div>Child</div>
  )
}

export default Child