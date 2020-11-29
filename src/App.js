import React, {useState, useEffect} from 'react';
import Header from './Components/Header'


function App() {
  useEffect(
    () => {
      console.log('초기 로딩 시 실행');
    },
    []
  );

  var [num1, num1Set] = useState(0);
  useEffect(
    () => {
      console.log('num1 다시 그려짐');
    },[num1]
  );

  var [num2, num2Set] = useState(0);
  useEffect(
    () => {
      console.log('num2 다시 그려짐');
    },
    [num2],
  );
  return (
    <div className="App">
      <Header />
      <button onClick={()=>{
        num1Set(num1 + 1);
      }}>Click me</button>
      <h2>{num1}</h2>
      <button onClick={()=>{
        num2Set(num2 + 1);
      }}>Click me</button>
      <h2>{num2}</h2>
    </div>
  );
}

export default App;
