import React, {useState} from 'react';
import data from './data';
function App() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(value);
    if(value <= 0){
      amount = 1;
    }
    if(value > 8){
      amount = 8;
    }
    setText(data.slice(0, amount));
  }
  return (
    <section className="section-center">
      <div className="title">
        <h3>Tired of boring lorem ipsum?</h3>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="paragraphs">Paragraphs: </label>
        <input type="number" value={value} id="paragraphs" onChange={(e) => {setValue(e.target.value)}}/>
        <button type="submit">generate</button>
      </form>
      <article className="text-generated">
        {
          text.map((info, index) => {
            return <p key={index}>{info}</p>
          })
        }
      </article>
    </section>
  );
}

export default App;
