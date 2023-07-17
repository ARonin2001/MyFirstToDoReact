import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AboutToDo from './components/AboutToDo/AboutToDo';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main">
          <div className="content">
            <div className="content__container">
              <Routes>
                <Route path="/" element={<Main/>}  />
                <Route path="/about-to-do" element={<AboutToDo/>} />
              </Routes>
              
            </div>
          </div>
        </div> 
      </div>
    </BrowserRouter>
  );
}

export default App;
