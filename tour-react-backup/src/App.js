import React, {useState} from 'react';
import Panel from './Panel';
import Container from './Container';
import { data } from './data';
function App() {

  const [infos, setInfos] = useState(data);
  const deletePanel = (id) =>{
    if(id != undefined){
      setInfos(infos.filter((info) => info.id != id));
    }
  }
  // const {img, title, price, text, fullText} = data[0];


  return (
    <main>
      <h1>Our tours</h1>
      <div className="underline"></div>
      <Container>
        {infos.map((node) => {
          const {id, img, title, price, text, fullText} = node;
          return <Panel key={id} keyValue={id} onDelete={deletePanel} img={img} title={title} price={price} text={text} fullText={fullText} />
        })}
        {/* <Panel img={data[0].img} title={data[0].title} price={data[0].price} text={data[0].text} fullText={data[0].fullText}/>
        <Panel img={data[1].img} title={data[1].title} price={data[1].price} text={data[1].text} fullText={data[1].fullText}/> */}

      </Container>
    </main>
  );
}

export default App;
