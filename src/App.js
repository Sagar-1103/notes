import Navbar  from './components/Navbar';
import './App.css';
import { 
  BrowserRouter as Router, Route, Routes 
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <Alert message="Hello" />
    <div className="container">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/users'/>
    </Routes>
    </div>
    </Router>
    </NoteState>
    </>
  );
}
export default App;
