import './App.css'
import Counter from './counter';
import Team from './team';
import Users from './users';
import Friends from './friends';

// 1
function App() {
    function handleClick(){
      alert('button clicked');
    }
// 2
    const handleClick2 = () =>{
      alert('btn 2 clicked')
    }

    const addToFive = (num) =>{
      alert(num + 5);
    }

  return (
    <>
      <h3>React core concepts 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      {/* <button onclick="handleClick()">Click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>click 2</button>
      <button onClick={() =>{alert('third clicked')}}>third</button>
      <button onClick={function handleClick4() {alert('4hird clicked')}}>4hird</button> 
      {/* {bejailla} */}
      <button onClick={() => addToFive(3)}>five</button>
    </>
  )
}

export default App
