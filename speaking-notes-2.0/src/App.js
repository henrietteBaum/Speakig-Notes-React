import './App.css';
import Header from './components/Header';
import NoteBox from './components/NoteBox';
import RightMenu from './components/RightMenu';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <RightMenu />
      <NoteBox />
    </div>
  );
}

export default App;
