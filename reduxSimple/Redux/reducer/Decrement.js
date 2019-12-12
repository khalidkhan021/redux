//Update in counter 9 multiple reducer

// Update in counter 8 import action 
import Action from '../actions/Action'


// update in counter 5 -- keeping reducer function in separate file.
//value is state, but we need to use state property in component 
// that's why i have changed variable name here
function decrementCounter(value = 0, action) {
  switch (action.type) {
    // Update in counter 8 -- using counter static properties in switch case
    // so that it can be controlled from single place  
  case Action.DECREMENT:
    // IMPORTANT: returning simple value therefore it will be avaiable as 
    // simple value and not as object
    return value - 1
  // Update in counter 6 -- more type of actions  
  default:
    return value
  }
}

export default decrementCounter;
