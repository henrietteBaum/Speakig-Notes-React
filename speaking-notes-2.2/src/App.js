import Header from './components/Header';
import NoteBox from './components/NoteBox';
import Sidebar from './components/Sidebar';
import Container from './styles/Container.style';
import GlobalStyle from './styles/GlobalStyle.style';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Sidebar />
        <NoteBox />
      </Container>


    </>
  );
}

export default App;
