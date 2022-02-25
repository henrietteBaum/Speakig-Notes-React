import './App.css';
import Header from './components/Header';
import NoteText from './components/NoteText';
import RightMenu from './components/RightMenu';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <RightMenu />
      <NoteText />
    </div>
  );
}

export default App;
