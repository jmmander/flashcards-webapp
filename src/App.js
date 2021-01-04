import './App.css';
import Navbar from './components/navbar'
import AddCard from './components/Card/AddCard'
import CardViewer from './components/CardViewer/CardViewer'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CardViewer></CardViewer>
    </div>
  );
}

export default App;
