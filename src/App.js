import React, {useState, useEffect} from 'react';
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About';

function App() {
  const [resumeData, resumeDataSet] = useState({
    main : {
      
    }
  });
  useEffect(
    () => {
      console.log('초기 로딩 시 실행');
    },
    []
  );

  return (
    <div className="App">
      <Header data={null}/>
      <Home data={null}/>
      <About data={null}/>
    </div>
  );
}

export default App;
