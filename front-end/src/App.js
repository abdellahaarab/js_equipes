import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddEquipes from './components/AddEquipes';
import AllEquipes from './components/AllEquipes';
import FindEquipes from './components/FindEquipes';
import UpdateEquipes from './components/UpdateEquipes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<AllEquipes/>} />
          <Route path="/find" element={<FindEquipes/>} />
          <Route path="/update" element={<UpdateEquipes/>} />
          <Route path="/add" element={<AddEquipes/>} />
          {/* <UpdateEquipes/> */}
          {/* <AddEquipes/> */}
          {/* <FindEquipes/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
