import React from "react";
// import axios from "axios";
import History from "./Components/History";
import Header from "./Components/Header";
import Home from './Components/Home';
import WordsDetailPage from "./Components/WordsDetailPage";
import {Routes, Route} from "react-router-dom";
function App() {

// axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/%7Bword%7D')
// .then(response => console.log(response))
// .catch(error =>console.log(error));





  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/history' element={<History />}/>
      </Routes>

      {/* <WordsDetailPage/> */}
    </div>
  );
}

export default App;
