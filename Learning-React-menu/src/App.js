import React, { useState, useEffect } from 'react';
import menu from './data';
import Item from './Item';

function App() {
  const [infos] = useState(menu);
  const [object, setObject] = useState(menu);

  const setCategory = (category) => {
    if(category === "all"){
      setObject(menu);
      return;
    }
    let objTemp = infos.filter((info) => info.category === category);
    setObject(objTemp);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button className="filter-btn" onClick={(e) => {setCategory(e.target.textContent)}}>all</button>
          <button className="filter-btn" onClick={(e) => {setCategory(e.target.textContent)}}>breakfast</button>
          <button className="filter-btn" onClick={(e) => {setCategory(e.target.textContent)}}>lunch</button>
          <button className="filter-btn" onClick={(e) => {setCategory(e.target.textContent)}}>shakes</button>
        </div>
        <div className="section-center">
          {object.map((data) => {
            return <Item img={data.img} title={data.title} price={data.price} desc={data.desc} />
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
