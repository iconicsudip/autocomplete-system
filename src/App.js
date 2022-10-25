import './App.css';
import SearchBar from './components/SearchBar';
import Database from './components/Database';
import React,{useState} from 'react'

function App() {
  let Items;
  if (localStorage.getItem("database") === "null" || JSON.parse(localStorage.getItem("database")).length===0) {
    // console.log(JSON.parse(localStorage.getItem("database").length)===0)
      Items = null;
  } else {
      Items = JSON.parse(localStorage.getItem("database"));
  }
  let [items, setItems] = useState(Items);
  return (
    <div className="App">
      <div className='twosection'>
        <SearchBar items={items} setItems={setItems}/>
        <Database items={items} setItems={setItems}/>
      </div>
    </div>
  );
}

export default App;
