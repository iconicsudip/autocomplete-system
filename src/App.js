import './App.css';
import Database from './components/Database';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<SearchBar/>} exact/>
          <Route path="/database" element={<Database />} exact/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
