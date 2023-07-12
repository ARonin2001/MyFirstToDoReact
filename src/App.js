import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Sort from './components/Sort/Sort';
import TaskCreator from './components/TaskCreator/TaskCreator';
import Tasks from './components/Tasks/Tasks';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="content">
          <div className="content__container">
            <Sort />
            <TaskCreator />
            <Tasks />
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
