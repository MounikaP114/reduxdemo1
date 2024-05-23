import logo from './logo.svg';
import './App.css';
import store from './redux/store';
import { increment,decrement,reset } from './redux/counterSlice';
import {useDispatch, useSelector} from 'react-redux'

function App() {
  const count= useSelector((state)=>state.counter);
  const dispatch= useDispatch();
  return (
    <div>
      <center>
        <h1> count:  {count}</h1>
        <button onClick={()=> dispatch(increment())}>Increment</button><br/>
        <button onClick={()=> dispatch(decrement())}>Decrement</button><br/>
      
      </center>
    </div>
  );
}

export default App;
