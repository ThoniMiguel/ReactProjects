import React, {useState, useRef} from 'react';
import List from './List';

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState();

  const refFocus = useRef(null);

  const handleSubmit = (e) => {
    setIsEditing(false);
    setId(null);
    setText("");
    e.preventDefault();
    if(text && !isEditing){
      const newData = {id:new Date().getTime().toString(), text};
      setData([...data, newData]);
      setText("");
    }
    if(isEditing && text){
      setData(data.map((item) => {
        if(item.id === id){
          return {...item, text};
        }
        return item;
      }))      
    }
  }

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

  const handleEdit = (id) =>{
    const found = data.find((element) => element.id === id);
    setText(found.text);
    setIsEditing(true);
    setId(id);
    refFocus.current.focus();
  }

  
  const delItems = () => {
    setData([]);
  }

  return (
    <main>
      <section className="center">
        <h3 className="title">Grocery Bud</h3>
        <form className="form-add" onSubmit={handleSubmit}>
          <div className="form-control">
            <input type="text" ref={refFocus}  id="text-input" placeholder="e.g. eggs" value={text} onChange={(e) => {setText(e.target.value)}} autoFocus/>
            <button type="submit">{isEditing ? "edit" : "submit"}</button>
          </div>
        </form>
      </section>
      {
        data.map((info) => {
          const {id} = info
          return <List key={id} item={info} onDelete={handleDelete} onEdit={handleEdit}/>
        })
      }
      {data.length > 0 ? <button className="clear-items" onClick={delItems}>Clear Items</button> : ""}
    </main>
  );
}

export default App;
