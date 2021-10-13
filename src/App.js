import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { getData } from "./redux/norris/norris"

function App() {
  const dispatch = useDispatch()

  const jokes = useSelector(state => state.norris.jokes)

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  console.log(jokes);
  return (
    <div className="App">
      <img src={jokes.icon_url} alt="jokes" />
      <p>{jokes.value}</p>
    </div>
  );
}

export default App;
