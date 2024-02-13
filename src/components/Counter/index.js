import React, {useState} from 'react'
import './index.css'

const Counter = ({initialCount}) => {
  const [count, setCount] = useState(initialCount || 0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="counter-buttons">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default Counter

// import {Component} from 'react'

// import './index.css'

// class Counter extends Component {
//   render() {
//     return (
//       <div>
//         <button type="button" onClick={this.onDecrement}>
//           -
//         </button>
//         <div>0</div>
//         <button type="button" onClick={this.onIncrement}>
//           +
//         </button>
//       </div>
//     )
//   }
// }

// export default Counter
