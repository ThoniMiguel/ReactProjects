import React, { useState } from 'react';
import Panel from './components/Panel';
import {data} from './data';
function App() {
  const [infos, setInfos] = useState(data);
  const [number, setNumber] = useState(0);
  
  const changeNumber = (value) => {
    if((value === -1) && (number === 0)){
      setNumber(3);
      return;
    }
    if((value === 1) && (number === 3)){
      setNumber(0);
      return;
    }
    setNumber(number + value);
  }

  const randomNumber = () =>{
    let random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if(random === number){
      randomNumber();
      return;
    }
    setNumber(random);
  }

  return (
    <>
      <main>
        <section className="container">
          <div className="title">
            <h1>Our reviews</h1>
            <div className="blue-line"></div>
          </div>
          <Panel img={infos[number].img} name={infos[number].name} job={infos[number].job} text={infos[number].text} changeNumber={changeNumber} randomNumber={randomNumber}/>
        </section>
      </main>
    </>
  );
}

export default App;
