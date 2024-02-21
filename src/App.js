import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { decrement, increment } from './redux/counterslice';

function App(){

  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch() 


  return(
    <div className='App'>
      <div className='counter'>
        <button id='decrease'
        onClick={()=>dispatch(decrement())}
        > -</button>
        <div className='count'>{counter}</div>
        <button id='increase'
        onClick={()=>dispatch(increment())}
        >+</button>
      </div>
    </div>
  )
}

export default App;